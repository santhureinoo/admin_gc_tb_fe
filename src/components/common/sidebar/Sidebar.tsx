"use client";

import React, { useEffect, useState } from "react";
import Logo from "../logo";
import SidebarOption from "./sidbar_option";
import { SIDE_BAR_OPTIONS } from "@/constants";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();

  const [activePage, setActivePage] = useState<string>(pathName);

  useEffect(() => {
    if (
      pathName.includes("application-info") ||
      pathName.includes("send-resubmit-email")
    ) {
      // *** Job applications ****
      setActivePage(SIDE_BAR_OPTIONS[0].route);
    }
  }, [pathName]);

  return (
    <div className="h-screen flex flex-col items-center md:items-start p-3 bg-neutralGrey0 sticky top-0 max-w-[90px] min-w-[90px] md:max-w-[268px] md:min-w-[268px]">
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
