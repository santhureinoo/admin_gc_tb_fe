"use client";
import React, { useCallback, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ActionButton, CancelButton } from "../buttons";
import { closeModal } from "@/utils";
import { useForm, Controller } from "react-hook-form";
import { USER_ROLES, PLAN_PERIODS } from "@/constants";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TextField } from "../text-field";
import { useDropzone } from "react-dropzone";
import { uploadUserCSV } from "@/actions/users";
import UploadIcon from "../../../../public/svg/upload_icon.svg";

import { FaRegTrashCan } from "react-icons/fa6";
import { toggleHasNewData } from "@/redux/userListSlice";
type ApproveModalProps = {
  modalId: string;
};

function UploadCSVModal({ modalId }: ApproveModalProps) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<any>();
  const dispatch = useDispatch();
  const file = getValues("file");

  const handleUserCSVUpload = async (data: any) => {
    const { companyName, role, period, file } = data;
    const formData = new FormData();
    formData.append("file", file[0]);
    const response = await uploadUserCSV({
      companyName: companyName,
      userRole: role,
      period: period,
      formData,
    });
    dispatch(toggleHasNewData());
    closeModal(modalId);
    resetData();
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

  const resetData = () => {
    setValue("companyName", "");
    setValue("period", "");
    setValue("role", "");
    setValue("file", null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

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
            onClick={() => {
              closeModal(modalId);
              resetData();
            }}
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
        {file == undefined || null ? (
          <Controller
            name="file"
            control={control}
            render={() => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed p-6 text-center cursor-pointer flex flex-col items-center gap-[10px]"
              >
                <input {...getInputProps()} />
                <UploadIcon />
                <p>
                  <span>Upload a file</span> or drag and drop
                </p>
                <p>CSV file up to 5MB</p>
              </div>
            )}
          />
        ) : (
          <div className="flex items-center justify-between">
            <p>{file[0].name}</p>
            <FaRegTrashCan
              className="cursor-pointer"
              onClick={() => {
                setValue("file", null, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                });
              }}
            />
          </div>
        )}

        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton
            onClick={() => {
              closeModal(modalId);
              resetData();
            }}
            name="Cancel"
          />
          <ActionButton name="Confirm" type="submit" />
        </div>
      </form>
    </dialog>
  );
}

export default UploadCSVModal;
