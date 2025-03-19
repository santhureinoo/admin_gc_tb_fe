"use client";

import React, { useEffect, useState } from "react";
import { ActionButton, CancelButton } from "../buttons";

type UserFilterDrawerProps = {
  id: string;
  position?: string;
  buttonLabel?: string;
  children: any;
};
function UserFilterDrawer({
  id = "my-drawer",
  position = "end",
  buttonLabel = "Open Drawer",
  children,
}: UserFilterDrawerProps) {
  const [num, setNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setNum(0);
    }
  }, [isOpen]);

  return (
    <div className={`drawer drawer-${position} z-50`}>
      <input
        id={id}
        type="checkbox"
        className="drawer-toggle"
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <div className="drawer-content">
        <label htmlFor={id} className="drawer-button btn btn-primary">
          {buttonLabel}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col h-full w-[400px] p-4 bg-white">
          <div className="flex-1 overflow-auto">{children}</div>
{/* 
          <div className="flex gap-2 items-center pt-[16px] border-t">
            <CancelButton name="Reset" fullWidth />
            <ActionButton name="Apply Filter" fullWidth />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UserFilterDrawer;
