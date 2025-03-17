"use client";

import ReduxProvider from "@/redux/Provider";
// import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
// import { ToastContainer } from "react-toastify";
import { ApproveModal, LogoutModal, RejectModal } from "../common/modals";
import { MODALS } from "@/constants";
import AlertBox from "../common/alertBox/alertBox";
import GenerateLicenseModal from "../common/modals/GenerateLicenseModal";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ReduxProvider>
      {children}
      <AlertBox />
      {/* All Modals */}
      {/* Modals (modal id must be unique) */}
      <LogoutModal modalId={MODALS.logoutModalId} />
      <GenerateLicenseModal modalId={MODALS.generateLicenseModalId} />
      <RejectModal modalId={MODALS.rejectModalId} />
      <ApproveModal modalId={MODALS.approveModalId} />
      {/* <ToastContainer /> */}
    </ReduxProvider>
  );
}
