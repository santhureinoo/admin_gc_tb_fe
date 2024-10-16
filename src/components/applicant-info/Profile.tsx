import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

type ProfileProps = {
  applicationDetails: any;
};
function Profile({ applicationDetails }: ProfileProps) {
  const languages = applicationDetails?.language;
  const interests = applicationDetails?.interests;

  const formattedLanguages = languages?.join(", ");
  const formattedInterests = interests?.join(", ");
  return (
    <div
      id={"section-a5"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Profile" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField title="Languages" value={formattedLanguages} isRequired />
        <InfoField title="Interests" value={formattedInterests} isRequired />
      </div>
    </div>
  );
}

export default Profile;
