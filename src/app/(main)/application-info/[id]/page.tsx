"use client";

import Badge from "@/components/common/badge";
import Dropdown from "@/components/common/dropdown";
import Header from "@/components/common/header";
import ScrollSpy from "react-scrollspy-navigation";
import React, { useEffect, useState } from "react";

import {
  ApplicantDetail,
  ApplicantVideo,
  Availability,
  Certificate,
  EmergencyContact,
  FinancialInfo,
  IDReview,
  Profile,
  WorkerDetail,
} from "@/components/applicant-info";
import { dateFormat, openModal } from "@/utils";
import { useParams } from "next/navigation";
import { getApplicationDetails } from "@/actions/applications";
import { useAppSelector } from "@/redux/store";

function ApplicatoinInfo() {
  const { id } = useParams();
  const { selectedApplications } = useAppSelector(
    (state) => state.selectedApplications
  );
  const [applicationDetails, setApplicationDetails] = useState<any>({});

  const fetchApplicationDetails = async () => {
    const data = await getApplicationDetails({
      caseId: parseInt(id as string),
    });
    setApplicationDetails(data);
  };

  useEffect(() => {
    fetchApplicationDetails();
  }, [id, selectedApplications]);

  console.log("*** application details ***", applicationDetails);

  const nav = [
    { href: "#section-a1", title: "Applicant Details" },
    { href: "#section-a2", title: "Worker Details" },
    { href: "#section-a3", title: "Certificate" },
    { href: "#section-a4", title: "Applicant’s Video" },
    { href: "#section-a5", title: "Profile" },
    { href: "#section-a6", title: "Emergency Contact" },
    { href: "#section-a7", title: "Financial Infos" },
    { href: "#section-a8", title: "Availability" },
    { href: "#section-a9", title: "ID Review" },
  ];

  const fullName =
    applicationDetails?.firstName + " " + applicationDetails?.lastName;

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px]">
          Job Applications / Applicant&apos;s info
        </p>
        <div className="bg-white pt-[10px] px-[20px] my-[16px] min-h-screen">
          <div className="sticky top-0 pt-[10px] bg-white">
            <div className="flex items-center justify-between">
              <div>
                <Header title={fullName} />
                <p className="text-neutralGrey600 font-[400] text-[14px]">
                  Applied date-{" "}
                  {dateFormat(applicationDetails?.submissionDate as string)}
                </p>
              </div>

              <Dropdown
                fixLabel={applicationDetails?.applicationStatus}
                position={"dropdown-end"}
                value={applicationDetails?.applicationStatus}
                dropdownList={[
                  // { name: "Pending", value: "PENDING" },
                  { name: "Approve", value: "APPROVED" },
                  {
                    name: "Missing Info",
                    value: "MISSING_INFO",
                  },
                  { name: "Reject", value: "REJECT" },
                  { name: "Interview", value: "INTERVIEW" },
                ]}
                onSelect={openModal}
                applicationId={id as string}
                singleFileUpload
                userId={applicationDetails?.userId}
                applicationDetails={applicationDetails}
              />
            </div>
            {/* Job position list */}
            <div className="flex flex-wrap gap-2 mt-2 mb-[20px]">
              {applicationDetails?.positionApplyingFor?.map((pos: string) => (
                <Badge name={pos} key={pos} />
              ))}
            </div>
            <ScrollSpy
              activeClass="border-b-primary-pink600"
              offsetTop={80}
              rootMargin="-60px 0px 0px 0px"
            >
              <nav>
                <ul className="flex items-center my-[16px] w-[calc(100vw-380px)] overflow-x-auto">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <a
                        className="flex items-center gap-2 px-[16px] py-[8px] border-b-[3px] cursor-pointer text-nowrap"
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollSpy>
          </div>
          <ApplicantDetail applicationDetails={applicationDetails} />
          <WorkerDetail applicationDetails={applicationDetails} />
          <Certificate applicationDetails={applicationDetails} />
          <ApplicantVideo applicationDetails={applicationDetails} />
          <Profile applicationDetails={applicationDetails} />
          <EmergencyContact applicationDetails={applicationDetails} />
          <FinancialInfo applicationDetails={applicationDetails} />
          <Availability applicationDetails={applicationDetails} />
          <IDReview applicationDetails={applicationDetails} />
        </div>
      </div>
    </div>
  );
}

export default ApplicatoinInfo;
