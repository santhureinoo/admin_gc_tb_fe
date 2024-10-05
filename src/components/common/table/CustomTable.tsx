"use client";
import React, { useState } from "react";
import Badge from "../badge";
import Dropdown from "../dropdown";

type headerValue = {
  name: string;
  bodyKeyName: string;
  ComponentName?: "Dropdown" | "Badge" | "FixedStatus";
  sortable?: boolean;
  sortableType?: "string" | "number";
};

type customTableProps = {
  headersList: headerValue[];
  data: any;
  sortingOnClick: (data: any) => void;
};

import { useRouter } from "next/navigation";
import { FaSort } from "react-icons/fa";
import { sortByProperty } from "@/utils";

function CustomTable({ headersList, data, sortingOnClick }: customTableProps) {
  const [isAscending, setIsAscending] = useState(true);

  const router = useRouter();

  return (
    <div className="w-full max-w-[calc(100vw-150px)] md:max-w-[calc(100vw-380px)]">
      <div className="p-3">
        <div className="overflow-x-auto h-full max-h-[calc(100vh-300px)]">
          <table className="table-auto w-full border-collapse border border-slate-200">
            <thead className="text-[13px] sticky top-0 z-40">
              <tr className="border border-slate-200">
                <th className="px-5 py-4  border border-slate-200 bg-[#FAFAFA]">
                  <div className="font-medium text-left">
                    <input
                      type="checkbox"
                      className="checkbox bg-white border border-neutralGrey-grey400 [--chkbg:#15B0AC] [--chkfg:#FFFFFF] checked:border-none checkbox-sm"
                    />
                  </div>
                </th>
                {headersList.map((tableHeader, index) => (
                  <th
                    key={index}
                    className={`px-5 py-4  border border-slate-200 bg-[#FAFAFA] ${
                      headersList.length == index + 1
                        ? "first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0 shadow-2xl"
                        : ""
                    } `}
                  >
                    <div className="flex items-center justify-between font-medium text-left text-nowrap">
                      {tableHeader.name}

                      {tableHeader.sortable == true ? (
                        <FaSort
                          className="cursor-pointer ml-[40px]"
                          onClick={() => {
                            sortingOnClick(
                              sortByProperty(
                                [...data],
                                tableHeader.bodyKeyName,
                                isAscending,
                                tableHeader.sortableType
                              )
                            );
                            setIsAscending((prev) => !prev);
                          }}
                        />
                      ) : null}
                    </div>
                  </th>
                ))}
                <th className="px-5 py-4  border border-slate-200 bg-[#FAFAFA] first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0 shadow-2xl">
                  <div className="flex items-center justify-between font-medium text-left text-nowrap">
                    View CV
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm font-medium">
              {data?.map((el: any, index: any) => (
                // <tr className="border border-slate-200" key={index}>
                //   <td className="pl-5">
                //     <input type="checkbox" />
                //   </td>
                //   <td className="px-5 py-2 border border-slate-200">
                //     <div className="text-slate-500 text-nowrap">
                //       Hlyan Htet Aung
                //     </div>
                //   </td>
                //   <td className="px-5 py-2 border border-slate-200">
                //     <div className="text-slate-900">
                //       hlyanshapes1999@gmail.com
                //     </div>
                //   </td>
                //   <td className="px-5 py-2 border border-slate-200">
                //     <div className="text-slate-500 text-nowrap">
                //       +66 950495369
                //     </div>
                //   </td>
                //   <td className="px-5 py-2 border border-slate-200">
                //     <div className="text-slate-500 text-nowrap">22/12/2024</div>
                //   </td>
                //   <td className="px-5 py-2 border border-slate-200">
                //     <div className="bg-error-error200 rounded-md">
                //       <p className="text-error-error600 py-[10px] px-[20px]">
                //         Rejected
                //       </p>
                //     </div>
                //     {/* <Dropdown
                //       position={index > 6 ? "dropdown-top" : ""}
                //       value="Pending"
                //       dropdownList={[
                //         { name: "Pending", value: "Pending" },
                //         {
                //           name: "Missing Info",
                //           value: "Missing Info",
                //         },
                //         { name: "Reject", value: "Reject" },
                //       ]}
                //     /> */}
                //   </td>
                //   <td className="px-5 py-2 border border-slate-200">
                //     <div className="text-nowrap flex gap-2 items-center">
                //       <Badge name="Nurse" />
                //       <Badge name="Enrolled Nurse" />
                //       <Badge name="Community Services Assistant (CSA/PCA)" />
                //       <Badge name="Others" />
                //     </div>
                //   </td>
                //   <td className="px-5 py-2 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                //     <button
                //       onClick={() => router.push("/application-info/1")}
                //       className="btn w-full bg-primary text-white hover:bg-primary border-none animate-none text-nowrap"
                //     >
                //       View CV
                //     </button>
                //   </td>
                // </tr>

                <tr className="border border-slate-200" key={index}>
                  <td className="pl-5">
                    <input
                      type="checkbox"
                      className="checkbox bg-white border border-neutralGrey-grey400 [--chkbg:#15B0AC] [--chkfg:#FFFFFF] checked:border-none checkbox-sm"
                    />
                  </td>
                  {headersList.map((hd, idx) => {
                    if (hd.ComponentName == null) {
                      return (
                        <td
                          key={idx}
                          className="px-5 py-2 border border-slate-200"
                        >
                          <div className="text-slate-500 text-nowrap">
                            {el[hd.bodyKeyName]}
                          </div>
                        </td>
                      );
                    }
                    // **** for Dropdown component ****
                    if (hd.ComponentName == "Dropdown") {
                      return (
                        <td
                          key={idx}
                          className="px-5 py-2 border border-slate-200"
                        >
                          <Dropdown
                            position={
                              data.length > index + 3 ? "" : "dropdown-top"
                            }
                            value="Pending"
                            dropdownList={[
                              { name: "Pending", value: "Pending" },
                              {
                                name: "Missing Info",
                                value: "Missing Info",
                              },
                              { name: "Reject", value: "Reject" },
                            ]}
                          />
                        </td>
                      );
                    }
                    // *** for Badge component ****
                    if (hd.ComponentName == "Badge") {
                      return (
                        <td
                          key={idx}
                          className="px-5 py-2 border border-slate-200"
                        >
                          <div className="text-nowrap flex gap-2 items-center">
                            <Badge name="Nurse" />
                            <Badge name="Enrolled Nurse" />
                            <Badge name="Community Services Assistant (CSA/PCA)" />
                            <Badge name="Others" />
                          </div>
                        </td>
                      );
                    }
                  })}
                  <td className="px-5 py-2 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                    <button
                      onClick={() => router.push("/application-info/1")}
                      className="btn w-full bg-primary text-white hover:bg-primary border-none animate-none text-nowrap"
                    >
                      View CV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
