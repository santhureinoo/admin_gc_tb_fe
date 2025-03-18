"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ActionButton, ApproveButton, CancelButton, RejectButton } from "../buttons";
import { closeModal } from "@/utils";
import { useForm } from "react-hook-form";
import { USER_ROLES, PLAN_PERIODS } from "@/constants";
import { GenerateLicenseKeysReq } from "@/actions/license";
import { useAppSelector } from "@/redux/store";
import { updateApplicationsStatus } from "@/actions/applications";
import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/selectedApplicationsSlice";
import { setAlert } from "@/redux/alertSlice";
import { SearchTextField, TextField } from "../text-field";
import { generateLicenseKeys } from "@/actions/license";

type ApproveModalProps = {
  modalId: string;
};


function GenerateLicenseModal({ modalId }: ApproveModalProps) {
  const { selectedApplications, selectedApplicationsStatus } = useAppSelector(
    (state) => state.selectedApplications
  );
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<GenerateLicenseKeysReq>();
  const dispatch = useDispatch();
  const handleGenerateKeys = async () => {
    let companyName = getValues('companyName')
    let role = getValues('role')
    let period = Number(getValues('period'))
    let totalKeys = Number(getValues('totalKeys'))
    try {
      await generateLicenseKeys({
        companyName,
        role,
        period,
        totalKeys,
      });
      setValue('companyName', '')
      setValue('role', '')
      setValue('totalKeys', 0)
      closeModal(modalId);
      dispatch(
        setAlert({
          alertType: "success",
          alertMessage: `The License Keys are generated successfully.`,
        })
      );
    } catch (error) {
      dispatch(
        setAlert({
          alertType: "error",
          alertMessage: `Something went wrong.`,
        })
      );
      closeModal(modalId);
      dispatch(clearApplications());
    }
  };

  return (
    <dialog id={modalId} className="modal">
      <form className="modal-box bg-white" onSubmit={handleSubmit(handleGenerateKeys)}>
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-neutralGrey800 flex-1">
            Generate Keys
          </p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => closeModal(modalId)}
          />
        </div>
        <TextField
          textFieldHeader={"Company Name"}
          textFieldType={"text"}
          placeHolderText={"Company Name"}
          register={register("companyName")}
        />
        <div className="flex flex-col gap-2 border-b py-[16px]">
          <h3 className="text-neutralGrey-grey600 text-[16px]">User Roles</h3>
          <select
            {...register("role", { required: "User role is required" })}
            className="select w-full bg-transparent border border-[#C4C4C4]"
            defaultValue=""
          >
            <option value="" disabled>
              Select User Role
            </option>
            {USER_ROLES.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 border-b py-[16px]">
          <h3 className="text-neutralGrey-grey600 text-[16px]">Plan Periods</h3>
          <select
            {...register("period", { required: "Period is required" })}
            className="select w-full bg-transparent border border-[#C4C4C4]"
            defaultValue=""
          >
            <option value="" disabled>
              Select Period
            </option>
            {PLAN_PERIODS.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
        </div>
        <TextField
          textFieldHeader={"Total License Keys"}
          textFieldType={"text"}
          placeHolderText={"Add key amount"}
          register={register("totalKeys")}
        />
        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton onClick={() => closeModal(modalId)} name="Cancel" />
          <ActionButton name="Generate" type="submit" />
        </div>
      </form>
      {/* <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form> */}
    </dialog>
  );
}

export default GenerateLicenseModal;
