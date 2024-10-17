import React from "react";

type Accordion = {
  children: React.ReactNode;
  title: string;
};

function Accordion({ children, title }: Accordion) {
  return (
    <div className="collapse collapse-arrow border border-neutralGrey-grey400 my-[16px]">
      <input type="checkbox" defaultChecked />
      <div className="collapse-title text-[18px] font-[500] text-neutralGrey-grey800">
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}

export default Accordion;
