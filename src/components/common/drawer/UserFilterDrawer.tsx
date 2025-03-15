"use client";

import React, { useEffect, useState } from "react";

function UserFilterDrawer({
  id = "my-drawer",
  position = "end",
  buttonLabel = "Open Drawer",
  children,
}: any) {
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
        <ul className="menu text-base-content min-h-full w-80 p-4 bg-white">
          <p className="text-black">{num}</p>
          <button onClick={() => setNum((prev: any) => prev + 1)}>Add</button>
          {children}
        </ul>
      </div>
    </div>
  );
}

export default UserFilterDrawer;
