import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

type IDReviewProps = {
  applicationDetails: any;
};
function IDReview({ applicationDetails }: IDReviewProps) {
  const filterPOI = (documentCategory: string) => {
    const filteredValue = applicationDetails?.poiDetails?.filter(
      (el: any) => el.documentCategory == documentCategory
    );
    return filteredValue;
  };

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
          {filterPOI("FOREIGN_PASSPORT")?.length > 0 ? (
            <InfoField
              title="Foreign Passport (Current)"
              value={filterPOI("FOREIGN_PASSPORT")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("FOREIGN_PASSPORT")[0]?.s3FileKey}
              s3FileType={filterPOI("FOREIGN_PASSPORT")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Foreign Passport (Current)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_PASSPORT")?.length > 0 ? (
            <InfoField
              title="Australian Passport (current or expired last 2 years but not cancelled)"
              value={filterPOI("AUSTRALIAN_PASSPORT")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("AUSTRALIAN_PASSPORT")[0]?.s3FileKey}
              s3FileType={filterPOI("AUSTRALIAN_PASSPORT")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Australian Passport (current or expired last 2 years but not cancelled)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_CITIZENSHIP_CERTIFICATE")?.length > 0 ? (
            <InfoField
              title="Australian Citizenship Certificate"
              value={
                filterPOI("AUSTRALIAN_CITIZENSHIP_CERTIFICATE")[0]
                  ?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("AUSTRALIAN_CITIZENSHIP_CERTIFICATE")[0]?.s3FileKey
              }
              s3FileType={
                filterPOI("AUSTRALIAN_CITIZENSHIP_CERTIFICATE")[0]?.fileType
              }
            />
          ) : (
            <InfoField
              title="Australian Citizenship Certificate"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("FULL_BIRTH_CERTIFICATE")?.length > 0 ? (
            <InfoField
              title="Full Birth Certificate (not Extract)"
              value={filterPOI("FULL_BIRTH_CERTIFICATE")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("FULL_BIRTH_CERTIFICATE")[0]?.s3FileKey}
              s3FileType={filterPOI("FULL_BIRTH_CERTIFICATE")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Full Birth Certificate (not Extract)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CERTIFICATE_OF_IDENTITY")?.length > 0 ? (
            <InfoField
              title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
              value={filterPOI("CERTIFICATE_OF_IDENTITY")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("CERTIFICATE_OF_IDENTITY")[0]?.s3FileKey}
              s3FileType={filterPOI("CERTIFICATE_OF_IDENTITY")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_DRIVER_LICENSE")?.length > 0 ? (
            <InfoField
              title="Australian Driver Licence/Learner's Permit"
              value={
                filterPOI("AUSTRALIAN_DRIVER_LICENSE")[0]?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("AUSTRALIAN_DRIVER_LICENSE")[0]?.s3FileKey}
              s3FileType={filterPOI("AUSTRALIAN_DRIVER_LICENSE")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Australian Driver Licence/Learner's Permit"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CURRENT_AUSTRALIAN_STUDENT_CARD")?.length > 0 ? (
            <InfoField
              title="Current (Australian) Tertiary Student Identification Card"
              value={
                filterPOI("CURRENT_AUSTRALIAN_STUDENT_CARD")[0]
                  ?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("CURRENT_AUSTRALIAN_STUDENT_CARD")[0]?.s3FileKey
              }
              s3FileType={
                filterPOI("CURRENT_AUSTRALIAN_STUDENT_CARD")[0]?.fileType
              }
            />
          ) : (
            <InfoField
              title="Current (Australian) Tertiary Student Identification Card"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY")?.length > 0 ? (
            <InfoField
              title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
              value={
                filterPOI("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY")[0]
                  ?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY")[0]
                  ?.s3FileKey
              }
              s3FileType={
                filterPOI("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY")[0]
                  ?.fileType
              }
            />
          ) : (
            <InfoField
              title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("GOVERNMENT_EMPLOYEE_ID")?.length > 0 ? (
            <InfoField
              title="Government employee ID (Australian Federal/State/Territory)"
              value={filterPOI("GOVERNMENT_EMPLOYEE_ID")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("GOVERNMENT_EMPLOYEE_ID")[0]?.s3FileKey}
              s3FileType={filterPOI("GOVERNMENT_EMPLOYEE_ID")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Government employee ID (Australian Federal/State/Territory)"
              value="Not provided"
            />
          )}
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
          {/* DVA_CARD */}

          {filterPOI("DVA_CARD")?.length > 0 ? (
            <InfoField
              title="Department of Veterans' Affairs (DVA) Card"
              value={filterPOI("DVA_CARD")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("DVA_CARD")[0]?.s3FileKey}
              s3FileType={filterPOI("DVA_CARD")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Department of Veterans' Affairs (DVA) Card"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CENTRELINK_CARD")?.length > 0 ? (
            <InfoField
              title="Centrelink card (with reference number)"
              value={filterPOI("CENTRELINK_CARD")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("CENTRELINK_CARD")[0]?.s3FileKey}
              s3FileType={filterPOI("CENTRELINK_CARD")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Centrelink card (with reference number)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("BIRTH_CERTIFICATE_EXTRACT")?.length > 0 ? (
            <InfoField
              title="Birth Certificate Extract"
              value={
                filterPOI("BIRTH_CERTIFICATE_EXTRACT")[0]?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("BIRTH_CERTIFICATE_EXTRACT")[0]?.s3FileKey}
              s3FileType={filterPOI("BIRTH_CERTIFICATE_EXTRACT")[0]?.fileType}
            />
          ) : (
            <InfoField title="Birth Certificate Extract" value="Not provided" />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("BIRTH_CARD")?.length > 0 ? (
            <InfoField
              title="Birth card (NSW BDM only)"
              value={filterPOI("BIRTH_CARD")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("BIRTH_CARD")[0]?.s3FileKey}
              s3FileType={filterPOI("BIRTH_CARD")[0]?.fileType}
            />
          ) : (
            <InfoField title="Birth card (NSW BDM only)" value="Not provided" />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("MEDICARE_CARD")?.length > 0 ? (
            <InfoField
              title="Medicare card"
              value={filterPOI("MEDICARE_CARD")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("MEDICARE_CARD")[0]?.s3FileKey}
              s3FileType={filterPOI("MEDICARE_CARD")[0]?.fileType}
            />
          ) : (
            <InfoField title="Medicare card" value="Not provided" />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CREDIT_CARD")?.length > 0 ? (
            <InfoField
              title="Credit card or account card"
              value={filterPOI("CREDIT_CARD")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("CREDIT_CARD")[0]?.s3FileKey}
              s3FileType={filterPOI("CREDIT_CARD")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Credit card or account card"
              value="Not provided"
            />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_MARRIAGE_CERTIFICATE")?.length > 0 ? (
            <InfoField
              title="Australian Marriage Certificate (Registry issue only)"
              value={
                filterPOI("AUSTRALIAN_MARRIAGE_CERTIFICATE")[0]
                  ?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("AUSTRALIAN_MARRIAGE_CERTIFICATE")[0]?.s3FileKey
              }
              s3FileType={
                filterPOI("AUSTRALIAN_MARRIAGE_CERTIFICATE")[0]?.fileType
              }
            />
          ) : (
            <InfoField
              title="Australian Marriage Certificate (Registry issue only)"
              value="Not provided"
            />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("DECREE_NISI")?.length > 0 ? (
            <InfoField
              title="Decree Nisi / Decree Absolute (Registry issue only)"
              value={filterPOI("DECREE_NISI")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("DECREE_NISI")[0]?.s3FileKey}
              s3FileType={filterPOI("DECREE_NISI")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Decree Nisi / Decree Absolute (Registry issue only)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CHANGE_OF_NAME_CERTIFICATE")?.length > 0 ? (
            <InfoField
              title="Change of name certificate (Registry issue only)"
              value={
                filterPOI("CHANGE_OF_NAME_CERTIFICATE")[0]?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("CHANGE_OF_NAME_CERTIFICATE")[0]?.s3FileKey}
              s3FileType={filterPOI("CHANGE_OF_NAME_CERTIFICATE")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Change of name certificate (Registry issue only)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("DEFENSE_FORCE_ID_CARD")?.length > 0 ? (
            <InfoField
              title="Defence Force Identity Card (with photo or signature)"
              value={filterPOI("DEFENSE_FORCE_ID_CARD")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("DEFENSE_FORCE_ID_CARD")[0]?.s3FileKey}
              s3FileType={filterPOI("DEFENSE_FORCE_ID_CARD")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Defence Force Identity Card (with photo or signature)"
              value="Not provided"
            />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("BANK_STATEMENT")?.length > 0 ? (
            <InfoField
              title="Bank statement"
              value={filterPOI("BANK_STATEMENT")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("BANK_STATEMENT")[0]?.s3FileKey}
              s3FileType={filterPOI("BANK_STATEMENT")[0]?.fileType}
            />
          ) : (
            <InfoField title="Bank statement" value="Not provided" />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("PROPERTY_LEASE_AGREEMENT")?.length > 0 ? (
            <InfoField
              title="Property lease agreement - current address"
              value={filterPOI("PROPERTY_LEASE_AGREEMENT")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("PROPERTY_LEASE_AGREEMENT")[0]?.s3FileKey}
              s3FileType={filterPOI("PROPERTY_LEASE_AGREEMENT")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Property lease agreement - current address"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("TAXATION_ASSESSMENT_NOTICE")?.length > 0 ? (
            <InfoField
              title="Taxation assessment notice"
              value={
                filterPOI("TAXATION_ASSESSMENT_NOTICE")[0]?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("TAXATION_ASSESSMENT_NOTICE")[0]?.s3FileKey}
              s3FileType={filterPOI("TAXATION_ASSESSMENT_NOTICE")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Taxation assessment notice"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_MORTGAGE_DOCUMENTS")?.length > 0 ? (
            <InfoField
              title="Australian Mortgage Documents"
              value={
                filterPOI("AUSTRALIAN_MORTGAGE_DOCUMENTS")[0]?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("AUSTRALIAN_MORTGAGE_DOCUMENTS")[0]?.s3FileKey
              }
              s3FileType={
                filterPOI("AUSTRALIAN_MORTGAGE_DOCUMENTS")[0]?.fileType
              }
            />
          ) : (
            <InfoField
              title="Australian Mortgage Documents"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("RATING_AUTHORITY")?.length > 0 ? (
            <InfoField
              title="Rating Authority - eg, Land Rates"
              value={filterPOI("RATING_AUTHORITY")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("RATING_AUTHORITY")[0]?.s3FileKey}
              s3FileType={filterPOI("RATING_AUTHORITY")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Rating Authority - eg, Land Rates"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("UTILITY_BILL")?.length > 0 ? (
            <InfoField
              title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
              value={filterPOI("UTILITY_BILL")[0]?.originalFilename}
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={filterPOI("UTILITY_BILL")[0]?.s3FileKey}
              s3FileType={filterPOI("UTILITY_BILL")[0]?.fileType}
            />
          ) : (
            <InfoField
              title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("REFERENCE_FROM_INDIGENOUS_ORGANISATION")?.length > 0 ? (
            <InfoField
              title="Reference from Indigenous Organisation"
              value={
                filterPOI("REFERENCE_FROM_INDIGENOUS_ORGANISATION")[0]
                  ?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("REFERENCE_FROM_INDIGENOUS_ORGANISATION")[0]
                  ?.s3FileKey
              }
              s3FileType={
                filterPOI("REFERENCE_FROM_INDIGENOUS_ORGANISATION")[0]?.fileType
              }
            />
          ) : (
            <InfoField
              title="Reference from Indigenous Organisation"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA")?.length > 0 ? (
            <InfoField
              title="Documents issued outside Australia (equivalent to Australian documents). Must have official translation attached"
              value={
                filterPOI("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA")[0]
                  ?.originalFilename
              }
              isFile
              userId={applicationDetails?.userId}
              s3FileKey={
                filterPOI("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA")[0]?.s3FileKey
              }
              s3FileType={
                filterPOI("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA")[0]?.fileType
              }
            />
          ) : (
            <InfoField
              title="Documents issued outside Australia (equivalent to Australian documents). Must have official translation attached"
              value="Not provided"
            />
          )}
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
