import React from "react";

type actionButtonProps = {
  name: string;
  fullWidth?: boolean;
  icon?: any;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

function ActionButton({ name, fullWidth, icon: Icon, onClick, type }: actionButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`${
        fullWidth ? " w-full" : ""
      } bg-primary inline-block rounded-md cursor-pointer border text-center`}
    >
      {/* <Icon className={`${"text-white"} `} /> */}
      <p className="text-white py-[10px] px-[20px] text-[14px] font-[500]">
        {name}
      </p>
    </button>
  );
}

export default ActionButton;
