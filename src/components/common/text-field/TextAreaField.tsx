"use client";
import React from "react";
import { FieldError } from "react-hook-form";

type TextFieldProps = {
  textFieldHeader: string;
  placeHolderText: string;
  register: any;
  error?: FieldError;
};

function TextAreaField({ textFieldHeader, register, error }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2 my-[20px]">
      <h3 className="text-neutralGrey800 font-[500]">{textFieldHeader}</h3>
      <textarea
        {...register}
        className={`bg-transparent w-full border resize-none h-[50vh] p-[10px] rounded-md ${
          error
            ? "border border-red-500 focus:border-red-500 outline-none"
            : "border border-neutralGrey-grey200 focus:border-neutralGrey-grey200 outline-none"
        }`}
        placeholder="Type a message here"
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default TextAreaField;
