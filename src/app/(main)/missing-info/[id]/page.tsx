"use client";

import { setMissingApplicationInfo } from "@/actions/applications";
import { Accordion, AccordionSubTitle } from "@/components/common/accordion";
import { CancelButton, RejectButton } from "@/components/common/buttons";
import CustomCheckBox from "@/components/common/check-box";
import Logo from "@/components/common/logo";
import { APPLIED_POSITIONS } from "@/constants";
import { setAlert } from "@/redux/alertSlice";
import { useAppSelector } from "@/redux/store";
import { isShow } from "@/utils";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const defaultValues = {
  certificate: false,
  registerNurseNumber: false,
  registerNurseExpiryDate: false,
  registerEnrollNurseNumber: false,
  registerEnrollNurseExpiryDate: false,
  firstAidCertificateFile: false,
  firstAidExpiryDate: false,
  cprCertificateFile: false,
  cprExpiryDate: false,
  foodHandlingCertificateFile: false,
  foodHandlingExpiryDate: false,
  responsibleAlcholCertificateFile: false,
  responsibleAlcholExpiryDate: false,
  manualHandlingCertificateFile: false,
  medicationCertificateFile: false,
  policeCheckCertificateFile: false,
  CVFile: false,
  cvRf1Name: false,
  cvRf1Position: false,
  cvRf1Email: false,
  cvRf1Phone: false,
  cvRf1RelationShip: false,
  cvRf2Name: false,
  cvRf2Position: false,
  cvRf2Email: false,
  cvRf2Phone: false,
  cvRf2RelationShip: false,
  visaStatus: false,
  driverLicenseExpiryDate: false,
  driverLicenseCertificateFile: false,
  vaccinationCertificateFile: false,
  applicantVideoFile: false,
  foreginPassport: false,
  australianPassport: false,
  australianCitizenshipCertificate: false,
  fullBirthCertificate: false,
  certificateIssuedByAustralian: false,
  australianDriverLicence: false,
  australianTertiaryStudentIdentificationCard: false,
  photoIdentificationCardIssuedForAustralian: false,
  governmentEmployeeID: false,
  defenceForceIdentityCard: false,
  departmentOfVeteransAffairs: false,
  CentrelinkCard: false,
  birthCertificateExtract: false,
  birthCard: false,
  medicareCard: false,
  creditCardOrAccountCard: false,
  AustralianMarriageCertificate: false,
  decreeNisi: false,
  changeOfNameCertificate: false,
  bankStatement: false,
  propertyLeaseAgreement: false,
  TaxationAssessmentNotice: false,
  australianMortgageDocuments: false,
  ratingAuthority: false,
  utilityBillElectricity: false,
  referenceFromIndigenousOrganisation: false,
  documentsIssuedOutsideAustralia: false,
  otherForeignSingleDocument: false,
  otherForeignTwoOrMoreDocument: false,
};

