"use client";
import { MODALS } from "@/constants";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

type DropdownValue = {
  name: string;
  value: string;
};

type DropdownProps = {
  dropdownList: DropdownValue[];
  value: string;
  position?: string;
  onSelect?: (value: string) => void;
};

function Dropdown({ value, dropdownList, position, onSelect }: DropdownProps) {
  const [selectedName, setSelectedName] = useState<string>(value);

  const handleClick = (selectedValue: string) => {
    // to close dropdown when we click on li (*** for daisyui ***)
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
    setSelectedName(selectedValue);
    if (onSelect !== undefined) {
      if (selectedValue == "Approve") {
        onSelect(MODALS.approveModalId);
      }
      if (selectedValue == "Reject") {
        onSelect(MODALS.rejectModalId);
      }
    }
  };

  return (
    <div className={`dropdown ${position} text-nowrap`}>
      <div
        tabIndex={0}
        role="button"
        className="btn bg-transparent hover:bg-neutralGrey200 animate-none border border-neutralGrey-grey400"
      >
        <div className="flex gap-2">
          {selectedName} <AiFillCaretDown />
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
