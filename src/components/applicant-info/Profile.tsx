import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

function Profile() {
  return (
    <div
      id={"section-a5"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Profile" />
      <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
        <InfoField
          title="Languages"
          value="English, Arabic, Cantonese, Chinese, Japanese, Taiwanese"
          isRequired
        />
        <InfoField
          title="Interests*"
          value="Board Games, Card Games, Cars, Woodwork, Pokemon TCG (Others)"
          isRequired
        />
      </div>
    </div>
  );
}

export default Profile;
