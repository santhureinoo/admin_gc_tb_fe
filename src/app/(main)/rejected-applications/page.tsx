"use client";

import { getApplications } from "@/actions/applications";
import { ApproveModal, RejectModal } from "@/components/common/modals";
import Pagination from "@/components/common/pagination";
import CustomTable from "@/components/common/table";
import { SearchTextField } from "@/components/common/text-field";
import { MODALS } from "@/constants";
import {
  addAllApplications,
  addApplications,
  clearApplications,
  removeApplications,
} from "@/redux/selectedApplicationsSlice";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function RejectedApplications() {
  const [searchApplicationText, setSearchApplicationText] = useState("");
  const [rejectedApplications, setRejectedApplications] = useState([]);
  const dispatch = useDispatch();

  const { selectedApplications } = useAppSelector(
    (state) => state.selectedApplications
  );

  const fetchRejectedApplications = async () => {
    setRejectedApplications([]);
    const data = await getApplications({
      filter: {
        status: "REJECTED", // application status [PENDING, MISSING_INFO, REUPLOADED, APPROVED, INTERVIEW]
        isAuResident: null, // application resident type [null -> all, true -> AU Resident, false -> non-AU Resident]
      },
      page: {
        currentPage: 1, // current user seleced page
        pageSize: 5, // number of applications to be fetch per page
      },
      search: searchApplicationText, // seaerch by FirstName, LastName, Phone, AppliedPosition
    });
    setRejectedApplications(data);
  };

  const handleClickCheckBox = (id: number) => {
    const duplicateId = selectedApplications.find((el) => el == id);
    if (duplicateId == undefined) {
      dispatch(addApplications({ id: id, applicationStatus: "REJECTED" }));
    }
    if (duplicateId) {
      dispatch(removeApplications(id));
    }
  };

  const handleClickAllCheckBox = () => {
    const allApplicationsId = rejectedApplications.map(
      (app: any) => app.applicationId
    );

    if (selectedApplications.length > 0) {
      dispatch(clearApplications());
    } else {
      dispatch(addAllApplications(allApplicationsId));
    }
  };

  useEffect(() => {
    fetchRejectedApplications();
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px]">Job Applications</p>

        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            Rejected Applications
          </h3>

          <div className="flex items-center gap-3">
            <SearchTextField
              onChange={(value) => setSearchApplicationText(value)}
            />
          </div>

          <CustomTable
            selectedRowsId={selectedApplications}
            headersList={[
              {
                name: "Name",
                bodyKeyName: "applicantName",
                sortable: true,
                sortableType: "string",
              },
              {
                name: "Email",
                bodyKeyName: "applicantName",
                sortable: true,
                sortableType: "number",
              },
              {
                name: "Phone Number",
                bodyKeyName: "phone",
                sortable: true,
              },
              {
                name: "Applied date",
                bodyKeyName: "createdDate",
                sortable: true,
              },
              {
                name: "Status",
                bodyKeyName: "applicationStatus",
                ComponentName: "Dropdown",
              },
              {
                name: "Job Position",
                bodyKeyName: "appliedPositions",
                ComponentName: "Badge",
              },
            ]}
            data={rejectedApplications}
            sortingOnClick={(data) => {
              const newData = data;
              setRejectedApplications(() => newData);
            }}
            checkBoxOnClick={handleClickCheckBox}
            allCheckBoxOnClick={handleClickAllCheckBox}
          />

          {/* <Pagination /> */}
          {/* Modals (modal id must be unique) */}
          <RejectModal modalId={MODALS.rejectModalId} />
          <ApproveModal modalId={MODALS.approveModalId} />
        </div>
      </div>
    </div>
  );
}

export default RejectedApplications;
