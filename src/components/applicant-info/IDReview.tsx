import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

type IDReviewProps = {
  applicationDetails: any;
};
function IDReview({ applicationDetails }: IDReviewProps) {
  console.log("applicationDetails?.poiDetails", applicationDetails?.poiDetails);

  const filterPOI = (documentCategory: string) => {
    const filteredValue = applicationDetails?.poiDetails?.filter(
      (el: any) => el.documentCategory == documentCategory
    );
    return filteredValue;
  };
  console.log("poi", filterPOI("FOREIGN_PASSPORT"));
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
            filterPOI("FOREIGN_PASSPORT")?.map((file: any) => (
              <InfoField
                title="Foreign Passport (Current)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Foreign Passport (Current)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_PASSPORT")?.length > 0 ? (
            filterPOI("AUSTRALIAN_PASSPORT")?.map((file: any) => (
              <InfoField
                title="Australian Passport (current or expired last 2 years but not cancelled)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Australian Passport (current or expired last 2 years but not cancelled)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_CITIZENSHIP_CERTIFICATE")?.length > 0 ? (
            filterPOI("AUSTRALIAN_CITIZENSHIP_CERTIFICATE")?.map(
              (file: any) => (
                <InfoField
                  title="Australian Citizenship Certificate"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Australian Citizenship Certificate"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("FULL_BIRTH_CERTIFICATE")?.length > 0 ? (
            filterPOI("FULL_BIRTH_CERTIFICATE")?.map((file: any) => (
              <InfoField
                title="Full Birth Certificate (not Extract)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Full Birth Certificate (not Extract)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CERTIFICATE_OF_IDENTITY")?.length > 0 ? (
            filterPOI("CERTIFICATE_OF_IDENTITY")?.map((file: any) => (
              <InfoField
                title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_DRIVER_LICENSE")?.length > 0 ? (
            filterPOI("AUSTRALIAN_DRIVER_LICENSE")?.map((file: any) => (
              <InfoField
                title="Australian Driver Licence/Learner's Permit"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Australian Driver Licence/Learner's Permit"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CURRENT_AUSTRALIAN_STUDENT_CARD")?.length > 0 ? (
            filterPOI("CURRENT_AUSTRALIAN_STUDENT_CARD")?.map((file: any) => (
              <InfoField
                title="Current (Australian) Tertiary Student Identification Card"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Current (Australian) Tertiary Student Identification Card"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY")?.length > 0 ? (
            filterPOI("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY")?.map(
              (file: any) => (
                <InfoField
                  title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("GOVERNMENT_EMPLOYEE_ID")?.length > 0 ? (
            filterPOI("GOVERNMENT_EMPLOYEE_ID")?.map((file: any) => (
              <InfoField
                title="Government employee ID (Australian Federal/State/Territory)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
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
            value="Not provided"
            // isFile
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
            filterPOI("DVA_CARD")?.map((file: any) => (
              <InfoField
                title="Department of Veterans' Affairs (DVA) Card"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Department of Veterans' Affairs (DVA) Card"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CENTRELINK_CARD")?.length > 0 ? (
            filterPOI("CENTRELINK_CARD")?.map((file: any) => (
              <InfoField
                title="Centrelink card (with reference number)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Centrelink card (with reference number)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("BIRTH_CERTIFICATE_EXTRACT")?.length > 0 ? (
            filterPOI("BIRTH_CERTIFICATE_EXTRACT")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Birth Certificate Extract"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField title="Birth Certificate Extract" value="Not provided" />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("BIRTH_CARD")?.length > 0 ? (
            filterPOI("BIRTH_CARD")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Birth card (NSW BDM only)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField title="Birth card (NSW BDM only)" value="Not provided" />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("MEDICARE_CARD")?.length > 0 ? (
            filterPOI("MEDICARE_CARD")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Medicare card"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField title="Medicare card" value="Not provided" />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CREDIT_CARD")?.length > 0 ? (
            filterPOI("CREDIT_CARD")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Credit card or account card"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Credit card or account card"
              value="Not provided"
            />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_MARRIAGE_CERTIFICATE")?.length > 0 ? (
            filterPOI("AUSTRALIAN_MARRIAGE_CERTIFICATE")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Australian Marriage Certificate (Registry issue only)"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Australian Marriage Certificate (Registry issue only)"
              value="Not provided"
            />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("DECREE_NISI")?.length > 0 ? (
            filterPOI("DECREE_NISI")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Decree Nisi / Decree Absolute (Registry issue only)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Decree Nisi / Decree Absolute (Registry issue only)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("CHANGE_OF_NAME_CERTIFICATE")?.length > 0 ? (
            filterPOI("CHANGE_OF_NAME_CERTIFICATE")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Change of name certificate (Registry issue only)"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Change of name certificate (Registry issue only)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("DEFENSE_FORCE_ID_CARD")?.length > 0 ? (
            filterPOI("DEFENSE_FORCE_ID_CARD")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Defence Force Identity Card (with photo or signature)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Defence Force Identity Card (with photo or signature)"
              value="Not provided"
            />
          )}
        </div>

        <div className="mt-[24px]">
          {filterPOI("BANK_STATEMENT")?.length > 0 ? (
            filterPOI("BANK_STATEMENT")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Bank statement"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField title="Bank statement" value="Not provided" />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("PROPERTY_LEASE_AGREEMENT")?.length > 0 ? (
            filterPOI("PROPERTY_LEASE_AGREEMENT")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Property lease agreement - current address"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Property lease agreement - current address"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("TAXATION_ASSESSMENT_NOTICE")?.length > 0 ? (
            filterPOI("TAXATION_ASSESSMENT_NOTICE")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Taxation assessment notice"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Taxation assessment notice"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("AUSTRALIAN_MORTGAGE_DOCUMENTS")?.length > 0 ? (
            filterPOI("AUSTRALIAN_MORTGAGE_DOCUMENTS")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Australian Mortgage Documents"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Australian Mortgage Documents"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("RATING_AUTHORITY")?.length > 0 ? (
            filterPOI("RATING_AUTHORITY")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Rating Authority - eg, Land Rates"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Rating Authority - eg, Land Rates"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("UTILITY_BILL")?.length > 0 ? (
            filterPOI("UTILITY_BILL")?.map((file: any, index: any) => (
              <InfoField
                key={index}
                title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
                value={file?.originalFilename}
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.s3FileKey}
                s3FileType={file?.fileType}
              />
            ))
          ) : (
            <InfoField
              title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("REFERENCE_FROM_INDIGENOUS_ORGANISATION")?.length > 0 ? (
            filterPOI("REFERENCE_FROM_INDIGENOUS_ORGANISATION")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Reference from Indigenous Organisation"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
          ) : (
            <InfoField
              title="Reference from Indigenous Organisation"
              value="Not provided"
            />
          )}
        </div>
        <div className="mt-[24px]">
          {filterPOI("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA")?.length > 0 ? (
            filterPOI("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA")?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Documents issued outside Australia (equivalent to Australian documents). Must have official translation attached"
                  value={file?.originalFilename}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )
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
