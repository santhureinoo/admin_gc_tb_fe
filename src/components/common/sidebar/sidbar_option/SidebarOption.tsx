"use client";

type SidebarOptionProps = {
  icon: any;
  name: string;
  isActive: boolean;
  route: string;
  setActivePageFunc: (route: string) => void;
};

import { MODALS } from "@/constants";
import { openModal } from "@/utils";
import { useRouter } from "next/navigation";

function SidebarOption({
  icon: Icon,
  name,
  isActive,
  route,
  setActivePageFunc,
}: SidebarOptionProps) {
  const router = useRouter();

  const handleNavigate = () => {
    if (name == "Logout") {
      openModal(MODALS.logoutModalId);
      setActivePageFunc(route);
      return;
    }
    router.push(route);
    setActivePageFunc(route);
  };

  return (
    <div
      onClick={handleNavigate}
      className={`w-full flex items-center gap-2 mb-[10px] px-[24px] py-[12px] rounded-md cursor-pointer ${
        isActive ? "bg-primary-pink100" : "bg-transparent"
      } 
      `}
    >
      <Icon
        className={`${
          isActive ? "text-primary-pink600" : "text-neutralGrey800"
        } `}
      />
      <p
        className={`text-[14px] hidden md:block text-nowrap ${
          isActive
            ? "font-[500] text-primary-pink600"
            : "font-[300] text-neutralGrey800"
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export default SidebarOption;
