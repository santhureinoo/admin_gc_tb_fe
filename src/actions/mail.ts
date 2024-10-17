import { fetchWrapper } from "@/helper/fetchWrapper";

export const sendEmail = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    true,
    "admin/application/send-resubmit-mail",
    payload
  );
  return await response?.data?.applications;
};
