"use client";
import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  ActionButton,
  ApproveButton,
  CancelButton,
  RejectButton,
} from "../buttons";
import { closeModal } from "@/utils";
import { useForm, Controller } from "react-hook-form";
import { USER_ROLES, PLAN_PERIODS } from "@/constants";
import { GenerateLicenseKeysReq } from "@/actions/license";
import { useAppSelector } from "@/redux/store";
import { updateApplicationsStatus } from "@/actions/applications";
import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/selectedApplicationsSlice";
import { setAlert } from "@/redux/alertSlice";
import { SearchTextField, TextField } from "../text-field";
import { generateLicenseKeys } from "@/actions/license";
import CSVUploader from "../Dropzone";
import { useDropzone } from "react-dropzone";
import { uploadUserCSV } from "@/actions/users";

type ApproveModalProps = {
  modalId: string;
};

function UploadCSVModal({ modalId }: ApproveModalProps) {
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
  } = useForm<any>();

  const dispatch = useDispatch();

  const handleUserCSVUpload = async (data: any) => {
    // console.log("handleUserCSVUpload");
    const { companyName, role, period, file } = data;
    console.log("** this is file ***", file[0]);
    const formData = new FormData();
    formData.append("email", "jkljsldf");
    formData.append("file", file[0]);
    console.log("** zzz ***", formData);
    const response = await uploadUserCSV({
      companyName: companyName,
      userRole: role,
      period: period,
      formData,
    });
  };

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setValue("file", acceptedFiles, { shouldValidate: true });
    },
    [setValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    multiple: true,
  });

  return (
    <dialog id={modalId} className="modal">
      <form
        className="modal-box bg-white"
        onSubmit={handleSubmit(handleUserCSVUpload)}
      >
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-neutralGrey800 flex-1">
            Select Format
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
        <div className="flex flex-col gap-2 py-[16px]">
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
        <div className="flex flex-col gap-2 py-[16px]">
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
        <Controller
          name="file"
          control={control}
          render={() => (
            <div
              {...getRootProps()}
              className="border-2 border-dashed p-6 text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p>Drag & drop CSV or image files here, or click to select</p>
            </div>
          )}
        />
        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton onClick={() => closeModal(modalId)} name="Cancel" />
          <ActionButton name="Confirm" type="submit" />
        </div>
      </form>
      {/* <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form> */}
    </dialog>
  );
}

export default UploadCSVModal;
