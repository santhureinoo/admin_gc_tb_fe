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
  type?: string | null;
};

type customTableProps = {
  headersList: headerValue[];
  data: any;
  hasCheckbox?: boolean;
  sortingOnClick: (data: any) => void;
  checkBoxOnClick: (data: any) => void;
  allCheckBoxOnClick: () => void;
  selectedRowsId?: number[];
  actionButtonText: string;
  idProps: string;
  viewBtnOnClick?: (id: any) => void;
  isCopy?: boolean;
};

import { useRouter } from "next/navigation";
import { FaSort } from "react-icons/fa";
import { openModal, sortByProperty } from "@/utils";
import { ActionButton } from "../buttons";

function CustomLicenseKeyTable({
  headersList,
  data,
  sortingOnClick,
  checkBoxOnClick,
  selectedRowsId,
  actionButtonText,
  viewBtnOnClick,
  allCheckBoxOnClick,
  idProps,
  hasCheckbox,
  isCopy
}: customTableProps) {
  const [isAscending, setIsAscending] = useState(true);
  const router = useRouter();
  console.log("*** data ***", data);
  return (
    <div className="w-full max-w-[calc(100vw-150px)] md:max-w-[calc(100vw-360px)]">
      <div className="p-3">
        <div className="overflow-x-auto h-full min-h-[400px] max-h-[calc(100vh-300px)]">
          <table className="table-auto w-full border-collapse border border-slate-200">
            <thead className="text-[13px] sticky top-0 z-40">
              <tr className="border border-slate-200">
                {hasCheckbox && (
                  <th className="px-5 py-4  border border-slate-200 bg-[#FAFAFA]">
                  <div className="font-medium text-left">
                    <input
                      onChange={() => allCheckBoxOnClick()}
                      checked={
                        selectedRowsId && selectedRowsId.length > 0
                          ? true
                          : false
                      }
                      type="checkbox"
                      className="checkbox bg-white border border-neutralGrey-grey400 [--chkbg:#15B0AC] [--chkfg:#FFFFFF] checked:border-none checkbox-sm"
                    />
                  </div>
                </th>
                )}
                
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
                <th className="px-5 py-4  border border-slate-200 bg-[#FAFAFA] first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0 shadow-2xl z-40">
                  <div className="flex items-center justify-between font-medium text-left text-nowrap">
                    View
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm font-medium">
              {data?.map((el: any, index: any) => (
                <tr className="border border-slate-200" key={index}>
                  {hasCheckbox && (
                    <td className="pl-5">
                    <input
                      checked={
                        selectedRowsId?.find(
                          (rowId) => rowId == el[idProps]
                        ) == undefined
                          ? false
                          : true
                      }
                      onChange={() =>
                        checkBoxOnClick(
                          el[idProps],
                        )
                      }
                      type="checkbox"
                      className="checkbox bg-white border border-neutralGrey-grey400 [--chkbg:#15B0AC] [--chkfg:#FFFFFF] checked:border-none checkbox-sm"
                    />
                    </td>
                  )}
                 
                  {headersList.map((hd, idx) => {
                    if (hd.ComponentName == null) {
                      return (
                        <td
                          key={idx}
                          className="px-5 py-2 border border-slate-200"
                        >
                          <div className="text-slate-500 text-nowrap">
                           { hd.type == "DATE"
                              ? new Date(
                                  el[hd.bodyKeyName]
                                ).toLocaleDateString()
                              : el[hd.bodyKeyName]}
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
                          {el[hd.bodyKeyName] == "REJECTED" ? (
                            <div className="bg-error-error200 px-[40px] py-[10px] rounded-md text-error-error600">
                              Rejected
                            </div>
                          ) : (
                            <Dropdown
                              position={index > 1 ? "dropdown-top" : ""}
                              value={el[hd.bodyKeyName]}
                              dropdownList={[
                                {
                                  name: "Pending",
                                  value: "PENDING",
                                },
                                {
                                  name: "Missing Infos",
                                  value: "MISSING_INFO",
                                },
                                // {
                                //   name: "Reuploaded",
                                //   value: "REUPLOADED",
                                // },
                                {
                                  name: "Approved",
                                  value: "APPROVED",
                                },
                                {
                                  name: "Interview",
                                  value: "INTERVIEW",
                                },
                              ]}
                              onSelect={openModal}
                              applicationId={el?.applicationId}
                              singleFileUpload
                              userId={el?.userId}
                            />
                          )}
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
                            {el[hd.bodyKeyName]?.map((badge: any) => (
                              <Badge key={badge} name={badge} />
                            ))}
                          </div>
                        </td>
                      );
                    }
                  })}
                  {viewBtnOnClick ? (
                    <td className="px-5 text-center py-2 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                      {/* <ActionButton /> */}

                      <button
                        onClick={() => {
                          if (viewBtnOnClick) viewBtnOnClick(el.id);
                          if(isCopy){
                            viewBtnOnClick(el.licenseKey)
                          }
                        }}
                        className="btn bg-primary text-white hover:bg-primary border-none animate-none text-nowrap"
                      >
                        {actionButtonText}
                      </button>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomLicenseKeyTable;
