"use client";
import { MODALS } from "@/constants";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

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
};

function Dropdown({
  value,
  dropdownList,
  position,
  onSelect,
  fixLabel,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const handleClick = (selectedValue: string) => {
    // to close dropdown when we click on li (*** for daisyui ***)
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }

    setSelectedValue(selectedValue);
    if (onSelect !== undefined) {
      if (selectedValue == "Approve") {
        onSelect(MODALS.approveModalId);
      }
      if (selectedValue == "Reject") {
        onSelect(MODALS.rejectModalId);
      }
      if (selectedValue == "MISSING_INFO") {
        onSelect(MODALS.rejectModalId);
      }
    }
  };

  const getDisplayName = dropdownList.filter(
    (dd: any) => dd.value == selectedValue
  )[0]?.name;

  const bgColor =
    selectedValue == "PENDING"
      ? "bg-[#F6F6F6]"
      : selectedValue == "MISSING_INFO"
      ? "bg-[#FEF2F2]"
      : selectedValue == "REUPLOADED"
      ? "bg-[#FFFBEB]"
      : selectedValue == "APPROVED"
      ? "bg-[#F0FDF4]"
      : selectedValue == "INTERVIEW"
      ? "bg-[#F4F0FD]"
      : "bg-transparent";

  const textColor =
    selectedValue == "PENDING"
      ? "text-[#353535]"
      : selectedValue == "MISSING_INFO"
      ? "text-[#EF4444]"
      : selectedValue == "REUPLOADED"
      ? "text-[#D97706]"
      : selectedValue == "APPROVED"
      ? "text-[#16A34A]"
      : selectedValue == "INTERVIEW"
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
