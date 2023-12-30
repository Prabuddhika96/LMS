import React, { useState } from "react";
import { message, Upload, Progress } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import BlueSubText from "../Text/BlueSubText";
import { convertBytes } from "../../utils/functions";

const { Dragger } = Upload;

function AntDDragUpload({
  text,
  subText,
  episodes,
  setEpisodes,
  accepted,
  uploadProgress,
  setUploadProgress,
  uploading,
  setUploading,
}) {
  // const [uploadProgress, setUploadProgress] = useState<number>(0);
  // const [uploading, setUploading] = useState<boolean>(false);

  const props = {
    name: "file",
    multiple: true,
    showUploadList: false,
    accept: accepted === "video" ? "video/*" : "", // Allow only video files
    beforeUpload: (file) => {
      if (!uploading) {
        setUploading(true);
        // const episodeSizeInMB = file.size / (1024 * 1024); // Convert bytes to megabytes
        const formattedSize = convertBytes(file.size); // Round to 2 decimal places
        const episodeInfo = {
          episodeSize: formattedSize,
          episodeName: file.name,
          status: "uploading",
          file: file,
        };
        setEpisodes([...episodes, episodeInfo]);
        return true;
      }
      return false;
    },
    customRequest({ onSuccess, file, onProgress }) {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 5;
          onProgress({ percent: newProgress }, file);
          if (newProgress >= 100) {
            clearInterval(interval);
            onSuccess();
            const updatedEpisodes = episodes.map((episode) =>
              episode.episodeName === file.name
                ? { ...episode, status: "done" }
                : episode
            );
            setEpisodes(updatedEpisodes);
            message.success(`${file.name} file uploaded successfully.`);
            setUploading(false);
            setUploadProgress(0);
          }
          return newProgress;
        });
      }, 500);
    },
  };

  return (
    <Dragger {...props}>
      <div className="flex items-center justify-center gap-2">
        <AiOutlinePlus className="text-xl text-[#7b9db4]" />
        <p className="text-xl text-white">{text}</p>
      </div>
      <BlueSubText text={subText} className={"text-center w-full"} />
      {/* {uploading && <Progress percent={uploadProgress} status="active" />} */}
    </Dragger>
  );
}

export default AntDDragUpload;
