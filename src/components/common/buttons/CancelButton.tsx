import React from "react";

type CancelButtonProps = {
  onClick?: () => void;
  name?: string;
  fullWidth?: boolean;
};

function CancelButton({ onClick, name, fullWidth }: CancelButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        fullWidth ? "w-full" : ""
      } bg-transparent inline-block rounded-md cursor-pointer border`}
    >
      <p className="text-neutralGrey-grey800 py-[10px] px-[20px] text-[14px] font-[500] text-center">
        {name}
      </p>
    </div>
  );
}

export default CancelButton;
