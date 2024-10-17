import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";
import Badge from "../common/badge";
import { dateFormat } from "@/utils";

type WorkerDetailProps = {
  applicationDetails: any;
};
function WorkerDetail({ applicationDetails }: WorkerDetailProps) {
  return (
    <div
      id={"section-a2"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Worker Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField
          title="First name"
          value={applicationDetails?.firstName}
          isRequired
        />
        <InfoField
          title="Last Name"
          value={applicationDetails?.lastName}
          isRequired
        />
        <InfoField
          title="Date of birth"
          value={dateFormat(applicationDetails?.dateOfBirth)}
        />
        <InfoField title="Email(Primary)" value={applicationDetails?.email} />
        <InfoField
          title="Phone number"
          value={applicationDetails?.phoneNumber}
          isRequired
        />
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Address <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Street address"
            value={applicationDetails?.streetAddress}
            isRequired
          />
          <InfoField
            title="Suburb"
            value={applicationDetails?.suburb}
            isRequired
          />
          <InfoField
            title="Country"
            value={applicationDetails?.country}
            isRequired
          />
          <InfoField
            title="State"
            value={applicationDetails?.state}
            isRequired
          />
          <InfoField
            title="Postal Code"
            value={applicationDetails?.postalCode}
            isRequired
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] my-[24px]">
          <InfoField
            title="Do you have primary job?"
            value={applicationDetails?.primaryJobFlag == true ? "Yes" : "No"}
            isRequired
          />
          <InfoField
            title="Company name"
            value={applicationDetails?.primaryJobListed}
            isRequired
          />
        </div>
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600">
            Position apply for? <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {applicationDetails?.positionApplyingFor?.map((pos: any) => (
              <Badge key={pos} name={pos} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerDetail;
