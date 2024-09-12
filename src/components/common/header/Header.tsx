import React from "react";

type headerPropsType = {
  title: string;
};

function Header({ title }: headerPropsType) {
  return (
    <h3 className="text-[20px] font-[700] leading-[30px] text-neutralGrey800">
      {title}
    </h3>
  );
}

export default Header;
