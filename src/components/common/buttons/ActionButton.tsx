import React from "react";

function ActionButton() {
  return (
    <div
      //   onClick={onClick}
      className="bg-primary inline-block rounded-md cursor-pointer border"
    >
      <p className="text-white py-[10px] px-[20px] text-[14px] font-[500]">
        Send to the applicant
      </p>
    </div>
  );
}

export default ActionButton;
