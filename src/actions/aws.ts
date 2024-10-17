import { fetchWrapper } from "@/helper/fetchWrapper";

export const getS3DownloadUrls = async (payload: any) => {
  const response: any = await fetchWrapper.POST(
    true,
    "file/getS3DownloadUrls",
    payload
  );
  return await response?.data;
};
