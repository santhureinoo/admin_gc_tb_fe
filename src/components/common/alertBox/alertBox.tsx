"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import "./style.css";
import { clearAlert } from "@/redux/alertSlice";
import { useAppSelector } from "@/redux/store";

const AlertBox: React.FC = () => {
  const alert = useAppSelector((state) => state.alertSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set a timeout to clear the alert after 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(() => {
      dispatch(clearAlert());
    }, 5000);

    // Clear the timeout if the component unmounts or the alert changes
    return () => clearTimeout(timeoutId);
  }, [alert, dispatch]);

  if (!alert.alertType) return null;

  return (
    <div
      style={{ maxWidth: "500px" }}
      className={`alert alert-${alert.alertType}`}
    >
      {alert.alertType === "success" ? (
        <CheckCircleIcon
          className={`h-[25px] w-[25px]`}
          style={{ color: "#22C55E" }}
        />
      ) : alert.alertType === "error" ? (
        <XCircleIcon
          className={`h-[25px] w-[25px]`}
          style={{ color: "#EF4444" }}
        />
      ) : null}
      <p className={`pl-3 mr-[2.5rem] max-w-[21rem] text-start flex-1`}>
        {alert.alertMessage}
      </p>
      <div onClick={() => dispatch(clearAlert())}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default AlertBox;
