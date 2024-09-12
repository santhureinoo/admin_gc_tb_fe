"use client";
import Badge from "@/components/common/badge";
import Dropdown from "@/components/common/dropdown";
import { InfoCardList } from "@/components/common/info-card";
import Pagination from "@/components/common/pagination";
import { StatusBarList } from "@/components/common/status-bar";
import CustomTable from "@/components/common/table";
import { SearchTextField } from "@/components/common/text-field";
import { useEffect, useState } from "react";

export default function Home() {
  const [tableDatas, setTableDatas] = useState();
  const fetchRandomData = async () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setTableDatas(json));
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px]">Job Applications</p>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            Job Applications
          </h3>
          <InfoCardList />
          <StatusBarList
            activeName="Pending"
            statusBarList={[
              { name: "Pending", value: "pending" },
              { name: "Missing Infos", value: "misssingInfo" },
              { name: "Reuploaded", value: "reuploaded" },
              { name: "Approved", value: "approved" },
              { name: "Interview", value: "interview" },
            ]}
            hasCount
          />
          <div className="flex items-center justify-between">
            <SearchTextField />
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
          <CustomTable
            headersList={[
              // { name: "Name", bodyKeyName: "name" },
              // { name: "Email", bodyKeyName: "email" },
              // { name: "Phone Number", bodyKeyName: "phoneNumber" },
              // { name: "Applied date", bodyKeyName: "appliedDate" },
              // { name: "Status", bodyKeyName: "status" },
              // { name: "Job Position", bodyKeyName: "jobPosition" },
              // { name: "View", bodyKeyName: "view" },
              {
                name: "id",
                bodyKeyName: "id",
                ComponentName: "Dropdown",
              },
              {
                name: "Title",
                bodyKeyName: "title",
                ComponentName: "Badge",
              },
              { name: "User Id", bodyKeyName: "userId" },
            ]}
            data={tableDatas}
          />

          <Pagination />
          <button
            className="btn"
            onClick={() => {
              const element = document.getElementById(
                "my_modal_2"
              ) as HTMLDialogElement;

              element.showModal();
            }}
          >
            open modal
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
