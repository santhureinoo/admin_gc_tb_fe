import { fetchWrapper } from "@/helper/fetchWrapper";

export const getAllUsers = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/users/get-users-list",
    payload
  );
  return await response?.data?.users;
};

export const getUserById = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/users/get-user-by-id",
    payload
  );

  return await response?.data;
};
