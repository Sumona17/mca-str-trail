import React, { useRef, useState } from "react";
import { Progress } from "antd";
import FileUploadIcon from "../../../assets/images/upload.png";

export default function FileUploadContainer({ onFileUpload, onUploadComplete }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileList, setFileList] = useState([]); 
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files) => {
    setFileList(files); 
    if (onFileUpload) onFileUpload(files);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploading(true);
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        setUploadProgress(100);
        if (onUploadComplete) onUploadComplete(); 
      }
    }, 150);
  };

  return (
    <div>
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        style={{
          border: "2px dashed #999",
          borderRadius: "8px",
          padding: "40px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: dragActive ? "#f0f8ff" : "#ffffff",
          transition: "0.2s ease",
        }}
      >
        <input
          type="file"
          multiple
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <div>
          <img
            src={FileUploadIcon}
            alt="Upload Icon"
            style={{ width: "48px", height: "48px", marginBottom: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#333" }}>
            Drag and drop files here, or click{" "}
            <span style={{ color: "#007bff", textDecoration: "underline" }}>
              here
            </span>{" "}
            to browse your computer
          </p>
        </div>
      </div>

      {uploading && (
        <div style={{ marginTop: "20px" }}>
          <h4>Uploading file...</h4>
          <Progress percent={uploadProgress} status="active" />
        </div>
      )}

    
      {fileList.length > 0 && !uploading && (
        <ul style={{ marginTop: "20px" }}>
          {fileList.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
