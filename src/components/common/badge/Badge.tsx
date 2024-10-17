import React from "react";

type BadgeProps = {
  name: string;
};

function Badge({ name }: BadgeProps) {
  let bgColor =
    name == "Nurse"
      ? "bg-[#E6F4FF]"
      : name == "Enrolled Nurse"
      ? "bg-[#F0F5FF]"
      : name == "Community Services Assistant (CSA/PCA)"
      ? "bg-[#EEFFDD]"
      : "bg-[#F9F0FF]";

  let textColor =
    name == "Nurse"
      ? "text-[#1677FF]"
      : name == "Enrolled Nurse"
      ? "text-[#2F54EB]"
      : name == "Community Services Assistant (CSA/PCA)"
      ? "text-[#379708]"
      : "text-[#722ED1]";

  return (
    <div
      className={`flex items-center justify-center ${bgColor} py-[10px] rounded-md`}
    >
      <p className={`${textColor} text-nowrap font-[400] px-[20px]`}>{name}</p>
    </div>
  );
}

export default Badge;
