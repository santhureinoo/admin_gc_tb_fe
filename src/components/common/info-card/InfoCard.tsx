import React from "react";

type InfoCardProps = {
  icon: any;
  title: string;
  infoCount: string;
};

function InfoCard({ icon: Icon, title, infoCount }: InfoCardProps) {
  return (
    <div className="shadow-md border border-neutralGrey200 bg-white p-[24px] rounded-md">
      <p className="text-neutralGrey600 text-[16px] leading-[26px] font-[500] mb-[12px]">
        {title}
      </p>
      <div className="flex gap-2 items-center">
        <Icon className="text-secondary-blueGreen" />
        <h3 className="font-[700] text-[24px] leading-[34px] text-neutralGrey800">
          {infoCount}
        </h3>
      </div>
    </div>
  );
}

export default InfoCard;
