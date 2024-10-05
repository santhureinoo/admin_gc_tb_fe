"use client";
import Dropdown from "@/components/common/dropdown";
import { InfoCardList } from "@/components/common/info-card";
import Pagination from "@/components/common/pagination";
import { StatusBarList } from "@/components/common/status-bar";
import CustomTable from "@/components/common/table";
import { SearchTextField } from "@/components/common/text-field";
import { openModal } from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [testDatas, setTestDatas] = useState([
    {
      name: "b",
      email: "b@gmail.com",
      phoneNumber: "+66 123123",
      appliedDate: "22/12/2024",
      status: "Rejected",
      jobPosition: "dummy",
    },
    {
      name: "a",
      email: "a@gmail.com",
      phoneNumber: "+66 3333112",
      appliedDate: "22/12/2024",
      status: "Rejected",
      jobPosition: "dummy",
    },
    {
      name: "c",
      email: "c@gmail.com",
      phoneNumber: "+66 444444111",
      appliedDate: "22/12/2024",
      status: "Rejected",
      jobPosition: "dummy",
    },
    {
      name: "d",
      email: "d@gmail.com",
      phoneNumber: "+66 55512312",
      appliedDate: "22/12/2024",
      status: "Rejected",
      jobPosition: "dummy",
    },
  ]);
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
          <div className="flex flex-col items-start xl:flex-row xl:items-center justify-between">
            <SearchTextField />
            <div className="flex items-center gap-3">
              <Dropdown
                position={"dropdown-end"}
                value="All applicants"
                dropdownList={[
                  { name: "All applicants", value: "All applicants" },
                  {
                    name: "Australian Residents",
                    value: "Australian Residents",
                  },
                  {
                    name: "Non-Australian Residents",
                    value: "Non Australian Residents",
                  },
                ]}
                onSelect={openModal}
              />
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
                onSelect={openModal}
              />
            </div>
          </div>
          <CustomTable
            headersList={[
              {
                name: "Name",
                bodyKeyName: "name",
                sortable: true,
                sortableType: "string",
              },
              {
                name: "Email",
                bodyKeyName: "email",
                sortable: true,
                sortableType: "number",
              },
              {
                name: "Phone Number",
                bodyKeyName: "phoneNumber",
                sortable: true,
              },
              {
                name: "Applied date",
                bodyKeyName: "appliedDate",
                sortable: true,
              },
              {
                name: "Status",
                bodyKeyName: "status",
                ComponentName: "Dropdown",
              },
              {
                name: "Job Position",
                bodyKeyName: "jobPosition",
                ComponentName: "Badge",
              },
              // { name: "View", bodyKeyName: "view" },
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
            data={testDatas}
            sortingOnClick={(data) => {
              const newData = data;
              console.log("*** new Data**** ", newData);
              setTestDatas(() => newData);
            }}
          />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
