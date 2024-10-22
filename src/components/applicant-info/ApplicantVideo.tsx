import React from "react";
import Header from "../common/header";
import InfoField from "../common/info-field";
import { getS3DownloadUrls } from "@/actions/aws";

type ApplicationVideoProps = {
  applicationDetails: any;
};

function ApplicantVideo({ applicationDetails }: ApplicationVideoProps) {
  const fetchS3DownloadUrls = async () => {
    const response = await getS3DownloadUrls({
      userId: applicationDetails?.userId,
      fileDetails: [
        {
          s3FileKey: applicationDetails?.profileVideo?.s3FileKey, // FileName,if upload, s3FileKey, if download
          fileType: applicationDetails?.profileVideo?.fileType,
        },
      ],
    });

    const s3Url = response?.fileDetails[0]?.s3Url;
    const fileName = response?.fileDetails[0]?.originalFilename;

    handleDownload(
      s3Url,
      fileName,
      applicationDetails?.profileVideo?.fileType as string
    );
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
        return response.blob(); // Fetches the file as a blob
      })
      .then((blob) => {
        const finalFileName = fileName;
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

  return (
    <div
      id={"section-a4"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Applicant's Video" />
      <div className="mt-[24px]">
        <div className="flex flex-col gap-2 w-[240px]">
          <p className="font-[500] text-neutralGrey500">Video</p>
          <div
            onClick={fetchS3DownloadUrls}
            className="w-[240px] h-[140px] bg-neutralGrey-grey200 rounded-md cursor-pointer"
          ></div>
          <div className="flex justify-between">
            <p className="font-[500] text-primary-pink600">
              {applicationDetails?.profileVideo?.originalFilename}
            </p>
            <p className="font-[500] text-primary-pink800">525KB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantVideo;
