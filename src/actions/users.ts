import { fetchWrapper } from "@/helper/fetchWrapper";
import axios from "axios";
import { clearInterval } from "timers";

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

  // // Start the interval to check upload status every 2 seconds
  // const statusInterval = setInterval(async () => {
  //   const statusResponse = await getUploadStatus();
  // }, 2000); // 2 seconds interval

  // Upload CSV file using fetchWrapper
  const response: any = await fetchWrapper.UPLOAD_CSV({
    url: `${process.env.NEXT_PUBLIC_API_URL}csv/upload?companyName=${companyName}&role=${userRole}&period=${period}`,
    file: formData,
  });
  // console.log("*** csv uploaded response ***", response?.data);
  // clearInterval(statusInterval); 
  return await response?.data;

};

export const getUploadStatus = async () => {
 console.log("** called **");
 const response = axios.get(`${process.env.NEXT_PUBLIC_API_URL}csv/get-upload-status`)
  .then(response => {
    // Handle success
    console.log('Data received:', response);
  })
  .catch(error => {
    // Handle error
    console.error('Error occurred:', error);
  });
};

