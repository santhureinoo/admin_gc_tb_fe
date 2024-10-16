import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";
import { dateFormat } from "@/utils";

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
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Qualifications & Certificates <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Certificate III(Australia)"
            value={
              applicationDetails?.sec_qual_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_qual_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_qual_cert?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_qual_cert?.file?.fileType}
          />
          <InfoField title="Certificate IV(Australia)" value="Not required" />
          <InfoField title="No Certification" value="Not required" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Registered nurses (Austrailia) <span className="text-red-500">*</span>
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
            value={dateFormat(applicationDetails?.sec_enroll_nurse?.expiryDate)}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          First Aid Certificate <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Expiry date"
            value={dateFormat(
              applicationDetails?.sec_firstAid_cert?.expiryDate
            )}
          />
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_firstAid_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_firstAid_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_firstAid_cert?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_firstAid_cert?.file?.fileType}
          />
        </div>
      </div>
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
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Food handling Certificate <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Expiry date"
            value={dateFormat(
              applicationDetails?.sec_foodHandl_cert?.expiryDate
            )}
          />
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_foodHandl_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_foodHandl_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_foodHandl_cert?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_foodHandl_cert?.file?.fileType}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Responsible service of alchol Certificate
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Expiry date"
            value={dateFormat(
              applicationDetails?.sec_resp_alcohol_cert?.expiryDate
            )}
          />
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_resp_alcohol_cert?.file
                ?.originalFilename +
              "." +
              applicationDetails?.sec_resp_alcohol_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={
              applicationDetails?.sec_resp_alcohol_cert?.file?.s3FileKey
            }
            s3FileType={
              applicationDetails?.sec_resp_alcohol_cert?.file?.fileType
            }
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Manual handling Certificate{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_manualHandl_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_manualHandl_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={
              applicationDetails?.sec_manualHandl_cert?.file?.s3FileKey
            }
            s3FileType={
              applicationDetails?.sec_manualHandl_cert?.file?.fileType
            }
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Medication Certificate
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_medication_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_medication_cert?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_medication_cert?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_medication_cert?.file?.fileType}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Police check</p>
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
            title="Certificate"
            value={
              applicationDetails?.sec_police_check?.file?.originalFilename +
              "." +
              applicationDetails?.sec_police_check?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_police_check?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_police_check?.file?.fileType}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Curriculum Vitae(CV) <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Upload CV"
            value={
              applicationDetails?.sec_curriculum_vitae?.file?.originalFilename +
              "." +
              applicationDetails?.sec_curriculum_vitae?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={
              applicationDetails?.sec_curriculum_vitae?.file?.s3FileKey
            }
            s3FileType={
              applicationDetails?.sec_curriculum_vitae?.file?.fileType
            }
          />
        </div>
      </div>
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
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Visa Status <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Visa Status"
            value={applicationDetails?.sec_visa_status?.visa}
            isRequired
          />
          <InfoField
            title="I am an Australian resident / citzen"
            value="Not required"
          />
          <InfoField
            title="Passport or cetizenship document"
            value="Not required"
          />
          <InfoField
            title="Vivo document"
            value={
              applicationDetails?.sec_visa_status?.file?.originalFilename +
              "." +
              applicationDetails?.sec_visa_status?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_visa_status?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_visa_status?.file?.fileType}
          />
        </div>
      </div>
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
          <InfoField
            title="Expiry date"
            value={dateFormat(
              applicationDetails?.sec_driver_license?.expiryDate
            )}
            isRequired
          />
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_driver_license?.file?.originalFilename +
              "." +
              applicationDetails?.sec_driver_license?.file?.fileType
            }
            isFile
            userId={applicationDetails?.userId}
            s3FileKey={applicationDetails?.sec_driver_license?.file?.s3FileKey}
            s3FileType={applicationDetails?.sec_driver_license?.file?.fileType}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Vaccination Certificate (COVID - 19){" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-3 gap-[24px]">
          <InfoField
            title="Certificate"
            value={
              applicationDetails?.sec_vacc_cert?.file?.originalFilename +
              "." +
              applicationDetails?.sec_vacc_cert?.file?.fileType
            }
            isFile
          />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
