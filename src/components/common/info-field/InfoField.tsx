import React from "react";

type infoFieldPropsTypes = {
  title: string;
  value: string;
  isRequired?: boolean;
  isFile?: boolean;
};

function InfoField({ title, value, isRequired, isFile }: infoFieldPropsTypes) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-[500] text-neutralGrey600">
        {title} {isRequired ? <span className="text-red-500">*</span> : ""}
      </p>
      {isFile ? (
        <p className="flex  items-center justify-between font-[500] bg-neutralGrey200 px-[20px] py-[10px] rounded-md text-black">
          {value} <span className="font-[400] text-neutralGrey600">525KB</span>
        </p>
      ) : (
        <p className="font-[500] text-neutralGrey800">{value}</p>
      )}
    </div>
  );
}

export default InfoField;
