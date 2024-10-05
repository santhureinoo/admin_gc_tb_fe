import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

function ApplicantDetail() {
  return (
    <div
      id={"section-a1"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Applicant Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField title="First name" value="Mark" isRequired />
        <InfoField title="Last Name" value="Mark" isRequired />
        <InfoField
          title="Application submitted date"
          value="22/12/2024"
          isRequired
        />
        <InfoField title="Email" value="ggtoetoe@gmail.com" isRequired />
        <InfoField
          title="How did you hear about us? (Optional)"
          value="Google search"
        />
        <InfoField title="Application status" value="Pending" />
        <InfoField title="Phone number" value="+95 9 7960 823 22" isRequired />
      </div>
    </div>
  );
}

export default ApplicantDetail;
