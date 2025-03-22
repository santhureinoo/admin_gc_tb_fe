"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ActionButton, ApproveButton, CancelButton, RejectButton } from "../buttons";
import { closeModal, downloadCSV } from "@/utils";
import { useForm } from "react-hook-form";
import { USER_ROLES, PLAN_PERIODS, DOWNLOAD_CSV_OPTIONS } from "@/constants";
import { GenerateLicenseKeysReq, getLicenseCSVData, GetLicenseCSVDataReq } from "@/actions/license";
import { useAppSelector } from "@/redux/store";
import { updateApplicationsStatus } from "@/actions/applications";
import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/selectedApplicationsSlice";
import { setAlert } from "@/redux/alertSlice";
import { SearchTextField, TextField } from "../text-field";
import { generateLicenseKeys } from "@/actions/license";
import { useParams } from "next/navigation";

type DownloadLicenseKeyModalProps = {
  modalId: string;
};


function DownloadLicenseKeysModal({ modalId}: DownloadLicenseKeyModalProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<GetLicenseCSVDataReq>();
  const { ids } = useAppSelector(
    (state) => state.license
  );
  const dispatch = useDispatch();
  const handleDownloadLicenseKeys = async () => {
    let type = getValues('type')
    try {
     const data =  await getLicenseCSVData({
        ids: ids,
        type,
      });
      downloadCSV(data, "license-keys");
      closeModal(modalId);
      dispatch(
        setAlert({
          alertType: "success",
          alertMessage: `The License Keys are downloaded successfully.`,
        })
      );
    } catch (error:any) {
      console.log("thsi is error", error)
      dispatch(
        setAlert({
          alertType: "error",
          alertMessage: error.response.data.message,
        })
      );
      closeModal(modalId);
      dispatch(clearApplications());
    }
  };

  return (
    <dialog id={modalId} className="modal">
      <form className="modal-box bg-white" onSubmit={handleSubmit(handleDownloadLicenseKeys)}>
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-neutralGrey800 flex-1">
            Confirm download
          </p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => closeModal(modalId)}
          />
        </div>
        <div className="flex flex-col gap-2 border-b py-[16px]">
          <h3 className="text-neutralGrey-grey600 text-[16px]">User Roles</h3>
          <select
            {...register("type", { required: "Type is required" })}
            className="select w-full bg-transparent border border-[#C4C4C4]"
            defaultValue=""
          >
            <option value="" disabled>
              Download Type
            </option>
            {DOWNLOAD_CSV_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
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

export default DownloadLicenseKeysModal;
