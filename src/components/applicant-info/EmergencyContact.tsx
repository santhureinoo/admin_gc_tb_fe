import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

type EmergencyContactProps = {
  applicationDetails: any;
};
function EmergencyContact({ applicationDetails }: EmergencyContactProps) {
  return (
    <div
      id={"section-a6"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Emergency Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField
          title="Name"
          value={applicationDetails?.emergency_contact?.name}
          isRequired
        />
        <InfoField
          title="Relationship"
          value={applicationDetails?.emergency_contact?.relationship}
          isRequired
        />
        <InfoField
          title="Email"
          value={applicationDetails?.emergency_contact?.email}
          isRequired
        />
        <InfoField
          title="Phone number"
          value={applicationDetails?.emergency_contact?.phone}
          isRequired
        />
      </div>
    </div>
  );
}

export default EmergencyContact;
