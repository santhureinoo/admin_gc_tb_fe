"use client";

import React, { useEffect, useState } from "react";
import Logo from "../logo";
import SidebarOption from "./sidbar_option";
import { SIDE_BAR_OPTIONS } from "@/constants";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();
  const [activePage, setActivePage] = useState<string>(pathName);

  return (
    <div className="h-screen max-w-[268px] min-w-[268px] p-3 bg-neutralGrey0 sticky top-0">
      <Logo />
      {SIDE_BAR_OPTIONS.map((option, index) => (
        <SidebarOption
          setActivePageFunc={setActivePage}
          key={option.id}
          icon={option.icon}
          name={option.name}
          isActive={activePage == option.route}
          route={option.route}
        />
      ))}
    </div>
  );
}

export default Sidebar;
