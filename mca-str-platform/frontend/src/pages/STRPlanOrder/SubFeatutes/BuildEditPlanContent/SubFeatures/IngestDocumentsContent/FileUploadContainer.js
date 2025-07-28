import React, { useRef, useState } from "react";
import { Progress } from "antd";
import FileUploadIcon from "assets/images/file-upload-icon.png";
import GreenTick from "assets/svg/greentick.svg";
import DefaultPopupModal from "components/PopupModal";
import {
  ApplicationButton,
  IngestDocumentsDiv,
} from "styles/pages/STRPlanOrder";
import { supportedFormats } from "./data";
import {
  noOfDataElementsPulled,
  totalDataElements,
} from "../ProvideMissingDataContent/data";

export default function FileUploadContainer() {
  const inputRef = useRef(null);

  const [dragActive, setDragActive] = useState(false);
  const [browsing, setBrowsing] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileUploadSuccessModal, setFileUploadSuccessModal] = useState(false);
  const [fileUploadStatusText, setFileUploadStatusText] = useState("");

  // -------------------- Drag and Drop Handling --------------------
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!browsing) {
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!browsing) {
      setDragActive(false);
      const files = e.dataTransfer.files;
      handleFileInputChange(Array.from(files));
    }
  };

  // -------------------- File Input Handling --------------------
  const handleBrowseClick = () => {
    setBrowsing(true);
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    setBrowsing(false);
    if (e.target.files) {
      handleFileInputChange(Array.from(e.target.files));
    }
  };

  const handleFileInputChange = (files) => {
    setFileList(files);
    simulateUpload();
  };

  // -------------------- Simulate Upload --------------------
  const simulateUpload = () => {
    setUploading(true);
    setUploadProgress(0);
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      setFileUploadStatusText("Uploading Files. Please wait...");

      if (progress >= 100) {
        clearInterval(interval);
        setFileUploadStatusText("Uploaded Files");
        setUploading(false);
        setUploadProgress(0);

        setFileUploadSuccessModal(true);
      }
    }, 200);
  };

  // -------------------- Modal Contents --------------------
  const fileUploadingModalContent = (
    <div style={{ padding: "10px 0", marginTop: "10px" }}>
      <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>
        {fileUploadStatusText}
      </h4>
      {fileList.map((file, index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "6px 12px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <span>{file.name}</span>
            <span style={{ color: "#999", fontSize: "12px" }}>
              {(file.size / 1024).toFixed(1)} KB
            </span>
          </div>
          <Progress percent={uploadProgress} status="active" showInfo={false} />
        </div>
      ))}
    </div>
  );

  const fileUploadSuccessModalContent = (
    <div style={{ paddingTop: "10px" }}>
      <p style={{ fontSize: "15px", marginBottom: "20px" }}>
        <strong style={{ fontWeight: "600" }}>{fileList.length}</strong>{" "}
        documents have been uploaded and processed.
        <br />
        From these documents,{" "}
        <strong>
          {noOfDataElementsPulled} of {totalDataElements}
        </strong>{" "}
        total data elements have been pulled into the plan order.
      </p>

      {fileList.map((file, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "6px 12px",
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <span>{file.name}</span>
            <span
              style={{
                fontSize: "12px",
                color: "#999",
                cursor: "pointer",
              }}
            >
              ✕
            </span>
          </div>
          <Progress percent={100} status="normal" showInfo={false} />
        </div>
      ))}

      <ApplicationButton
        style={{
          width: "100%",
          marginTop: "20px",
          backgroundColor: "#72B5F8",
          color: "#fff",
          fontWeight: 500,
        }}
        onClick={() => setFileUploadSuccessModal(false)}
      >
        Ok
      </ApplicationButton>
    </div>
  );

  // -------------------- JSX --------------------
  return (
    <>
      <IngestDocumentsDiv
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
        className={dragActive ? "dragActive" : ""}
        style={{
          marginTop: "9%",
          border: "2px dashed rgb(15, 124, 219)",
          justifyContent: "center",
          textAlign: "center",
          cursor: "pointer",
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

        <div style={{ marginTop: "5%" }}>
          <img
            src={FileUploadIcon}
            alt="Upload Icon"
            style={{
              width: "68.78px",
              height: "58.59px",
              marginBottom: "10px",
            }}
          />
          <p style={{ color: "#676767" }}>
            <strong
              style={{ fontSize: "15px", color: "#333", display: "block" }}
            >
              Drag and drop files, or{" "}
              <span
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  fontSize: "15px",
                }}
              >
                Browse
              </span>
            </strong>
            Supported formats: {supportedFormats?.join(", ")}
          </p>
        </div>
      </IngestDocumentsDiv>

      {uploading && (
        <DefaultPopupModal
          open={uploading}
          content={fileUploadingModalContent}
        />
      )}

      {fileUploadSuccessModal && (
        <DefaultPopupModal
          open={fileUploadSuccessModal}
          onCancel={() => setFileUploadSuccessModal(false)}
          content={fileUploadSuccessModalContent}
          icon={GreenTick}
        />
      )}
    </>
  );
}
