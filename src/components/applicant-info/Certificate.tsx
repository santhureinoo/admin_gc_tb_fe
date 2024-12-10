import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";
import { dateFormat, isShow } from "@/utils";

type CertificateProps = {
  applicationDetails: any;
};
function Certificate({ applicationDetails }: CertificateProps) {
  return (
    <div
      id={"section-a3"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Certificate" />
      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Qualification and certificate"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Qualifications & Certificates{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <InfoField title="Certificate IV(Australia)" value="Not required" />
            <InfoField title="No Certification" value="Not required" />
            <div>
              {applicationDetails?.sec_qual_cert?.fileList?.map(
                (file: any, index: any) => (
                  <InfoField
                    title={"Certificate III(Australia)"}
                    value={file?.originalFilename + "." + file?.fileType}
                    isFile
                    userId={applicationDetails?.userId}
                    s3FileKey={file?.s3FileKey}
                    s3FileType={file?.fileType}
                  />
                )
              )}
            </div>
          </div>
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Registered Nurse (Australia)"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Registered nurses (Austrailia){" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <InfoField
              title="Registration number"
              value={applicationDetails?.sec_reg_nurse?.registerNumber}
            />
            <InfoField
              title="Expiry date"
              value={dateFormat(applicationDetails?.sec_reg_nurse?.expiryDate)}
            />
          </div>
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Enrolled Nurse/Former Enrolled Nurse (Australia)"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Enrolled nurses/Former enrolled nurses (Austrailia){" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <InfoField
              title="Registration number"
              value={applicationDetails?.sec_enroll_nurse?.registerNumber}
            />
            <InfoField
              title="Expiry date"
              value={dateFormat(
                applicationDetails?.sec_enroll_nurse?.expiryDate
              )}
            />
          </div>
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "First Aid Certificate"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            First Aid Certificate <span className="text-red-500">*</span>
          </p>
          {applicationDetails?.sec_firstAid_cert?.fileList?.map((file: any) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              <InfoField
                title="Expiry date"
                value={dateFormat(file?.expiryDate)}
              />
              <InfoField
                title="Certificate"
                value={
                  file?.file?.originalFilename + "." + file?.file?.fileType
                }
                isFile
                userId={applicationDetails?.userId}
                s3FileKey={file?.file?.s3FileKey}
                s3FileType={file?.file?.fileType}
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          CPR Certificate <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Expiry date"
            value={dateFormat(applicationDetails?.sec_cpr_cert?.expiryDate)}
          />
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_cpr_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_cpr_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_cpr_cert?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_cpr_cert?.file?.fileType}
          />
        </div>
      </div>

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Food Handling Certificate"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Food handling Certificate <span className="text-red-500">*</span>
          </p>
          {applicationDetails?.sec_foodHandl_cert?.fileList?.map(
            (file: any) => (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                <InfoField
                  title="Expiry date"
                  value={dateFormat(
                    applicationDetails?.sec_foodHandl_cert?.expiryDate
                  )}
                />
                <InfoField
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              </div>
            )
          )}
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Responsible Service of Alcohol Certificate"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Responsible service of alchol Certificate
          </p>
          {applicationDetails?.sec_resp_alcohol_cert?.fileList?.map(
            (file: any) => (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                <InfoField
                  title="Expiry date"
                  value={dateFormat(
                    applicationDetails?.sec_resp_alcohol_cert?.expiryDate
                  )}
                />
                <InfoField
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              </div>
            )
          )}
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Manual Handling Certificate"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Manual handling Certificate{" "}
          </p>
          {applicationDetails?.sec_manualHandl_cert?.fileList?.map(
            (file: any, index: any) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
              >
                <InfoField
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              </div>
            )
          )}
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Medication Certificate"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Medication Certificate
          </p>

          {applicationDetails?.sec_medication_cert?.fileList?.map(
            (file: any, index: any) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
              >
                <InfoField
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              </div>
            )
          )}
        </div>
      ) : null}

      {isShow(applicationDetails?.positionApplyingFor ?? [], "Police Check") ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Police check
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <InfoField
              title="Do you have a police check?"
              value={
                applicationDetails?.sec_police_check?.hasPoliceCheck == true
                  ? "Yes"
                  : "No"
              }
            />
            <InfoField
              title="Police Check Date"
              value={dateFormat(
                applicationDetails?.sec_police_check?.policeCheckDate
              )}
              isRequired
            />
            {applicationDetails?.sec_police_check?.fileList?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )}
          </div>
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Curriculum Vitae (CV)"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Curriculum Vitae(CV) <span className="text-red-500">*</span>
          </p>
          {applicationDetails?.sec_curriculum_vitae?.fileList?.map(
            (file: any, index: any) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
              >
                <InfoField
                  title="Upload CV"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              </div>
            )
          )}
        </div>
      ) : null}

      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Refrence 1</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Name"
            value={applicationDetails?.sec_curriculum_vitae?.reference1?.name}
          />
          <InfoField
            title="Position"
            value={
              applicationDetails?.sec_curriculum_vitae?.reference1?.position
            }
          />
          <InfoField
            title="Email"
            value={applicationDetails?.sec_curriculum_vitae?.reference1?.email}
          />
          <InfoField
            title="Phone number"
            value={applicationDetails?.sec_curriculum_vitae?.reference1?.phone}
          />
          <InfoField
            title="Relationship"
            value={
              applicationDetails?.sec_curriculum_vitae?.reference1?.relationship
            }
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Refrence 2</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Name"
            value={applicationDetails?.sec_curriculum_vitae?.reference2?.name}
          />
          <InfoField
            title="Position"
            value={
              applicationDetails?.sec_curriculum_vitae?.reference2?.position
            }
          />
          <InfoField
            title="Email"
            value={applicationDetails?.sec_curriculum_vitae?.reference2?.email}
          />
          <InfoField
            title="Phone number"
            value={applicationDetails?.sec_curriculum_vitae?.reference2?.phone}
          />
          <InfoField
            title="Relationship"
            value={
              applicationDetails?.sec_curriculum_vitae?.reference2?.relationship
            }
          />
        </div>
      </div>

      {isShow(applicationDetails?.positionApplyingFor ?? [], "Visa Status") ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Visa Status <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <InfoField
              title="Visa Status"
              value={applicationDetails?.sec_visa_status?.visa ?? "Not found"}
              isRequired
            />
            <InfoField
              title="I am an Australian resident / citzen"
              value={
                applicationDetails?.sec_visa_status?.visa
                  ? "Not Required"
                  : "Yes"
              }
            />
            <InfoField
              title="Passport or cetizenship document"
              value="Not required"
            />
            {applicationDetails?.sec_visa_status?.fileList?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Visa document"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )}
          </div>
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Driver's License"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Driver&apos;s license <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <InfoField
              title="Do you have a driver license?"
              value={
                applicationDetails?.sec_driver_license?.hasDriverLicense == true
                  ? "Yes"
                  : "No"
              }
            />
            <InfoField
              title="Do you have a car?"
              value={
                applicationDetails?.sec_driver_license?.hasCar == true
                  ? "Yes"
                  : "No"
              }
            />
            <InfoField
              title="Place of Issue"
              value={applicationDetails?.sec_driver_license?.placeOfIssue}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
            <InfoField
              title="Expiry date"
              value={dateFormat(
                applicationDetails?.sec_driver_license?.expiryDate
              )}
              isRequired
            />
            {applicationDetails?.sec_driver_license?.fileList?.map(
              (file: any, index: any) => (
                <InfoField
                  key={index}
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              )
            )}
          </div>
        </div>
      ) : null}

      {isShow(
        applicationDetails?.positionApplyingFor ?? [],
        "Vaccination Certificate (COVID-19)"
      ) ? (
        <div className="mt-[24px]">
          <p className="font-[500] text-neutralGrey600 mb-[10px]">
            Vaccination Certificate (COVID - 19){" "}
            <span className="text-red-500">*</span>
          </p>
          {applicationDetails?.sec_vacc_cert?.fileList?.map(
            (file: any, index: any) => (
              <div key={index} className="grid grid-cols-3 gap-[24px]">
                <InfoField
                  title="Certificate"
                  value={file?.originalFilename + "." + file?.fileType}
                  isFile
                  userId={applicationDetails?.userId}
                  s3FileKey={file?.s3FileKey}
                  s3FileType={file?.fileType}
                />
              </div>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Certificate;
