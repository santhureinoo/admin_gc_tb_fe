"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ApproveButton, CancelButton, RejectButton } from "../buttons";
import { closeModal } from "@/utils";
import { useAppSelector } from "@/redux/store";
import { updateApplicationsStatus } from "@/actions/applications";
import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/selectedApplicationsSlice";
import { setAlert } from "@/redux/alertSlice";

type ApproveModalProps = {
  modalId: string;
};

function ApproveModal({ modalId }: ApproveModalProps) {
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
            Are you sure you want to approve that you selected?
          </p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => closeModal(modalId)}
          />
        </div>
        <p className="mt-[12px] text-neutralGrey700 font-[400]">
          If you approve, the applicant data will be transferred to the approved
          list.
        </p>
        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton onClick={() => closeModal(modalId)} />
          <ApproveButton title="Approve All" onClick={handleApprove} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ApproveModal;
