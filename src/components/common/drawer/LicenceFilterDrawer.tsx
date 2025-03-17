"use client";

import React, { useEffect, useState } from "react";
import Filter from "../../../../public/svg/Right.svg"
import Image from "next/image";

type LicenceFilterDrawerProps = {
  id: string;
  position?: string;
  buttonLabel?: string;
  children: any;
};

function LicenceFilterDrawer({
  id = "my-drawer",
  position = "end",
  buttonLabel = "Open Drawer",
  children,
}: LicenceFilterDrawerProps) {
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
      <div className="drawer-content w-full">
        <label htmlFor={id} className="drawer-button flex flex-row border border-black py-4 px-8 rounded-lg">
          {buttonLabel}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu text-base-content min-h-full w-[400px] p-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default LicenceFilterDrawer;
