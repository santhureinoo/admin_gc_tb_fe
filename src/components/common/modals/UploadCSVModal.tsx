"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ActionButton, CancelButton } from "../buttons";
import { closeModal } from "@/utils";
import { useForm, Controller } from "react-hook-form";
import { USER_ROLES, PLAN_PERIODS } from "@/constants";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TextField } from "../text-field";
import { useDropzone } from "react-dropzone";
import { getUploadStatus, uploadUserCSV } from "@/actions/users";
import UploadIcon from "../../../../public/svg/upload_icon.svg";

import { FaRegTrashCan } from "react-icons/fa6";
import { toggleHasNewData } from "@/redux/userListSlice";
type ApproveModalProps = {
  modalId: string;
};

function UploadCSVModal({ modalId }: ApproveModalProps) {
  const [loading, setLoading] = useState<any>(false);
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
    setLoading(true);
    const response = await uploadUserCSV({
      companyName: companyName,
      userRole: role,
      period: period,
      formData,
    });
    setLoading(false);
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
        {loading == true ? (
          <div className="w-full flex flex-col items-center justify-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <p className="text-black text-center mt-[30px]">Loading...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between w-full">
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
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                User Roles
              </h3>
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
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                Plan Periods
              </h3>
              <select
                {...register("period", { required: "Period is required" })}
                className="select w-full bg-transparent border border-[#C4C4C4]"
                defaultValue={12}
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
          </>
        )}
      </form>
    </dialog>
  );
}

export default UploadCSVModal;
