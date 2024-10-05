import { IoMailOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineFileExcel } from "react-icons/ai";
export const MODALS = {
  rejectModalId: "modal_1",
  approveModalId: "modal_2",
  logoutModalId: "modal_3",
};

export const SIDE_BAR_OPTIONS = [
  {
    id: 1,
    name: "Job Applications",
    icon: AiOutlineFileSearch,
    route: "/",
  },
  {
    id: 2,
    name: "Rejected Applications",
    icon: AiOutlineFileExcel,
    route: "/rejected-applications",
  },
  {
    id: 3,
    name: "Logout",
    icon: IoIosLogOut,
    route: "/login",
  },
];
