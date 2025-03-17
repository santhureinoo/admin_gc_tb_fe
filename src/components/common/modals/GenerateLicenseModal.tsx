"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ActionButton, ApproveButton, CancelButton, RejectButton } from "../buttons";
import { closeModal } from "@/utils";
import { useAppSelector } from "@/redux/store";
import { updateApplicationsStatus } from "@/actions/applications";
import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/selectedApplicationsSlice";
import { setAlert } from "@/redux/alertSlice";
import { SearchTextField, TextField } from "../text-field";

type ApproveModalProps = {
  modalId: string;
};

function GenerateLicenseModal({ modalId }: ApproveModalProps) {
  const { selectedApplications, selectedApplicationsStatus } = useAppSelector(
    (state) => state.selectedApplications
  );

  const dispatch = useDispatch();
  const handleApprove = async () => {
    try {
      await updateApplicationsStatus({
        action: "APPROVED",
        application_id_list: selectedApplications,
      });
      dispatch(clearApplications());
      closeModal(modalId);
      dispatch(
        setAlert({
          alertType: "success",
          alertMessage: `This applicant has been approved by the admin, now you can move this user to interview phase.`,
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
      <div className="modal-box bg-white">
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
        />
        <div className="flex flex-col gap-2 border-b py-[16px]">
          <h3 className="text-neutralGrey-grey600 text-[16px]">User Roles</h3>
          <select
            defaultValue="Pick a color"
            className="select w-full bg-transparent border border-[#C4C4C4]"
          >
            <option disabled={true}>Select User Role</option>
            <option>Consumer</option>
            <option>Coordinator</option>
            <option>Care Worker</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 border-b py-[16px]">
          <h3 className="text-neutralGrey-grey600 text-[16px]">Plan Periods</h3>
          <select
            defaultValue="Pick a color"
            className="select w-full bg-transparent border border-[#C4C4C4]"
          >
            <option disabled={true}>Select plan period</option>
            <option>3 months</option>
            <option>6 months</option>
            <option>12 months</option>
            <option>24 months</option>
          </select>
        </div>
        <TextField
          textFieldHeader={"Total License Keys"}
          textFieldType={"text"}
          placeHolderText={"Add key amount"}
        />
        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton onClick={() => closeModal(modalId)} name="Cancel"/>
          <ActionButton name="Generate" />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default GenerateLicenseModal;
