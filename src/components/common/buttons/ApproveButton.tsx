import React from "react";

type ApproveButtonProps = {
  title: string;
  onClick: () => void;
};

function ApproveButton({ title, onClick }: ApproveButtonProps) {
  return (
    <div
      onClick={onClick}
      className="bg-success-success400 inline-block rounded-md cursor-pointer"
    >
      <p className="text-neutralGrey py-[10px] px-[20px] text-[14px] font-[500]">
        {title}
      </p>
    </div>
  );
}

export default ApproveButton;
