import React from "react";

type CustomCheckBox = {
  title: string;
  isOptional?: boolean;
};

function CustomCheckBox({ title, isOptional }: CustomCheckBox) {
  return (
    <div className="form-control">
      <label className="cursor-pointer flex items-start gap-2">
        <input
          type="checkbox"
          className="checkbox border-neutralGrey-grey400 w-[18px] h-[18px] rounded-md"
        />
        <span className="font-[500] text-[16px] text-neutralGrey-grey700 text-left mt-[-3px]">
          {title}
          {isOptional ? "" : <span className="text-red-500">*</span>}
        </span>
      </label>
    </div>
  );
}

export default CustomCheckBox;
