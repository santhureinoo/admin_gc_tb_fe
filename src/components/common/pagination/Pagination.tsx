import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
function Pagination() {
  return (
    <div className="join flex items-center justify-end mr-[30px] my-[10px]">
      <MdKeyboardArrowLeft className="w-[25px] h-[25px] cursor-pointer"/>
      {new Array(5).fill("").map((el, index) => (
        <p
          key={index}
          className={`ml-3 w-[32px] h-[32px] flex items-center justify-center rounded-md cursor-pointer ${
            index == 0
              ? "border border-primary-pink600 text-primary-pink600"
              : ""
          } `}
        >
          {index + 1}
        </p>


      ))}
            <MdKeyboardArrowRight className="w-[25px] h-[25px] cursor-pointer"/>
    </div>
  );
}

export default Pagination;
