import React from "react";
import InfoCard from "./InfoCard";
import ShowPasswordIcon from "@/assets/icons/show_password_icon.svg";

function InfoCardList() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <InfoCard title="Applies today" infoCount="30" icon={ShowPasswordIcon} />
      <InfoCard
        title="Pending applicants"
        infoCount="30"
        icon={ShowPasswordIcon}
      />
      <InfoCard
        title="Approved applicants"
        infoCount="30"
        icon={ShowPasswordIcon}
      />
      <InfoCard title="To interview" infoCount="30" icon={ShowPasswordIcon} />
    </div>
  );
}

export default InfoCardList;
