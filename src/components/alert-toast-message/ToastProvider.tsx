"use client";

import ReduxProvider from "@/redux/Provider";
// import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
// import { ToastContainer } from "react-toastify";
import { ApproveModal, LogoutModal, RejectModal, UploadCSVModal } from "../common/modals";
import { MODALS } from "@/constants";
import AlertBox from "../common/alertBox/alertBox";
import GenerateLicenseModal from "../common/modals/GenerateLicenseModal";
import DownloadLicenseKeysModal from "../common/modals/DownloadLicenseKeysModal";

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
      <UploadCSVModal modalId={MODALS.uploadCSVModalID} />
      <DownloadLicenseKeysModal modalId={MODALS.downloadCSVModalId}/>
      <RejectModal modalId={MODALS.rejectModalId} />
      <ApproveModal modalId={MODALS.approveModalId} />
      {/* <ToastContainer /> */}
    </ReduxProvider>
  );
}
