import React from "react";

type actionButtonProps = {
  name: string;
  fullWidth?: boolean;
  icon?: any;
  onClick?: () => void;
};

function ActionButton({ name, fullWidth, icon: Icon, onClick }: actionButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        fullWidth ? " w-full" : ""
      } bg-primary inline-block rounded-md cursor-pointer border text-center`}
    >
      {/* <Icon className={`${"text-white"} `} /> */}
      <p className="text-white py-[10px] px-[20px] text-[14px] font-[500]">
        {name}
      </p>
    </div>
  );
}

export default ActionButton;
