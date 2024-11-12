import { IoMailOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineFileExcel } from "react-icons/ai";

// cookie naming
export const ACCESS_TOKEN = "_auth_gc_access";
export const REFRESH_TOKEN = "_auth_gc_refresh";
export const CURRENT_USER_ID = "_auth_gc_currentId";
export const REFRESH_TOKEN_URL = "auth/refresh";

export const LOGOUT_URL = "auth/logout";

export const PAGINATION_PER_PAGE = 5;
export type APPLICATIONS_STATUS =
  | "PENDING"
  | "MISSING_INFO"
  | "REUPLOADED"
  | "APPROVED"
  | "INTERVIEW";

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

//position is to decide which certificate to render based on the applied position
export const APPLIED_POSITIONS: any = {
  "Qualification and certificate": ["csa_psa", "others"],
  "Registered Nurse (Australia)": ["nurse"],
  "Enrolled Nurse/Former Enrolled Nurse (Australia)": ["enrolled-nurse"],
  "First Aid Certificate": ["nurse", "enrolled-nurse", "csa_psa", "others"],
  "Food Handling Certificate": ["csa_psa", "others"],
  "Responsible Service of Alcohol Certificate": ["csa_psa", "others"],
  "Manual Handling Certificate": ["csa_psa", "others"],
  "Medication Certificate": ["csa_psa", "others"],
  "Police Check": ["nurse", "enrolled-nurse", "csa_psa", "others"],
  "Curriculum Vitae (CV)": ["nurse", "enrolled-nurse", "csa_psa", "others"],
  "Visa Status": ["nurse", "enrolled-nurse", "csa_psa", "others"],
  "Driver's License": ["nurse", "enrolled-nurse", "csa_psa", "others"],
  "Vaccination Certificate (COVID-19)": [
    "nurse",
    "enrolled-nurse",
    "csa_psa",
    "others",
  ],
};
