import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

function Certificate() {
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
            value="my certificate.jpg"
            isFile
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
          <InfoField title="Registration number" value="IAFEFE43434343" />
          <InfoField title="Expiry date" value="12/11/2028" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Enrolled nurses/Former enrolled nurses (Austrailia){" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Registration number" value="IAFEFE43434343" />
          <InfoField title="Expiry date" value="12/11/2028" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          First Aid Certificate <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Expiry date" value="12/11/2028" />
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          CPR Certificate <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Expiry date" value="12/11/2028" />
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Food handling Certificate <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Expiry date" value="12/11/2028" />
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Responsible service of alchol Certificate
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Expiry date" value="12/11/2028" />
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Manual handling Certificate{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Medication Certificate
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Police check</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Do you have a police check?" value="Yes" />
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Curriculum Vitae(CV) <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Upload CV" value="my cv.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Refrence 1</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Name" value="Chris Redwood" />
          <InfoField title="Position" value="Manager" />
          <InfoField title="Email" value="hlyanshapes1999@gmail.com" />
          <InfoField title="Phone number" value="+959970378394" />
          <InfoField title="Relationship" value="Uncle" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Refrence 2</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Name" value="Chris Redwood" />
          <InfoField title="Position" value="Manager" />
          <InfoField title="Email" value="hlyanshapes1999@gmail.com" />
          <InfoField title="Phone number" value="+959970378394" />
          <InfoField title="Relationship" value="Uncle" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Visa Status <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Visa Status" value="ED Visa" isRequired />
          <InfoField
            title="I am an Australian resident / citzen"
            value="Not required"
          />
          <InfoField
            title="Passport or cetizenship document"
            value="Not required"
          />
          <InfoField title="Vivo document" value="my cv.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Driver's license <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField title="Do you have a driver license?" value="Yes" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
          <InfoField title="Expiry date" value="No expiry date" isRequired />
          <InfoField title="Certificate" value="my certificate.jpg" isFile />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Vaccination Certificate (COVID - 19){" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-3 gap-[24px]">
          <InfoField title="Certificate" value="my cv.jpg" isFile />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
