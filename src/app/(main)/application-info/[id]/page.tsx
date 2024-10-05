"use client";

import Badge from "@/components/common/badge";
import Dropdown from "@/components/common/dropdown";
import Header from "@/components/common/header";
import ScrollSpy from "react-scrollspy-navigation";
import React from "react";

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

function ApplicatoinInfo() {
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

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px]">
          Job Applications / Applicant's info
        </p>
        <div className="bg-white pt-[10px] px-[20px] my-[16px] min-h-screen">
          <div className="sticky top-0 pt-[10px] bg-white">
            <div className="flex items-center justify-between">
              <div>
                <Header title="Mark Simpson" />
                <p className="text-neutralGrey600 font-[400] text-[14px]">
                  Applied date- 22/12/2024
                </p>
              </div>
              <Dropdown
                position={"dropdown-end"}
                value="Move To"
                dropdownList={[
                  { name: "Approve", value: "Approve" },
                  {
                    name: "Missing Info",
                    value: "Missing Info",
                  },
                  { name: "Reject", value: "Reject" },
                ]}
              />
            </div>
            {/* Job position list */}
            <div className="flex flex-wrap gap-2 mt-2 mb-[20px]">
              <Badge name="Nurse" />
              <Badge name="Enrolled Nurse" />
              <Badge name="Community Services Assistant (CSA/PCA)" />
              <Badge name="Others" />
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
          <ApplicantDetail />
          <WorkerDetail />
          <Certificate />
          <ApplicantVideo />
          <Profile />
          <EmergencyContact />
          <FinancialInfo />
          <Availability />
          <IDReview />
        </div>
      </div>
    </div>
  );
}

export default ApplicatoinInfo;
