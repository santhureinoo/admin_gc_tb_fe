import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

type FinancialInfoProps = {
  applicationDetails: any;
};
function FinancialInfo({ applicationDetails }: FinancialInfoProps) {
  return (
    <div
      id={"section-a7"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Financial Infos" />
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          TFN (Tax File Number)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Tax file number"
            value={applicationDetails?.financialInfo?.taxFileNumber}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Bank details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Bank name"
            value={applicationDetails?.financialInfo?.bankName}
          />
          <InfoField
            title="Bank account number"
            value={applicationDetails?.financialInfo?.accountNumber}
          />
          <InfoField
            title="Account holder name"
            value={applicationDetails?.financialInfo?.accountHolderName}
          />
          <InfoField
            title="BSB"
            value={applicationDetails?.financialInfo?.bsb}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Super details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="Fund name"
            value={applicationDetails?.financialInfo?.fundName}
          />
          <InfoField
            title="Fund membership number"
            value={applicationDetails?.financialInfo?.fundMembershipNumber}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Fund ABN + SPIN
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <InfoField
            title="ABN"
            value={applicationDetails?.financialInfo?.abn}
          />
          <InfoField
            title="SPIN"
            value={applicationDetails?.financialInfo?.spin}
          />
          <InfoField
            title="Fund account number"
            value={applicationDetails?.financialInfo?.fundContactNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default FinancialInfo;
