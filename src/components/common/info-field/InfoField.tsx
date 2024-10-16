import { getS3DownloadUrls } from "@/actions/aws";
import { createFileFromBlob } from "@/utils";
import axios from "axios";
import React from "react";

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

    const fileName = response?.fileDetails[0]?.originalFilename;

    const s3ImageResponse = await axios(response?.fileDetails[0]?.s3Url);

    const fileResponse = createFileFromBlob(
      s3ImageResponse?.data,
      fileName,
      s3FileType
    );

    handleDownload(fileResponse, s3FileType);
  };

  const handleDownload = (file: any, fileType: any) => {
    const reader = new FileReader();

    // When the file reading is done
    reader.onload = () => {
      // Create a blob from the file data
      const blob = new Blob([file], { type: fileType });

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name; // Set the filename

      // Append link to the body and trigger download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    };

    // Read the file as an array buffer
    reader.readAsArrayBuffer(file);
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
          className="flex  items-center justify-between font-[500] bg-neutralGrey200 px-[20px] py-[10px] rounded-md text-black max-w-[300px]"
        >
          {value} <span className="font-[400] text-neutralGrey600">525KB</span>
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
