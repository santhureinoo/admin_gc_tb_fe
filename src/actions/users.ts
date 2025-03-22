import { fetchWrapper } from "@/helper/fetchWrapper";

export const getAllUsers = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/users/get-users-list",
    payload
  );
  return await {
    users: response?.data?.users,
    totalCount: response?.data?.totalCount,
  };
};

export const getUserById = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/users/get-user-by-id",
    payload
  );

  return await response?.data;
};

export const getRedemmedListByUserId = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/license/get-license-list-by-user",
    payload
  );

  return await response?.data;
};

export const uploadUserCSV = async (payload: any) => {
  const { companyName, userRole, period, formData } = payload;
  const response: any = await fetchWrapper.UPLOAD_CSV({
    url: `${process.env.NEXT_PUBLIC_API_URL}csv/upload?companyName=${companyName}&role=${userRole}&period=${period}`,
    file: formData,
  });
  return await response?.data;
};
