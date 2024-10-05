import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

function EmergencyContact() {
  return (
    <div
      id={"section-a6"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Emergency Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField title="Name" value="Kris Jenner" isRequired />
        <InfoField title="Relationship" value="Mother" isRequired />
        <InfoField title="Email" value="hlyanshapes1999@gmail.com" isRequired />
        <InfoField title="Phone number" value="+959970378394" isRequired />
      </div>
    </div>
  );
}

export default EmergencyContact;
