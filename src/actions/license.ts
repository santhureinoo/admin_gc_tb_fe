import { fetchWrapper } from "@/helper/fetchWrapper";

export type GenerateLicenseKeysReq = {
  companyName: string,
  role: string,
  period: number,
  totalKeys: number
}
export type GetLicenseKeyListByCompanyReq = {
  companyId: number,
  search: string,
  currentPage: number,
  pageSize: number,
  isRedeemed: boolean
}
export type GetCompanyDetailReq = {
  id: number,
}
export type GetLicenseKeyFilterReq = {
  period?: number | null,
  role?: string | null,
  search: string,
  createdDate: {
      startDate?: Date | null, // dd/mm/yyyy format
      endDate?: Date | null    // dd/mm/yyyy format
  },
  currentPage: number,
  pageSize: number
}

export const generateLicenseKeys = async (payload: GenerateLicenseKeysReq) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/license/generate-license-keys",
    payload
  );
  return await response?.data;
};
export const getCompanyList = async (payload: GetLicenseKeyFilterReq) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/license/get-company-list",
    payload
  );
  return await response?.data;
};
export const getCompanyDetail = async (payload: GetCompanyDetailReq) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/license/get-company",
    payload
  );
  return await response?.data;
};
export const getLicenseKeyListByCompany = async (payload: GetLicenseKeyListByCompanyReq) => {
  const response: any = await fetchWrapper.POST(
    false,
    "admin/view/license/get-license-list-by-company",
    payload
  );
  return await response?.data;
};

