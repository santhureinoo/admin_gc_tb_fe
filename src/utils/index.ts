// import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

import { APPLIED_POSITIONS } from "@/constants";

// to get file from s3
export const createFileFromBlob = (
  blob: any,
  fileName: string,
  fileType: any
) => {
  const file = new File([blob], fileName, { type: fileType });
  return file;
};

export const openModal = (modalId: string) => {
  const element = document.getElementById(modalId) as HTMLDialogElement;
  element.showModal();
};

export const closeModal = (modalId: string) => {
  const element = document.getElementById(modalId) as HTMLDialogElement;
  element.close();
};

export const sortByProperty = (
  array: any,
  property: any,
  isAscending = false,
  sortableType: any
) => {
  const sortedArray = array.sort((a: any, b: any) => {
    let propA = a[property].toLowerCase();
    let propB = b[property].toLowerCase();
    let comparison = propA.localeCompare(propB);

    return isAscending ? comparison * -1 : comparison;
  });

  return sortedArray;
};

export const dateFormat = (dat: string) => {
  const date = new Date(dat);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate ?? "";
};

export async function getEncryptedToken(token: string) {
  return token;
}

export async function getDecryptedAccessToken(token: string) {
  return token;
}

export async function getDecryptedRefreshToken(token: string) {
  return token;
}

export const getPaginationTotalPages = (
  dataCounts: number,
  pageSize: number
) => {
  return Math.ceil(dataCounts / pageSize);
};

// *** this is for to render based on applied position ***
export const isShow = (positions: any, certificateName: string) => {
  const appliedPositions = positions;
  const toFilterPositions = APPLIED_POSITIONS[certificateName];
  const isIncluded = toFilterPositions.some((element: any) =>
    appliedPositions.includes(element)
  );
  return isIncluded;
};
