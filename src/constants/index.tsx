import ShowPasswordIcon from "@/assets/icons/show_password_icon.svg";

export const MODALS = {
  rejectModalId: "modal_1",
  approveModalId: "modal_2",
};

export const SIDE_BAR_OPTIONS = [
  {
    id: 1,
    name: "Job Applications",
    icon: ShowPasswordIcon,
    route: "/",
  },
  {
    id: 2,
    name: "Rejected Applications",
    icon: ShowPasswordIcon,
    route: "/rejected-applications",
  },
  {
    id: 3,
    name: "Logout",
    icon: ShowPasswordIcon,
    route: "/login",
  },
];
