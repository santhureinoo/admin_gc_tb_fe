"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CancelButton, RejectButton } from "../buttons";
import { closeModal } from "@/utils";
import { useRouter } from "next/navigation";
import { ACCESS_TOKEN, CURRENT_USER_ID, REFRESH_TOKEN } from "@/constants";
import { deleteCookie } from "cookies-next";
type LogoutModalProps = {
  modalId: string;
};

function LogoutModal({ modalId }: LogoutModalProps) {
  const router = useRouter();

  const handleLogout = () => {
    // Array of cookies to remove
    const cookiesToRemove = [ACCESS_TOKEN, REFRESH_TOKEN, CURRENT_USER_ID];
    cookiesToRemove.forEach((cookieName) => deleteCookie(cookieName));
    closeModal(modalId);
    router.push("/login");
  };

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box bg-white">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-neutralGrey800 flex-1">
            Are you sure you want to log out?
          </p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => closeModal(modalId)}
          />
        </div>
        <p className="mt-[12px] text-neutralGrey700 font-[400]">
          You are about to log out of your account. Make sure you’ve saved all
          your work and completed any ongoing tasks.
        </p>
        <div className="flex items-center justify-end mt-[24px] gap-3">
          <CancelButton onClick={() => closeModal(modalId)} />
          <RejectButton title="Confirm to logout" onClick={handleLogout} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default LogoutModal;
