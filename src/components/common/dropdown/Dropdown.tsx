"use client";
import { MODALS } from "@/constants";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  addSingleApplications,
  clearApplications,
  setSelectedApplicantUserId,
} from "@/redux/selectedApplicationsSlice";
import { setAlert } from "@/redux/alertSlice";
import { updateApplicationsStatus } from "@/actions/applications";
import { useAppSelector } from "@/redux/store";
type DropdownValue = {
  name: string;
  value: string;
  bgColor?: string;
};

type DropdownProps = {
  dropdownList: DropdownValue[];
  value: string;
  position?: string;
  onSelect?: (value: string) => void;
  fixLabel?: string;
  applicationId?: string;
  singleFileUpload?: boolean;
  userId?: string;
  notStatus?: boolean; // which is for to get just the dropdown value that we selected
};

function Dropdown({
  value,
  dropdownList,
  position,
  onSelect,
  fixLabel,
  applicationId,
  singleFileUpload,
  notStatus,
  userId,
}: DropdownProps) {
  const { selectedApplications } = useAppSelector(
    (state) => state.selectedApplications
  );

  const [selectedValue, setSelectedValue] = useState<string>(value);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = async (selectedValue: string) => {
    // to close dropdown when we click on li (*** for daisyui ***)
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }

    setSelectedValue(selectedValue);

    if (onSelect !== undefined) {
      // ***
      if (notStatus) {
        onSelect(selectedValue);
        return;
      }
      // *** for all status ***
      // for approved status
      if (selectedValue == "APPROVED") {
        if (singleFileUpload) {
          dispatch(addSingleApplications(parseInt(applicationId as string)));
        }
        onSelect(MODALS.approveModalId);
      }

      // for REJECT status
      if (selectedValue == "REJECT") {
        if (singleFileUpload) {
          dispatch(addSingleApplications(parseInt(applicationId as string)));
        }
        onSelect(MODALS.rejectModalId);
      }

      // for missing info status
      if (selectedValue == "MISSING_INFO") {
        console.log("**** user Id is here ****", userId);
        dispatch(setSelectedApplicantUserId(userId as string));
        router.push(`/missing-info/${applicationId}`);
      }

      // for interview status
      if (selectedValue == "INTERVIEW") {
        if (singleFileUpload) {
          try {
            const data = await updateApplicationsStatus({
              action: "INTERVIEW",
              application_id_list: [parseInt(applicationId as string)],
            });

            dispatch(clearApplications());
            dispatch(
              setAlert({
                alertType: "success",
                alertMessage: `Applicant has been moved to interview by the admin.`,
              })
            );
          } catch (error: any) {
            setAlert({
              alertType: "error",
              alertMessage: `Something went wrong!`,
            });
          }
        }
        // for multiples applactions
        else {
          try {
            const data = await updateApplicationsStatus({
              action: "INTERVIEW",
              application_id_list: selectedApplications,
            });
            dispatch(clearApplications());
            dispatch(
              setAlert({
                alertType: "success",
                alertMessage: `Selected Applicants has been moved to interview by the admin.`,
              })
            );
          } catch (error: any) {
            setAlert({
              alertType: "error",
              alertMessage: `Something went wrong!`,
            });
          }
        }
      }
    }
  };

  const getDisplayName = dropdownList.filter(
    (dd: any) => dd.value == selectedValue
  )[0]?.name;

  const bgColor =
    selectedValue == "PENDING" || fixLabel == "PENDING"
      ? "bg-[#F6F6F6]"
      : selectedValue == "MISSING_INFO" || fixLabel == "MISSING_INFO"
      ? "bg-[#FEF2F2]"
      : selectedValue == "REUPLOADED" || fixLabel == "REUPLOADED"
      ? "bg-[#FFFBEB]"
      : selectedValue == "APPROVED" || fixLabel == "APPROVED"
      ? "bg-[#F0FDF4]"
      : selectedValue == "INTERVIEW" || fixLabel == "INTERVIEW"
      ? "bg-[#F4F0FD]"
      : "bg-transparent";

  const textColor =
    selectedValue == "PENDING" || fixLabel == "PENDING"
      ? "text-[#353535]"
      : selectedValue == "MISSING_INFO" || fixLabel == "MISSING_INFO"
      ? "text-[#EF4444]"
      : selectedValue == "REUPLOADED" || fixLabel == "REUPLOADED"
      ? "text-[#D97706]"
      : selectedValue == "APPROVED" || fixLabel == "APPROVED"
      ? "text-[#16A34A]"
      : selectedValue == "INTERVIEW" || fixLabel == "INTERVIEW"
      ? "text-[#260B63]"
      : "text-black";

  return (
    <div className={`dropdown ${position} text-nowrap`}>
      <div
        tabIndex={0}
        role="button"
        className={`btn ${bgColor} hover:bg-neutralGrey200 animate-none border-none`}
      >
        <div className="flex gap-2">
          <p className={`${textColor} font-normal`}>
            {fixLabel ? fixLabel : getDisplayName}
          </p>{" "}
          <AiFillCaretDown />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-50 w-52 p-2 shadow"
      >
        {dropdownList.map((ddList, index) => (
          <li key={index} onClick={() => handleClick(ddList.value)}>
            <a>{ddList.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
