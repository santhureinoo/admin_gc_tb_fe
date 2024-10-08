import React from "react";
import InfoCard from "./InfoCard";
import ArrowIcon from "@/assets/icons/icon.svg";

type InfoCardListProps = {
  infos: any;
};

function InfoCardList({ infos }: InfoCardListProps) {
  return (
    <div className="grid gap-2 my-[10px] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <InfoCard
        title="Applies today"
        infoCount={infos?.APPLIED_TODAY}
        icon={ArrowIcon}
      />
      <InfoCard
        title="Pending applicants"
        infoCount={infos?.ALL_PENDING}
        icon={ArrowIcon}
      />
      <InfoCard
        title="Approved applicants"
        infoCount={infos?.ALL_APPROVED}
        icon={ArrowIcon}
      />
      <InfoCard
        title="To interview"
        infoCount={infos?.ALL_INTERVIEW}
        icon={ArrowIcon}
      />
    </div>
  );
}

export default InfoCardList;
