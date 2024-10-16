import { APPLICATIONS_STATUS } from "@/constants";
import React from "react";

type StatusBarProps = {
  statusBarName: string;
  isActive: boolean;
  statusBarValue: APPLICATIONS_STATUS;
  setActiveStatusFunc: (statusBarValue: APPLICATIONS_STATUS) => void;
  setDataCounts: (count: number) => void;
  hasCount?: boolean;
  count?: number;
};

function StatusBar({
  statusBarName,
  isActive,
  setActiveStatusFunc,
  hasCount,
  count,
  statusBarValue,
  setDataCounts,
}: StatusBarProps) {
  const handleChangeActiveStaus = () => {
    setDataCounts(count as number);
    setActiveStatusFunc(statusBarValue);
  };

  return (
    <div
      onClick={handleChangeActiveStaus}
      className={`flex items-center gap-2 px-[16px] py-[8px] border-b-[3px] cursor-pointer ${
        isActive == true ? "border-b-primary-pink600" : "border-b-transparent"
      } `}
    >
      <h3
        className={`text-[16px] leading-[26px] whitespace-nowrap ${
          isActive == true
            ? "font-[500] text-neutralGrey800"
            : "font-[400] text-black"
        }`}
      >
        {statusBarName}
      </h3>
      {hasCount == true ? (
        <p
          className={`px-[8px] py-[4px] rounded-md leading-[22px] ${
            isActive == true
              ? "bg-primary-pink100 text-primary-pink600 font-[700]"
              : "bg-neutralGrey200 font-[400]"
          } `}
        >
          {count}
        </p>
      ) : null}
    </div>
  );
}

export default StatusBar;
