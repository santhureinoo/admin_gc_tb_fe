import React from "react";

type RejectButtonProps = {
  title: string;
};

function RejectButton({ title }: RejectButtonProps) {
  return (
    <div className="bg-error-error500 inline-block rounded-md cursor-pointer">
      <p className="text-neutralGrey py-[10px] px-[20px] text-[14px] font-[500]">
        {title}
      </p>
    </div>
  );
}

export default RejectButton;
