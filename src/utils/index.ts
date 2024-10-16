// import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

// to get file from s3
export const createFileFromBlob = (
  blob: any,
  fileName: string,
  fileType: any
) => {
  console.log("createFileFromBlob trigger");
  console.log(blob);
  console.log(fileName);
  console.log(fileType);
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

// **** For toast messages ****
// export const defaultToastOptions: ToastOptions = {
//   position: "top-right",
//   autoClose: 4000,
//   hideProgressBar: true,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "colored",
//   transition: Slide,
// };
// type ToastType = "success" | "error" | "info" | "warning" | "default";
// export const showToast = (
//   type: ToastType,
//   content: ToastContent,
//   options: Partial<ToastOptions> = {}
// ): Id => {
//   const optionsToApply = { ...defaultToastOptions, ...options };
//   switch (type) {
//     case "success":
//       return toast.success(content, optionsToApply);
//     case "error":
//       return toast.error(content, optionsToApply);
//     case "info":
//       return toast.info(content, optionsToApply);
//     case "warning":
//       return toast.warn(content, optionsToApply);
//     case "default":
//       return toast(content, optionsToApply);
//     default:
//       return toast(content, optionsToApply);
//   }
// };

export const getPaginationTotalPages = (
  dataCounts: number,
  pageSize: number
) => {
  return Math.ceil(dataCounts / pageSize);
};
