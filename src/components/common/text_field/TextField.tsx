"use client";
import React, { useState } from "react";
import ShowPasswordIcon from "@/assets/icons/show_password_icon.svg";
import { useAppSelector } from "@/redux/store";
// import { ReactComponent as IconType } from "react";

type TextFieldProps = {
  textFieldHeader: string;
  textFieldName: string;
  textFieldType: string;
  placeHolderText: string;
  extraHintText?: string;
  icon?: any;
};

function TextField({
  textFieldHeader,
  textFieldName,
  textFieldType,
  placeHolderText,
  extraHintText,
  icon,
}: TextFieldProps) {
  const [showText, setShowText] = useState<boolean>(false);

  const toggleShowText = () => {
    setShowText((prev) => !prev);
    console.log("Clicked");
  };

  return (
    <div className="flex flex-col gap-2 my-[20px]">
      <h3 className="text-neutralGrey800 font-[500]">{textFieldHeader}</h3>
      <label className="input flex items-center bg-neutralGrey0 p-0 border-neutralGrey400">
        <input
          name={textFieldName}
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
    </div>
  );
}

export default TextField;
