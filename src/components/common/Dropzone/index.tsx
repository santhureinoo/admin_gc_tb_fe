import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const CSVUploader = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"], // Ensures only CSV files are accepted
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    multiple: false, // Allows only one file at a time (optional)
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed p-6 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      <p>Drag & drop a CSV file here, or click to select one</p>
    </div>
  );
};

export default CSVUploader;
