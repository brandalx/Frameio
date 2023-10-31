import React, { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setfile] = useState<File[]>([]);
  const [fileUrl, setfileUrl] = useState("");
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      // Do something with the files
      // setfileUrl(acceptedFiles);
      console.log(acceptedFiles);
      setfile(acceptedFiles);
      fieldChange(acceptedFiles);
      setfileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [fileUrl]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ",jpeg", ".jpg"],
    },
  });
  return (
    <div
      {...getRootProps()}
      //   className="flex flex-center bg-dark-3  rounded-xl cursor-pointer  "
      className={
        isDragActive
          ? "flex transition-all flex-center bg-dark-4  rounded-xl cursor-pointer "
          : "flex flex-center transition-all bg-dark-3  rounded-xl cursor-pointer "
      }
    >
      <input {...getInputProps()} className="cursor-pointer " />
      {fileUrl ? (
        <div>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img src={fileUrl} alt="image" className="file_uploader-img" />
          </div>
          <p className="file_uploader-label"> Click or drag photo to replace</p>
        </div>
      ) : (
        <div className="file_uploader-box ">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="file-upload"
          />
          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag photo here
          </h3>
          <p className="text-light-4 small-regular mb-6">PNG, JPEG, JPG</p>
          <Button className="shad-button_dark_4">Select image</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
