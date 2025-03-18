import { fetchWrapper } from "@/helper/fetchWrapper";

type GenerateLicenseKeysReq = {
  companyName: string,
  role: string,
  period: number,
  totalKeys: number
}
export const getApplications = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/application/get-dashboard-applications",
    payload
  );

  return await response?.data?.applications;
};

export const getDashboarSummary = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/application/get-dashboard-summary",
    payload
  );

  return await response?.data;
};

export const updateApplicationsStatus = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/application/update-application-status",
    payload
  );
  return await response?.data;
};


export const getApplicationDetails = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/application/get-application-details",
    payload
  );
  return await response?.data;
};

export const setMissingApplicationInfo = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/application/set-missing-info",
    payload
  );

  return await response?.data;
};
