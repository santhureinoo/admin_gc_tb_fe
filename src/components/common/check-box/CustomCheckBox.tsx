import React from "react";

type CustomCheckBox = {
  title: string;
  isOptional?: boolean;
  register?: any;
};

function CustomCheckBox({ title, isOptional, register }: CustomCheckBox) {
  return (
    <div className="form-control">
      <label className="cursor-pointer flex items-start gap-2">
        <input
          {...register}
          type="checkbox"
          className="checkbox bg-white border border-neutralGrey-grey400 [--chkbg:#15B0AC] [--chkfg:#FFFFFF] checked:border-none checkbox-sm"
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
