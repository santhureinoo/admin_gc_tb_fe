import React from "react";

type CancelButtonProps = {
  onClick?: () => void;
};

function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <div
      onClick={onClick}
      className="bg-transparent inline-block rounded-md cursor-pointer border"
    >
      <p className="text-neutralGrey-grey800 py-[10px] px-[20px] text-[14px] font-[500]">
        Cancel
      </p>
    </div>
  );
}

export default CancelButton;
