import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";

function FinancialInfo() {
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
        <div className="grid grid-cols-3 gap-[24px]">
          <InfoField title="Tax file number" value="AIJSDFKJLKJASDFKJ" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">Bank details</p>
        <div className="grid grid-cols-3 gap-[24px]">
          <InfoField title="Bank name" value="Bangkok bank" />
          <InfoField title="Bank account number" value="123kk1238812" />
          <InfoField title="Account holder name" value="Hlyan Htet Aung" />
          <InfoField title="BSB" value="NADA213123" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Super details
        </p>
        <div className="grid grid-cols-3 gap-[24px]">
          <InfoField title="Fund name" value="AustralianSuper" />
          <InfoField title="Fund membership number" value="2131232" />
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-[500] text-neutralGrey600 mb-[10px]">
          Fund ABN + SPIN
        </p>
        <div className="grid grid-cols-3 gap-[24px]">
          <InfoField title="ABN" value="66 2311 23" />
          <InfoField title="SPIN" value="ASUOO123" />
          <InfoField title="Fund account number" value="139920 123" />
        </div>
      </div>
    </div>
  );
}

export default FinancialInfo;
