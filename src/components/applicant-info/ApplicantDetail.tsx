import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";
import { dateFormat } from "@/utils";

type ApplicantDetailProps = {
  applicationDetails: any;
};
function ApplicantDetail({ applicationDetails }: ApplicantDetailProps) {
  return (
    <div
      id={"section-a1"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Applicant Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField
          title="Full Name"
          value={
            applicationDetails?.firstName + " " + applicationDetails?.lastName
          }
          isRequired
        />
        <InfoField
          title="Application submitted date"
          value={dateFormat(applicationDetails?.submissionDate as string)}
          isRequired
        />
        <InfoField title="Email" value={applicationDetails?.email} isRequired />
        <InfoField
          title="How did you hear about us? (Optional)"
          value="Google search"
        />
        <InfoField
          title="Application status"
          value={applicationDetails?.applicationStatus}
        />
      </div>
    </div>
  );
}

export default ApplicantDetail;
