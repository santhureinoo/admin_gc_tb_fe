import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

type IDReviewProps = {
  applicationDetails: any;
};
function IDReview({ applicationDetails }: IDReviewProps) {
  return (
    <div
      id={"section-a9"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Proof of identity" />
      {/* Primary documents */}
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Primary documents (Total points -{" "}
          <span className="text-primary-pink600">70</span> points)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Foreign Passport (Current)"
            value="my certificate.jpg"
            isFile
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Australian Passport (current or expired last 2 years but not cancelled)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Australian Citizenship Certificate"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Full Birth Certificate (not Extract)"
            value="my certificate.jpg"
            isFile
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Australian Driver Licence/Learner's Permit"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Current (Australian) Tertiary Student Identification Card"
            value="my certificate.jpg"
            isFile
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Government employee ID (Australian Federal/State/Territory)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Defence Force Identity Card (with photo or signature)"
            value="my certificate.jpg"
            isFile
          />
        </div>
      </div>
      {/* Secondary documents */}
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Secondary documents (Total points -{" "}
          <span className="text-primary-pink600">70</span> points)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Department of Veterans' Affairs (DVA) Card"
            value="my certificate.jpg"
            isFile
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Centrelink card (with reference number)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField title="Birth Certificate Extract" value="Not provided" />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Birth card (NSW BDM only)"
            value="my certificate.jpg"
            isFile
          />
        </div>
        <div className="mt-[24px]">
          <InfoField title="Medicare card" value="Not provided" />
        </div>
        <div className="mt-[24px]">
          <InfoField title="Credit card or account card" value="Not provided" />
        </div>

        <div className="mt-[24px]">
          <InfoField
            title="Australian Marriage Certificate (Registry issue only)"
            value="my certificate.jpg"
            isFile
          />
        </div>

        <div className="mt-[24px]">
          <InfoField
            title="Decree Nisi / Decree Absolute (Registry issue only)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Change of name certificate (Registry issue only)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Defence Force Identity Card (with photo or signature)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField title="Bank statement" value="Not provided" />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Property lease agreement - current address"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField title="Taxation assessment notice" value="Not provided" />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Australian Mortgage Documents"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Rating Authority - eg, Land Rates"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Reference from Indigenous Organisation"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Documents issued outside Australia (equivalent to Australian documents). Must have official translation attached"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Single document"
            value="Not provided"
          />
        </div>
        <div className="mt-[24px]">
          <InfoField
            title="Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Two or more documents"
            value="Not provided"
          />
        </div>
      </div>
    </div>
  );
}

export default IDReview;
