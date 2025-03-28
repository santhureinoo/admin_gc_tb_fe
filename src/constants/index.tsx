import { IoMailOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineFileSearch, AiOutlineMan } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LuKeySquare } from "react-icons/lu";
import KeyIcon from '../../public/svg/key_icon.svg';
import { AiOutlineFileExcel } from "react-icons/ai";

// cookie naming
export const ACCESS_TOKEN = "_auth_gc_access";
export const REFRESH_TOKEN = "_auth_gc_refresh";
export const CURRENT_USER_ID = "_auth_gc_currentId";
export const REFRESH_TOKEN_URL = "auth/refresh";

// routes
export const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/reset-password",
  "/forgot-password",
  "/verify-otp",
]

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
  generateLicenseModalId: "modal_4",
  uploadCSVModalID: "modal_5",
  downloadCSVModalId: "modal_6",
};
export const DOWNLOAD_CSV_OPTIONS = [
  {
    label: "All License Keys",
    value: "all"
  },
  {
    label: "Only Available Keys",
    value: "avail"
  },
  {
    label: "Only redeemed Keys",
    value: "redeem"
  },
]
export const USER_ROLES = [
  {
    label: "Care Worker",
    value: "careWorker"
  },
  {
    label: "Coordinator",
    value: "coordinator"
  },
  {
    label: "Consumer",
    value: "consumer"
  },
];

export const PLAN_PERIODS = [
  {
    label: "3 months",
    value: 3
  },
  {
    label: "6 months",
    value: 6
  },
  {
    label: "9 months",
    value: 9
  },
  {
    label: "12 months",
    value: 12
  },
  {
    label: "15 months",
    value: 15
  },
  {
    label: "18 months",
    value: 18
  },
  {
    label: "21 months",
    value: 21
  },
  {
    label: "24 months",
    value: 24
  },
]
export const SIDE_BAR_OPTIONS = [
  {
    id: 1,
    name: "Users",
    icon: FaRegUser,
    route: "/",
  },
  {
    id: 2,
    name: "License Keys Management",
    icon: LuKeySquare,
    route: "/license-keys",
  },
  {
    id: 3,
    name: "Log out",
    icon: IoIosLogOut,
    route: "/login",
  }
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
