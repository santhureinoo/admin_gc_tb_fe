import { getS3DownloadUrls } from "@/actions/aws";
import { createFileFromBlob } from "@/utils";
import axios from "axios";
import React, { useState } from "react";

type infoFieldPropsTypes = {
  title: string;
  value: string;
  isRequired?: boolean;
  isFile?: boolean;
  userId?: string;
  s3FileKey?: string;
  s3FileType?: string;
};

function InfoField({
  title,
  value,
  isRequired,
  isFile,
  userId,
  s3FileKey,
  s3FileType,
}: infoFieldPropsTypes) {
  const [fileSize, setFileSize] = useState<any>();

  const fetchS3DownloadUrls = async () => {
    const response = await getS3DownloadUrls({
      userId: userId,
      fileDetails: [
        {
          s3FileKey: s3FileKey, // FileName,if upload, s3FileKey, if download
          fileType: s3FileType,
        },
      ],
    });

    const s3Url = response?.fileDetails[0]?.s3Url;
    const fileName = response?.fileDetails[0]?.originalFilename;

    handleDownload(s3Url, fileName, s3FileType as string);
  };

  const handleDownload = (
    s3Url: string,
    fileName: string,
    fileType: string
  ) => {
    fetch(s3Url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // const fileData = createFileFromBlob(response, fileName, fileType);
        // console.log("*** file data ***", fileData);
        return response.blob(); // Fetches the file as a blob
      })
      .then((blob) => {
        const fileSizeInKB = Math.round(blob.size / 1024);
        setFileSize(fileSizeInKB);

        const finalFileName = fileName + fileType;
        // Create URL for the blob
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = finalFileName; // Set the correct file name and extension

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  const renderText = () => {
    if (isFile && value == undefined + "." + undefined) {
      return (
        <p className="flex  items-center justify-between font-[500] bg-neutralGrey200 px-[20px] py-[10px] rounded-md text-black max-w-[300px]">
          Not found
        </p>
      );
    }

    if (isFile) {
      return (
        <p
          onClick={fetchS3DownloadUrls}
          className="flex items-center justify-between font-[500] bg-neutralGrey200 px-[20px] py-[10px] rounded-md text-black max-w-[300px] cursor-pointer"
        >
          {value}{" "}
          <span className="font-[400] text-neutralGrey600 text-nowrap">
            {fileSize ? fileSize + "KB" : ""}
          </span>
        </p>
      );
    }

    if (!isFile) {
      return <p className="font-[500] text-neutralGrey800">{value}</p>;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="font-[500] text-neutralGrey600">
        {title} {isRequired ? <span className="text-red-500">*</span> : ""}
      </p>
      {renderText()}
      {/* {isFile ? (
        <p className="flex  items-center justify-between font-[500] bg-neutralGrey200 px-[20px] py-[10px] rounded-md text-black max-w-[300px]">
          {value} <span className="font-[400] text-neutralGrey600">525KB</span>
        </p>
      ) : (
        <p className="font-[500] text-neutralGrey800">{value}</p>
      )} */}
    </div>
  );
}

export default InfoField;
