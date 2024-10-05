import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";
import Badge from "../common/badge";

function WorkerDetail() {
  return (
    <div
      id={"section-a2"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Worker Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField title="First name" value="Mark" isRequired />
        <InfoField title="Last Name" value="Mark" isRequired />
        <InfoField title="Date of birth" value="22/12/2024" />
        <InfoField title="Email(Primary)" value="ggtoetoe@gmail.com" />
        <InfoField title="Phone number" value="+95 9 7960 823 22" isRequired />
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Address <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Street address"
            value="Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678."
            isRequired
          />
          <InfoField title="Suburb" value="Robert Robertson" isRequired />
          <InfoField title="Country" value="Australia" isRequired />
          <InfoField title="State" value="Alsaka" isRequired />
          <InfoField title="Postal Code" value="123123" isRequired />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] my-[24px]">
          <InfoField title="Do you have primary job?" value="Yes" isRequired />
          <InfoField title="Company name" value="Harien company" isRequired />
        </div>
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600">
            Position apply for? <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge name="Nurse" />
            <Badge name="Enrolled Nurse" />
            <Badge name="Community Services Assistant (CSA/PCA)" />
            <Badge name="Others" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerDetail;
