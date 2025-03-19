import { fetchWrapper } from "@/helper/fetchWrapper";

export const login = async (payload: any) => {
  const response: any = await fetchWrapper.POST(true, "auth/login", payload);

  return await response?.data;
};

export const checkMail = async (payload: any) => {
  const response: any = await fetchWrapper.POST(true, "auth/reset-pass-mail", payload);

  return await response?.data;
}

export const verifyOTP = async (payload: any) => {
  const response: any = await fetchWrapper.POST(true, "auth/verify-otp", payload);

  return await response?.data;
}

export const resendOTP = async (payload: any) => {
  const response: any = await fetchWrapper.POST(true, "auth/resend-otp", payload);

  return await response?.data;
}

export const resetPassword = async (payload: any) => {
  const response: any = await fetchWrapper.POST(true, "auth/reset-password", payload);
  
  return await response?.data;
}