"use client";

import { ApproveModal, RejectModal } from "@/components/common/modals";
import Pagination from "@/components/common/pagination";
import CustomTable from "@/components/common/table";
import { SearchTextField } from "@/components/common/text-field";
import { MODALS } from "@/constants";
import React from "react";
import { CiFilter } from "react-icons/ci";
function RejectedApplications() {
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
            <SearchTextField />
          </div>
          <CustomTable
            headersList={[
              { name: "Name", bodyKeyName: "name" },
              { name: "Email", bodyKeyName: "email" },
              { name: "Phone Number", bodyKeyName: "phoneNumber" },
              { name: "Applied date", bodyKeyName: "appliedDate" },
              {
                name: "Status",
                bodyKeyName: "status",
                ComponentName: "FixedStatus",
              },
              {
                name: "Job Position",
                bodyKeyName: "jobPosition",
                ComponentName: "Badge",
              },
              { name: "View", bodyKeyName: "view" },
              // {
              //   name: "id",
              //   bodyKeyName: "id",
              //   ComponentName: "Dropdown",
              // },
              // {
              //   name: "Title",
              //   bodyKeyName: "title",
              //   ComponentName: "Badge",
              // },
              // { name: "User Id", bodyKeyName: "userId" },
            ]}
            data={new Array(20).fill("")}
          />
          <Pagination />
          {/* Modals (modal id must be unique) */}
          <RejectModal modalId={MODALS.rejectModalId} />
          <ApproveModal modalId={MODALS.approveModalId} />
        </div>
      </div>
    </div>
  );
}

export default RejectedApplications;
