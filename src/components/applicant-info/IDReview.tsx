import React from "react";
import Header from "../common/header";

function IDReview() {
  return (
    <div
      id={"section-a9"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Proof of identity" />
      <div className="mt-[24px]">
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Monday (4 available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]">
              <p>9:00</p> - <p>10:00</p>
            </div>
            <div className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]">
              <p>9:00</p> - <p>10:00</p>
            </div>
            <div className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]">
              <p>9:00</p> - <p>10:00</p>
            </div>
            <div className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]">
              <p>9:00</p> - <p>10:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IDReview;
