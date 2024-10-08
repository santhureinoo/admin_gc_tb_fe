import { getPaginationTotalPages } from "@/utils";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  totalCounts: number;
};

function Pagination({ totalCounts }: PaginationProps) {
  return (
    <div className="join flex items-center justify-end mr-[30px] my-[10px]">
      <MdKeyboardArrowLeft className="w-[25px] h-[25px] cursor-pointer" />
      {new Array(getPaginationTotalPages(totalCounts, 1))
        .fill("")
        .map((el, index) => (
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
      <MdKeyboardArrowRight className="w-[25px] h-[25px] cursor-pointer" />
    </div>
  );
}

export default Pagination;
