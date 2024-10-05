import React from "react";
import InfoCard from "./InfoCard";
import ArrowIcon from "@/assets/icons/icon.svg";

function InfoCardList() {
  return (
    <div className="grid gap-2 my-[10px] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <InfoCard title="Applies today" infoCount="30" icon={ArrowIcon} />
      <InfoCard title="Pending applicants" infoCount="30" icon={ArrowIcon} />
      <InfoCard title="Approved applicants" infoCount="30" icon={ArrowIcon} />
      <InfoCard title="To interview" infoCount="30" icon={ArrowIcon} />
    </div>
  );
}

export default InfoCardList;
