import { fetchWrapper } from "@/helper/fetchWrapper";

export const getApplications = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    true,
    "admin/application/get-dashboard-applications",
    payload
  );

  return await response?.data?.applications;
};

export const getDashboarSummary = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    true,
    "admin/application/get-dashboard-summary",
    payload
  );

  return await response?.data;
};
