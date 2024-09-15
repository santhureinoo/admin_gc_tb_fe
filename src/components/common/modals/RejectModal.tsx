import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CancelButton, RejectButton } from "../buttons";
import { closeModal } from "@/utils";

type RejectModalProps = {
  modalId: string;
};

function RejectModal({ modalId }: RejectModalProps) {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box bg-white">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-neutralGrey800 flex-1">
            Are you sure you want to reject this applicant?
          </p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => closeModal(modalId)}
          />
        </div>
        <p className="mt-[12px] text-neutralGrey700 font-[400]">
          If you reject this applicant, you will no longer be able to move or
          edit applicant’s information anymore.
        </p>
        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton onClick={() => closeModal(modalId)} />
          <RejectButton />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default RejectModal;
