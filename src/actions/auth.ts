import { fetchWrapper } from "@/helper/fetchWrapper";

export const login = async (payload: any) => {
  const response: any = await fetchWrapper.POST(true, "auth/login", payload);

  return await response?.data;
};
