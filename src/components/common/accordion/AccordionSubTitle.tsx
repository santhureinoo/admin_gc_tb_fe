import React from "react";

type AccordionSubTitleProps = {
  title: string;
  isOptional?: boolean;
};

function AccordionSubTitle({ title, isOptional }: AccordionSubTitleProps) {
  return (
    <div className="text-[16px] font-[500] text-neutralGrey-grey800 my-[20px] leading-[26px]">
      {title}
      {isOptional ? null : <span className="text-red-500"> *</span>}
    </div>
  );
}

export default AccordionSubTitle;
