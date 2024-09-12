import React from "react";

type StatusBarProps = {
  statusBarName: string;
  isActive: boolean;
  setActiveStatusFunc: (statusBarName: string) => void;
  hasCount?: boolean;
};

function StatusBar({
  statusBarName,
  isActive,
  setActiveStatusFunc,
  hasCount,
}: StatusBarProps) {
  const handleChangeActiveStaus = () => {
    setActiveStatusFunc(statusBarName);
  };

  return (
    <div
      onClick={handleChangeActiveStaus}
      className={`flex items-center gap-2 px-[16px] py-[8px] border-b-[3px] cursor-pointer ${
        isActive == true ? "border-b-primary-pink600" : "border-b-transparent"
      } `}
    >
      <h3
        className={`text-[16px] leading-[26px] ${
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
          21
        </p>
      ) : null}
    </div>
  );
}

export default StatusBar;
