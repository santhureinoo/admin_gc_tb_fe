"use client";
import React, { useState, useEffect } from "react";
import ShowPasswordIcon from "@/assets/icons/show_password_icon.svg";
import { FieldError } from "react-hook-form";

type TextFieldProps = {
  textFieldHeader: string;
  textFieldType: string;
  placeHolderText: string;
  extraHintText?: string;
  icon?: any;
  register: any;
  error?: FieldError;
};

function TextField({
  textFieldHeader,
  textFieldType,
  placeHolderText,
  extraHintText,
  icon,
  register,
  error,
}: TextFieldProps) {
  const [showText, setShowText] = useState<boolean>(false);
  const toggleShowText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 my-[20px]">
      <h3 className="text-neutralGrey800 font-[500]">{textFieldHeader}</h3>
      <label className="input flex items-center bg-neutralGrey0 p-0 border-neutralGrey400">
        <input
          {...register}
          type={
            textFieldType === "password"
              ? showText
                ? "text"
                : "password"
              : textFieldType
          }
          placeholder={placeHolderText}
          className="input border-none bg-neutralGrey0 placeholder-neutralGrey400 flex-1"
        />
        {icon ? (
          <ShowPasswordIcon className="mr-[10px]" onClick={toggleShowText} />
        ) : null}
      </label>

      <p className="text-end font-light">{extraHintText}</p>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default TextField;
