import React from "react";

type RejectButtonProps = {
  title: string;
  onClick?: () => void;
  submitType?: boolean;
};

function RejectButton({ title, onClick, submitType }: RejectButtonProps) {
  return (
    <>
      {submitType ? (
        <button
          type="submit"
          className="bg-error-error500 inline-block rounded-md cursor-pointer"
        >
          <p className="text-neutralGrey py-[10px] px-[20px] text-[14px] font-[500]">
            {title}
          </p>
        </button>
      ) : (
        <button
          onClick={onClick}
          className="bg-error-error500 inline-block rounded-md cursor-pointer"
        >
          <p className="text-neutralGrey py-[10px] px-[20px] text-[14px] font-[500]">
            {title}
          </p>
        </button>
      )}
    </>
  );
}

export default RejectButton;
