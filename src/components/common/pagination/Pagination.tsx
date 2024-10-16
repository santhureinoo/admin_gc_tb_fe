import { PAGINATION_PER_PAGE } from "@/constants";
import { getPaginationTotalPages } from "@/utils";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  totalCounts: number;
  setCurrentSelectedPage: (count: number) => void;
  currentSelectedPage: number;
};

function Pagination({
  totalCounts,
  setCurrentSelectedPage,
  currentSelectedPage,
}: PaginationProps) {
  const handleChangePagniation = (step: number) => {
    setCurrentSelectedPage(step);
  };

  return (
    <div className="join flex items-center justify-end mr-[30px] my-[10px]">
      <MdKeyboardArrowLeft className="w-[25px] h-[25px] cursor-pointer" />
      {new Array(getPaginationTotalPages(totalCounts, PAGINATION_PER_PAGE))
        .fill("")
        .map((el, index) => (
          <p
            onClick={() => handleChangePagniation(index + 1)}
            key={index}
            className={`ml-3 w-[32px] h-[32px] flex items-center justify-center rounded-md cursor-pointer ${
              index == currentSelectedPage - 1
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