function CheckDetail() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const { selectedApplicantUserId, selectedApplicationDetail } = useAppSelector(
    (state) => state.selectedApplications
  );

  function getSelectedAndMissingFields(
    title: string,
    fields: any,
    pipeName: string
  ) {
    // Extract the selected fields (those that have a true value)
    const selectedFields = fields
      .filter((field: any) => Object.values(field)[0] === true)
      .map((field: any) => field.value);

    // Helper function to join with "and" before the last item
    function joinWithAnd(arr: any) {
      if (arr.length === 1) return arr[0]; // Only one item
      if (arr.length === 2) return arr.join(" and "); // Two items, directly join with "and"
      return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`; // More than two items
    }

    // Check if all fields are selected
    if (selectedFields.length === fields.length) {
      return `${title}, ${joinWithAnd(selectedFields)} is wrong.`;
    }

    // If some fields are selected, return those that are selected
    if (selectedFields.length > 0) {
      return `${title}, ${joinWithAnd(selectedFields)} is wrong.`;
    }
  }

  const onSubmit = async (data: any) => {
    const {
      certificate,
      registerNurseNumber,
      registerNurseExpiryDate,
      registerEnrollNurseNumber,
      registerEnrollNurseExpiryDate,
      firstAidCertificateFile,
      firstAidExpiryDate,
      cprCertificateFile,
      cprExpiryDate,
      foodHandlingCertificateFile,
      foodHandlingExpiryDate,
      responsibleAlcholCertificateFile,
      responsibleAlcholExpiryDate,
      manualHandlingCertificateFile,
      medicationCertificateFile,
      policeCheckCertificateFile,
      CVFile,
      cvRf1Name,
      cvRf1Position,
      cvRf1Email,
      cvRf1Phone,
      cvRf1RelationShip,
      cvRf2Name,
      cvRf2Position,
      cvRf2Email,
      cvRf2Phone,
      cvRf2RelationShip,
      visaStatus,
      driverLicenseExpiryDate,
      driverLicenseCertificateFile,
      vaccinationCertificateFile,
      applicantVideoFile,

      // proof of identity
      foreginPassport,
      australianPassport,
      australianCitizenshipCertificate,
      fullBirthCertificate,
      certificateIssuedByAustralian,
      australianDriverLicence,
      australianTertiaryStudentIdentificationCard,
      photoIdentificationCardIssuedForAustralian,
      governmentEmployeeID,
      defenceForceIdentityCard,
      departmentOfVeteransAffairs,
      CentrelinkCard,
      birthCertificateExtract,
      birthCard,
      medicareCard,
      creditCardOrAccountCard,
      AustralianMarriageCertificate,
      decreeNisi,
      changeOfNameCertificate,
      bankStatement,
      propertyLeaseAgreement,
      TaxationAssessmentNotice,
      australianMortgageDocuments,
      ratingAuthority,
      utilityBillElectricity,
      referenceFromIndigenousOrganisation,
      documentsIssuedOutsideAustralia,
      otherForeignSingleDocument,
      otherForeignTwoOrMoreDocument,
    } = data;
    const poiRemarks = [];
    const certificateRemarks: string[] = [];
    const proofOfIdentityRemarks: string[] = [];

    // Qualifications & Certificates
    if (certificate == true) {
      certificateRemarks.push(
        "Qualifications & Certificates, Certificate is wrong."
      );
    }
    // Registered nurse
    if (registerNurseNumber == true && registerNurseExpiryDate == true) {
      certificateRemarks.push(
        "Registered Nurse (Australia), Registration number and Expiry date is wrong."
      );
    } else if (registerNurseNumber == true) {
      certificateRemarks.push(
        "Registered Nurse (Australia), Registration number is wrong."
      );
    } else if (registerNurseExpiryDate == true) {
      certificateRemarks.push(
        "Registered Nurse (Australia), Expiry date is wrong."
      );
    }

    // Enrolled nurse/former enrolled nurse (Australia)
    if (
      registerEnrollNurseNumber == true &&
      registerEnrollNurseExpiryDate == true
    ) {
      certificateRemarks.push(
        "Enrolled Nurse/Former Enrolled Nurse (Australia), Registration number and Expiry date is wrong."
      );
    } else if (registerEnrollNurseNumber == true) {
      certificateRemarks.push(
        "Enrolled Nurse/Former Enrolled Nurse (Australia), Registration number is wrong."
      );
    } else if (registerEnrollNurseExpiryDate == true) {
      certificateRemarks.push(
        "Enrolled Nurse/Former Enrolled Nurse (Australia), Expiry date is wrong."
      );
    }

    // First Aid Certificate
    if (firstAidCertificateFile == true && firstAidExpiryDate == true) {
      certificateRemarks.push(
        "First Aid Certificate, Certificate and Expiry date is wrong."
      );
    } else if (firstAidCertificateFile == true) {
      certificateRemarks.push("First Aid Certificate, Certificate is wrong.");
    } else if (firstAidExpiryDate == true) {
      certificateRemarks.push("First Aid Certificate, Expiry date is wrong.");
    }

    // CPR Certificate
    if (cprCertificateFile == true && cprExpiryDate == true) {
      certificateRemarks.push(
        "CPR Certificate, Certificate and Expiry date is wrong."
      );
    } else if (cprCertificateFile == true) {
      certificateRemarks.push("CPR Certificate, Certificate is wrong.");
    } else if (cprExpiryDate == true) {
      certificateRemarks.push("CPR Certificate, Expiry date is wrong.");
    }

    // Food handling Certificate
    if (foodHandlingCertificateFile == true && foodHandlingExpiryDate == true) {
      certificateRemarks.push(
        "Food Handling Certificate, Certificate and Expiry date is wrong."
      );
    } else if (foodHandlingCertificateFile == true) {
      certificateRemarks.push(
        "Food Handling Certificate, Certificate is wrong."
      );
    } else if (foodHandlingExpiryDate == true) {
      certificateRemarks.push(
        "Food Handling Certificate, Expiry date is wrong."
      );
    }

    // Responsible service of alcohol Certificaite
    if (
      responsibleAlcholCertificateFile == true &&
      responsibleAlcholExpiryDate == true
    ) {
      certificateRemarks.push(
        "Responsible Service of Alcohol Certificate, Certificate and Expiry date is wrong."
      );
    } else if (responsibleAlcholCertificateFile == true) {
      certificateRemarks.push(
        "Responsible Service of Alcohol Certificate, Certificate is wrong."
      );
    } else if (responsibleAlcholExpiryDate == true) {
      certificateRemarks.push(
        "Responsible Service of Alcohol Certificate, Expiry date is wrong."
      );
    }

    // Manual handling Certificate
    if (manualHandlingCertificateFile == true) {
      certificateRemarks.push(
        "Manual Handling Certificate, Certificate is wrong."
      );
    }

    // Medication Certificate
    if (medicationCertificateFile == true) {
      certificateRemarks.push("Medication Certificate, Certificate is wrong.");
    }

    // Police Check
    if (policeCheckCertificateFile == true) {
      certificateRemarks.push("Police Check, Certificate is wrong.");
    }

    // Curriculum Vitae (CV)
    if (CVFile == true) {
      certificateRemarks.push("Curriculum Vitae (CV), CV is wrong.");
    }

    const cvRf1Fields = [
      {
        cvRf1Name: cvRf1Name,
        value: "Name",
      },
      {
        cvRf1Position: cvRf1Position,
        value: "Position",
      },
      {
        cvRf1Email: cvRf1Email,
        value: "Email",
      },
      {
        cvRf1Phone: cvRf1Phone,
        value: "Phone",
      },
      {
        cvRf1RelationShip: cvRf1RelationShip,
        value: "Relationship",
      },
    ];

    const cvRf2Fields = [
      {
        cvRf2Name: cvRf2Name,
        value: "Name",
      },
      {
        cvRf2Position: cvRf2Position,
        value: "Position",
      },
      {
        cvRf2Email: cvRf2Email,
        value: "Email",
      },
      {
        cvRf2Phone: cvRf2Phone,
        value: "Phone",
      },
      {
        cvRf2RelationShip: cvRf2RelationShip,
        value: "Relationship",
      },
    ];
    // Curriculum Vitae (CV) Reference 1
    if (
      getSelectedAndMissingFields(
        "Curriculum Vitae (CV) Reference 1",
        cvRf1Fields,
        "CV"
      ) != undefined
    ) {
      certificateRemarks.push(
        getSelectedAndMissingFields(
          "Curriculum Vitae (CV) Reference 1",
          cvRf1Fields,
          "CV"
        ) as string
      );
    }

    // Curriculum Vitae (CV) Reference 2
    if (
      getSelectedAndMissingFields(
        "Curriculum Vitae (CV) Reference 2",
        cvRf2Fields,
        "CV"
      ) != undefined
    ) {
      certificateRemarks.push(
        getSelectedAndMissingFields(
          "Curriculum Vitae (CV) Reference 2",
          cvRf2Fields,
          "CV"
        ) as string
      );
    }
    // visa status
    if (visaStatus == true) {
      certificateRemarks.push(
        "Visa Status, Passport or citizenship document or Vivo document is wrong"
      );
    }

    const driverLicenseCertificateFields = [
      {
        driverLicenseCertificateFile: driverLicenseCertificateFile,
        value: "Certificate",
      },
      {
        driverLicenseExpiryDate: driverLicenseExpiryDate,
        value: "Expiry date",
      },
    ];

    // Driver license
    if (
      getSelectedAndMissingFields(
        "Driver's License",
        driverLicenseCertificateFields,
        "Driver_License"
      ) != undefined
    ) {
      certificateRemarks.push(
        getSelectedAndMissingFields(
          "Driver's License",
          driverLicenseCertificateFields,
          "Driver_License"
        ) as string
      );
    }

    // Vaccination Certificates (COVID-19)
    if (vaccinationCertificateFile == true) {
      certificateRemarks.push(
        "Vaccination Certificate (COVID-19), Certificate is wrong"
      );
    }

    // Proof of identity
    if (foreginPassport == true) {
      poiRemarks.push("FOREIGN_PASSPORT");
      proofOfIdentityRemarks.push("Foreign Passport (Current) is wrong");
    }
    if (australianPassport == true) {
      poiRemarks.push("AUSTRALIAN_PASSPORT");
      proofOfIdentityRemarks.push(
        "Australian Passport (Current or expired last 2 years but not cancelled) is wrong"
      );
    }
    if (australianCitizenshipCertificate == true) {
      poiRemarks.push("AUSTRALIAN_CITIZENSHIP_CERTIFICATE");
      proofOfIdentityRemarks.push(
        "Australian Citizenship Certificate is wrong"
      );
    }
    if (fullBirthCertificate == true) {
      poiRemarks.push("FULL_BIRTH_CERTIFICATE");
      proofOfIdentityRemarks.push(
        "Full Birth Certificate (not Extract) is wrong"
      );
    }
    if (certificateIssuedByAustralian == true) {
      poiRemarks.push("CERTIFICATE_OF_IDENTITY");
      proofOfIdentityRemarks.push(
        "Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia is wrong"
      );
    }
    if (australianDriverLicence == true) {
      poiRemarks.push("AUSTRALIAN_DRIVER_LICENSE");
      proofOfIdentityRemarks.push(
        "Australian Driver License/Learner's Permit is wrong"
      );
    }
    if (australianTertiaryStudentIdentificationCard == true) {
      poiRemarks.push("CURRENT_AUSTRALIAN_STUDENT_CARD");
      proofOfIdentityRemarks.push(
        "Current (Australian) Tertiary Student Identification Card is wrong"
      );
    }
    if (photoIdentificationCardIssuedForAustralian == true) {
      poiRemarks.push("PHOTO_ID_CARD_FOR_AUSTRALIAN_REGULATORY");

      proofOfIdentityRemarks.push(
        "Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc) is wrong"
      );
    }
    if (governmentEmployeeID == true) {
      poiRemarks.push("GOVERNMENT_EMPLOYEE_ID");
      proofOfIdentityRemarks.push(
        "Government employee ID (Australian Federal/State/Territory) is wrong"
      );
    }
    if (defenceForceIdentityCard == true) {
      poiRemarks.push("DEFENSE_FORCE_ID_CARD");
      proofOfIdentityRemarks.push(
        "Defense Force Identity Card (with photo or signature) is wrong"
      );
    }
    if (departmentOfVeteransAffairs == true) {
      poiRemarks.push("DVA_CARD");
      proofOfIdentityRemarks.push(
        "Department of Veterans' Affairs (DVA) Card is wrong"
      );
    }
    if (CentrelinkCard == true) {
      poiRemarks.push("CENTRELINK_CARD");
      proofOfIdentityRemarks.push(
        "Centrelink card (with reference number) is wrong"
      );
    }
    if (birthCertificateExtract == true) {
      poiRemarks.push("BIRTH_CERTIFICATE_EXTRACT");
      proofOfIdentityRemarks.push("Birth Certificate Extract is wrong");
    }
    if (birthCard == true) {
      poiRemarks.push("BIRTH_CARD");
      proofOfIdentityRemarks.push("Birth card (NSW BDM only) is wrong");
    }
    if (medicareCard == true) {
      poiRemarks.push("MEDICARE_CARD");
      proofOfIdentityRemarks.push("Medicare card is wrong");
    }
    if (creditCardOrAccountCard == true) {
      poiRemarks.push("CREDIT_CARD");
      proofOfIdentityRemarks.push("Credit card or account card is wrong");
    }
    if (AustralianMarriageCertificate == true) {
      poiRemarks.push("AUSTRALIAN_MARRIAGE_CERTIFICATE");
      proofOfIdentityRemarks.push(
        "Australian Marriage Certificate (Registry issue only) is wrong"
      );
    }
    if (decreeNisi == true) {
      poiRemarks.push("DECREE_NISI");
      proofOfIdentityRemarks.push(
        "Decree Nisi / Decree Absolute (Registry issue only) is wrong"
      );
    }
    if (changeOfNameCertificate == true) {
      poiRemarks.push("CHANGE_OF_NAME_CERTIFICATE");
      proofOfIdentityRemarks.push(
        "Change of name certificate (Registry issue only) is wrong"
      );
    }
    if (bankStatement == true) {
      poiRemarks.push("BANK_STATEMENT");
      proofOfIdentityRemarks.push(
        "Bank Statement (Showing transactions) is wrong"
      );
    }
    if (propertyLeaseAgreement == true) {
      poiRemarks.push("PROPERTY_LEASE_AGREEMENT");
      proofOfIdentityRemarks.push(
        "Property lease agreement - current address is wrong"
      );
    }
    if (TaxationAssessmentNotice == true) {
      poiRemarks.push("TAXATION_ASSESSMENT_NOTICE");
      proofOfIdentityRemarks.push("Taxation assessment notice is wrong");
    }
    if (australianMortgageDocuments == true) {
      poiRemarks.push("AUSTRALIAN_MORTGAGE_DOCUMENTS");
      proofOfIdentityRemarks.push(
        "Australian Mortgage Documents - Current Address is wrong"
      );
    }
    if (ratingAuthority == true) {
      poiRemarks.push("RATING_AUTHORITY");
      proofOfIdentityRemarks.push(
        "Rating Authority - Current address eg Land Rates is wrong"
      );
    }
    if (utilityBillElectricity == true) {
      poiRemarks.push("UTILITY_BILL");
      proofOfIdentityRemarks.push(
        "Utility Bill - electricity, gas, telephone - Current address (less than 12 months old) is wrong"
      );
    }
    if (referenceFromIndigenousOrganisation == true) {
      poiRemarks.push("REFERENCE_FROM_INDIGENOUS_ORGANISATION");
      proofOfIdentityRemarks.push(
        "Reference from Indigenous Organisation is wrong"
      );
    }
    if (documentsIssuedOutsideAustralia == true) {
      poiRemarks.push("DOCUMENTS_ISSUED_OUTSIDE_AUSTRALIA");
      proofOfIdentityRemarks.push(
        "Documents issued outside Australia (equivalent to Australian documents).Must have official translation attached is wrong"
      );
    }
    if (otherForeignSingleDocument == true) {
      proofOfIdentityRemarks.push(
        "Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Single document is wrong"
      );
    }
    if (otherForeignTwoOrMoreDocument == true) {
      proofOfIdentityRemarks.push(
        "Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Two or more documents is wrong"
      );
    }

    const payload = {
      caseId: parseInt(id as string),
      sec_qual_cert: {
        file: certificate,
      },
      sec_reg_nurse: {
        registerNumber: registerNurseNumber,
        expiryDate: registerNurseExpiryDate,
      },
      sec_enroll_nurse: {
        registerNumber: registerEnrollNurseNumber,
        expiryDate: registerEnrollNurseExpiryDate,
      },
      sec_firstAid_cert: {
        expiryDate: firstAidExpiryDate,
        file: firstAidCertificateFile,
      },
      sec_cpr_cert: {
        expiryDate: cprExpiryDate,
        file: cprCertificateFile,
      },
      sec_foodHandl_cert: {
        expiryDate: foodHandlingExpiryDate,
        file: foodHandlingCertificateFile,
      },
      sec_resp_alcohol_cert: {
        expiryDate: responsibleAlcholExpiryDate,
        file: responsibleAlcholCertificateFile,
      },
      sec_manualHandl_cert: {
        file: manualHandlingCertificateFile,
      },
      sec_medication_cert: {
        file: medicationCertificateFile,
      },
      sec_police_check: {
        file: policeCheckCertificateFile,
      },
      sec_curriculum_vitae: {
        file: CVFile,
        reference1: {
          name: cvRf1Name,
          position: cvRf1Position,
          email: cvRf1Email,
          phone: cvRf1Phone,
          relationship: cvRf1RelationShip,
        },
        reference2: {
          name: cvRf2Name,
          position: cvRf2Position,
          email: cvRf2Email,
          phone: cvRf2Phone,
          relationship: cvRf2RelationShip,
        },
      },
      sec_visa_status: {
        visa: visaStatus,
      },
      sec_driver_license: {
        expiryDate: driverLicenseExpiryDate,
        file: driverLicenseCertificateFile,
      },
      sec_vacc_cert: {
        file: vaccinationCertificateFile,
      },
      certificate_remark_msg: certificateRemarks,
      profile_video_flag: applicantVideoFile,
      poi_flagged_doc_category: poiRemarks,
      poi_remark_msg: proofOfIdentityRemarks,
    };

    try {
      const response = await setMissingApplicationInfo(payload);
      setAlert({
        alertType: "success",
        alertMessage: `Successfuly added the missing info deatils to this application.`,
      });
      router.push(`/send-resubmit-email/${selectedApplicantUserId}`);
    } catch (error) {
      dispatch(
        setAlert({
          alertType: "error",
          alertMessage: `Something went wrong.`,
        })
      );
    }
  };

  return (
    <div className="w-screen  bg-[#F6F6F6]">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px] mb-[20px]">
          Job Applications / Applications info / Missing info
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center shadow-md p-[24px] rounded-md max-w-[calc(100vw-380px)] mx-auto bg-white"
        >
          <Logo />
          <h3 className="text-neutralGrey800 font-[700] text-[23px] text-center">
            Keep it up, you’re doing great!
          </h3>
          <p className="text-center my-[10px] text-neutralGrey-grey600 font-[500]">
            Tick the boxes for any details the applicant hasn&apos;t filled out
            yet.
          </p>
          {/* Certificate */}
          <Accordion title="Certificate">
            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Qualification and certificate"
            ) ? (
              <>
                <AccordionSubTitle title="Qualifications & Certificates" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("certificate")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Registered Nurse (Australia)"
            ) ? (
              <>
                <AccordionSubTitle title=" Registered nurse" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Registered number"
                    isOptional
                    register={register("registerNurseNumber")}
                  />
                  <CustomCheckBox
                    title="Expiry date"
                    isOptional
                    register={register("registerNurseExpiryDate")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Enrolled Nurse/Former Enrolled Nurse (Australia)"
            ) ? (
              <>
                <AccordionSubTitle title="Enrolled nurse/former enrolled nurse (Australia)" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Registered number"
                    isOptional
                    register={register("registerEnrollNurseNumber")}
                  />
                  <CustomCheckBox
                    title="Expiry date"
                    isOptional
                    register={register("registerEnrollNurseExpiryDate")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "First Aid Certificate"
            ) ? (
              <>
                <AccordionSubTitle title="First Aid Certificate" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("firstAidCertificateFile")}
                  />
                  <CustomCheckBox
                    title="Expiry date"
                    isOptional
                    register={register("firstAidExpiryDate")}
                  />
                </div>
              </>
            ) : null}

            <AccordionSubTitle title="CPR Certificate" isOptional />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Certificate"
                isOptional
                register={register("cprCertificateFile")}
              />
              <CustomCheckBox
                title="Expiry date"
                isOptional
                register={register("cprExpiryDate")}
              />
            </div>

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Food Handling Certificate"
            ) ? (
              <>
                <AccordionSubTitle title="Food handling Certificate" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("foodHandlingCertificateFile")}
                  />
                  <CustomCheckBox
                    title="Expiry date"
                    isOptional
                    register={register("foodHandlingExpiryDate")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Responsible Service of Alcohol Certificate"
            ) ? (
              <>
                <AccordionSubTitle title="Responsible service of alcohol Certificaite" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("responsibleAlcholCertificateFile")}
                  />
                  <CustomCheckBox
                    title="Expiry date"
                    isOptional
                    register={register("responsibleAlcholExpiryDate")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Manual Handling Certificate"
            ) ? (
              <>
                <AccordionSubTitle title="Manual handling Certificate" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("manualHandlingCertificateFile")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Medication Certificate"
            ) ? (
              <>
                <AccordionSubTitle title="Medication Certificate" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("medicationCertificateFile")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Police Check"
            ) ? (
              <>
                <AccordionSubTitle title="Police Check" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("policeCheckCertificateFile")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Curriculum Vitae (CV)"
            ) ? (
              <>
                <AccordionSubTitle title="Curriculum Vitae (CV)" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Upload CV"
                    isOptional
                    register={register("CVFile")}
                  />
                </div>
              </>
            ) : null}

            <AccordionSubTitle title="Reference 1" isOptional />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Name"
                isOptional
                register={register("cvRf1Name")}
              />
              <CustomCheckBox
                title="Position"
                isOptional
                register={register("cvRf1Position")}
              />
              <CustomCheckBox
                title="Email"
                isOptional
                register={register("cvRf1Email")}
              />
              <CustomCheckBox
                title="Phone number"
                isOptional
                register={register("cvRf1Phone")}
              />
              <CustomCheckBox
                title="Realtionship"
                isOptional
                register={register("cvRf1RelationShip")}
              />
            </div>
            <AccordionSubTitle title="Reference 2" isOptional />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Name"
                isOptional
                register={register("cvRf2Name")}
              />
              <CustomCheckBox
                title="Position"
                isOptional
                register={register("cvRf2Position")}
              />
              <CustomCheckBox
                title="Email"
                isOptional
                register={register("cvRf2Email")}
              />
              <CustomCheckBox
                title="Phone number"
                isOptional
                register={register("cvRf2Phone")}
              />
              <CustomCheckBox
                title="Realtionship"
                isOptional
                register={register("cvRf2RelationShip")}
              />
            </div>

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Visa Status"
            ) ? (
              <>
                <AccordionSubTitle title="Visa Status" />
                <div className="grid grid-cols-2 gap-5">
                  <CustomCheckBox
                    title="Passport or citizenship document or Vivo document"
                    register={register("visaStatus")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Driver's License"
            ) ? (
              <>
                <AccordionSubTitle title="Driver license" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Expiry date"
                    isOptional
                    register={register("driverLicenseExpiryDate")}
                  />
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("driverLicenseCertificateFile")}
                  />
                </div>
              </>
            ) : null}

            {isShow(
              selectedApplicationDetail?.positionApplyingFor,
              "Vaccination Certificate (COVID-19)"
            ) ? (
              <>
                <AccordionSubTitle title="Vaccination Certificates (COVID-19)" />
                <div className="grid grid-cols-3 gap-5">
                  <CustomCheckBox
                    title="Certificate"
                    isOptional
                    register={register("vaccinationCertificateFile")}
                  />
                </div>
              </>
            ) : null}
          </Accordion>
          {/* Video */}
          <Accordion title="Applicant video">
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Video"
                isOptional
                register={register("applicantVideoFile")}
              />
            </div>
          </Accordion>
          {/* Proof of identify */}
          <Accordion title="Proof of identity">
            <AccordionSubTitle title="Primary documents" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Foreign Passport (Current)"
                isOptional
                register={register("foreginPassport")}
              />
              <CustomCheckBox
                title="Australian Passport (current or expired last 2 years but not cancelled)"
                isOptional
                register={register("australianPassport")}
              />
              <CustomCheckBox
                title="Australian Citizenship Certificate"
                isOptional
                register={register("australianCitizenshipCertificate")}
              />
              <CustomCheckBox
                title="Full Birth Certificate (not Extract)"
                isOptional
                register={register("fullBirthCertificate")}
              />
              <CustomCheckBox
                title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
                isOptional
                register={register("certificateIssuedByAustralian")}
              />
              <CustomCheckBox
                title="Australian Driver Licence/Learner's Permit"
                isOptional
                register={register("australianDriverLicence")}
              />
              <CustomCheckBox
                title="Current (Australian) Tertiary Student Identification Card"
                isOptional
                register={register(
                  "australianTertiaryStudentIdentificationCard"
                )}
              />
              <CustomCheckBox
                title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
                isOptional
                register={register(
                  "photoIdentificationCardIssuedForAustralian"
                )}
              />
              <CustomCheckBox
                title="Government employee ID (Australian Federal/State/Territory)"
                isOptional
                register={register("governmentEmployeeID")}
              />
              <CustomCheckBox
                title="Defence Force Identity Card (with photo or signature)"
                isOptional
                register={register("defenceForceIdentityCard")}
              />
            </div>
            <AccordionSubTitle title="Secondary documents" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Department of Veterans' Affairs (DVA) Card"
                isOptional
                register={register("departmentOfVeteransAffairs")}
              />
              <CustomCheckBox
                title="Centrelink card (with reference number)"
                isOptional
                register={register("CentrelinkCard")}
              />
              <CustomCheckBox
                title="Birth Certificate Extract"
                isOptional
                register={register("birthCertificateExtract")}
              />
              <CustomCheckBox
                title="Birth card (NSW BDM only)"
                isOptional
                register={register("birthCard")}
              />
              <CustomCheckBox
                title="Medicare card"
                isOptional
                register={register("medicareCard")}
              />
              <CustomCheckBox
                title="Credit card or account card"
                isOptional
                register={register("creditCardOrAccountCard")}
              />
              <CustomCheckBox
                title="Australian Marriage Certificate (Registry issue only)"
                isOptional
                register={register("AustralianMarriageCertificate")}
              />
              <CustomCheckBox
                title="Decree Nisi / Decree Absolute (Registry issue only)"
                isOptional
                register={register("decreeNisi")}
              />
              <CustomCheckBox
                title="Change of name certificate (Registry issue only)"
                isOptional
                register={register("changeOfNameCertificate")}
              />
              <CustomCheckBox
                title="Defence Force Identity Card (with photo or signature)"
                isOptional
                register={register("defenceForceIdentityCard")}
              />
              <CustomCheckBox
                title="Bank statement"
                register={register("bankStatement")}
                isOptional
              />
              <CustomCheckBox
                title="Property lease agreement - current address"
                isOptional
                register={register("propertyLeaseAgreement")}
              />
              <CustomCheckBox
                title="Taxation assessment notice"
                isOptional
                register={register("TaxationAssessmentNotice")}
              />
              <CustomCheckBox
                title="Australian Mortgage Documents"
                isOptional
                register={register("australianMortgageDocuments")}
              />
              <CustomCheckBox
                title="Rating Authority - eg, Land Rates"
                isOptional
                register={register("ratingAuthority")}
              />
              <CustomCheckBox
                title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
                isOptional
                register={register("utilityBillElectricity")}
              />
              <CustomCheckBox
                title="Reference from Indigenous Organisation"
                isOptional
                register={register("referenceFromIndigenousOrganisation")}
              />
              <CustomCheckBox
                title="Documents issued outside Australia (equivalent to Australian documents). Must have official translation attached"
                isOptional
                register={register("documentsIssuedOutsideAustralia")}
              />
              <CustomCheckBox
                title="Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Single document"
                isOptional
                register={register("otherForeignSingleDocument")}
              />
              <CustomCheckBox
                title="Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Two or more documents"
                isOptional
                register={register("otherForeignTwoOrMoreDocument")}
              />
            </div>
          </Accordion>
          <div className="flex items-center justify-between">
            <CancelButton onClick={() => reset()} />
            {/* <button type="submit">Confirm missing info</button> */}
            <RejectButton title="Confirm missing info" submitType />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckDetail;
