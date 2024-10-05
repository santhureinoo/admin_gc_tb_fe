import { Accordion, AccordionSubTitle } from "@/components/common/accordion";
import { CancelButton, RejectButton } from "@/components/common/buttons";
import CustomCheckBox from "@/components/common/check-box";
import Logo from "@/components/common/logo";
import React from "react";

function CheckDetail() {
  return (
    <div className="w-screen  bg-[#F6F6F6]">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      {/* <button
    onClick={() => {
      showToast(
        "success",
        "This applicant has been moved to missing infos by the admin."
      );
    }}
  >
    Click
  </button> */}

      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px] mb-[20px]">
          Job Applications / Applications info / Missing info
        </p>
        <form className="flex flex-col justify-center shadow-md p-[24px] rounded-md max-w-[calc(100vw-380px)] mx-auto bg-white">
          <Logo />
          <h3 className="text-neutralGrey800 font-[700] text-[23px] text-center">
            Keep it up, you’re doing great!
          </h3>
          <p className="text-center my-[10px] text-neutralGrey-grey600 font-[500]">
            Tick the boxes for any details the applicant hasn't filled out yet.
          </p>
          {/* Certificate */}
          <Accordion title="Certificate">
            <AccordionSubTitle title="Qualifications & Certificates" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Certificate" isOptional />
            </div>
            <AccordionSubTitle title=" Registered nurse" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Registered number" isOptional />
              <CustomCheckBox title="Expiry date" isOptional />
            </div>
            <AccordionSubTitle title="Enrolled nurse/former enrolled nurse (Australia)" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Registered number" isOptional />
              <CustomCheckBox title="Expiry date" isOptional />
            </div>
            <AccordionSubTitle title="First Aid Certificate" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Registered number" isOptional />
              <CustomCheckBox title="Expiry date" isOptional />
            </div>
            <AccordionSubTitle title="CPR Certificate" isOptional />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Registered number" isOptional />
              <CustomCheckBox title="Expiry date" isOptional />
            </div>
            <AccordionSubTitle title="Food handling Certificate" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Registered number" isOptional />
              <CustomCheckBox title="Expiry date" isOptional />
            </div>
            <AccordionSubTitle title="Responsible service of alcohol Certificaite" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Registered number" isOptional />
              <CustomCheckBox title="Expiry date" isOptional />
            </div>
            <AccordionSubTitle title="Manual handling Certificate" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Certificate" isOptional />
            </div>
            <AccordionSubTitle title="Medication Certificate" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Certificate" isOptional />
            </div>
            <AccordionSubTitle title="Police Check" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Certificate" isOptional />
            </div>
            <AccordionSubTitle title="Curriculum Vitae (CV)" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Upload CV" isOptional />
            </div>
            <AccordionSubTitle title="Reference 1" isOptional />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Name" isOptional />
              <CustomCheckBox title="Position" isOptional />
              <CustomCheckBox title="Email" isOptional />
              <CustomCheckBox title="Phone number" isOptional />
              <CustomCheckBox title="Realtionship" isOptional />
            </div>
            <AccordionSubTitle title="Reference 2" isOptional />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Name" isOptional />
              <CustomCheckBox title="Position" isOptional />
              <CustomCheckBox title="Email" isOptional />
              <CustomCheckBox title="Phone number" isOptional />
              <CustomCheckBox title="Realtionship" isOptional />
            </div>
            <AccordionSubTitle title="Visa Status" />
            <div className="grid grid-cols-2 gap-5">
              <CustomCheckBox title="Passport or citizenship document or Vivo document" />
            </div>
            <AccordionSubTitle title="Driver license" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Expiry date" isOptional />
              <CustomCheckBox title="Certificate" isOptional />
            </div>
            <AccordionSubTitle title="Vaccination Certificates (COVID-19)" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Certificate" isOptional />
            </div>
          </Accordion>
          {/* Video */}
          <Accordion title="Application video">
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Video" isOptional />
            </div>
          </Accordion>
          {/* Proof of identify */}
          <Accordion title="Proof of identity">
            <AccordionSubTitle title="Primary documents" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox title="Foreign Passport (Current)" isOptional />
              <CustomCheckBox
                title="Australian Passport (current or expired last 2 years but not cancelled)"
                isOptional
              />
              <CustomCheckBox
                title="Australian Citizenship Certificate"
                isOptional
              />
              <CustomCheckBox
                title="Full Birth Certificate (not Extract)"
                isOptional
              />
              <CustomCheckBox title="Foreign Passport (Current)" isOptional />
              <CustomCheckBox
                title="Certificate of Identity issued by the Australian Government to refugees and non Australian citizens for entry to Australia"
                isOptional
              />
              <CustomCheckBox
                title="Australian Driver Licence/Learner's Permit"
                isOptional
              />
              <CustomCheckBox
                title="Current (Australian) Tertiary Student Identification Card"
                isOptional
              />
              <CustomCheckBox
                title="Photo identification card issued for Australian regulatory purposes (e.g. Aviation/Martime Security identification, security industry etc)"
                isOptional
              />
              <CustomCheckBox
                title="Government employee ID (Australian Federal/State/Territory)"
                isOptional
              />
              <CustomCheckBox
                title="Defence Force Identity Card (with photo or signature)"
                isOptional
              />
            </div>
            <AccordionSubTitle title="Secondary documents" />
            <div className="grid grid-cols-3 gap-5">
              <CustomCheckBox
                title="Department of Veterans' Affairs (DVA) Card"
                isOptional
              />
              <CustomCheckBox
                title="Centrelink card (with reference number)"
                isOptional
              />
              <CustomCheckBox title="Birth Certificate Extract" isOptional />
              <CustomCheckBox title="Birth card (NSW BDM only)" isOptional />
              <CustomCheckBox title="Foreign Passport (Current)" isOptional />
              <CustomCheckBox title="Medicare card" isOptional />
              <CustomCheckBox title="Credit card or account card" isOptional />
              <CustomCheckBox
                title="Australian Marriage Certificate (Registry issue only)"
                isOptional
              />
              <CustomCheckBox
                title="Decree Nisi / Decree Absolute (Registry issue only)"
                isOptional
              />
              <CustomCheckBox
                title="Change of name certificate (Registry issue only)"
                isOptional
              />
              <CustomCheckBox
                title="Defence Force Identity Card (with photo or signature)"
                isOptional
              />
              <CustomCheckBox title="Bank statement" isOptional />
              <CustomCheckBox
                title="Property lease agreement - current address"
                isOptional
              />
              <CustomCheckBox title="Taxation assessment notice" isOptional />
              <CustomCheckBox
                title="Australian Mortgage Documents"
                isOptional
              />
              <CustomCheckBox
                title="Rating Authority - eg, Land Rates"
                isOptional
              />
              <CustomCheckBox
                title="Utility Bill - electricity, gas, telephone (less than 12 months old)"
                isOptional
              />
              <CustomCheckBox
                title="Reference from Indigenous Organisation"
                isOptional
              />
              <CustomCheckBox
                title="Documents issued outside Australia (equivalent to Australian documents). Must have official translation attached"
                isOptional
              />
              <CustomCheckBox
                title="Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Single document"
                isOptional
              />
              <CustomCheckBox
                title="Other foreign documents (equivalent to Australian documents). Must be accompanied by an official translation if document is not in English. - Two or more documents"
                isOptional
              />
            </div>
          </Accordion>
          <div className="flex items-center justify-between">
            <CancelButton />
            <RejectButton title="Confirm missing info" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckDetail;
