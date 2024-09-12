import React from "react";

function Pagination() {
  return (
    <div className="join flex items-end justify-end mr-[30px] my-[10px]">
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
    </div>
  );
}

export default Pagination;
