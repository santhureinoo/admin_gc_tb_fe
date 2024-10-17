import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

function ApplicantVideo() {
  return (
    <div
      id={"section-a4"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Applicant's Video" />
      <div className="mt-[24px]">
        <div className="flex flex-col gap-2 w-[240px]">
          <p className="font-[500] text-neutralGrey500">Video</p>
          <div className="w-[240px] h-[140px] bg-red-500 rounded-md"></div>
          <div className="flex justify-between">
            <p className="font-[500] text-primary-pink600">my video.mp4</p>
            <p className="font-[500] text-primary-pink800">525KB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantVideo;
