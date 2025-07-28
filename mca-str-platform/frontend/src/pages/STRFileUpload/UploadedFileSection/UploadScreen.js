import React, { useEffect, useState } from "react";
import { Progress, Card } from "antd";
import { Container } from "styles/components/Layout";
import textractOutput from "./Test_Case1_aa_page2-8_results.json";
import DataExtractionScreen from "./ExtractedData";

const UploadScreen = ({ uploadedFile, onBack }) => {
  const fileName = uploadedFile?.name || "Uploaded_File.pdf";
  const [progress, setProgress] = useState(0);
  const [extractedData, setExtractedData] = useState(null);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);

      if (p >= 100) {
        clearInterval(interval);
        storePDFInfo();

        if (uploadedFile?.name) {
          setExtractedData(textractOutput);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const storePDFInfo = () => {
    if (uploadedFile) {
      try {
        window.uploadedFileInfo = {
          name: uploadedFile.name,
          size: uploadedFile.size,
          type: uploadedFile.type
        };
      } catch (error) {
        console.error('Error storing PDF info:', error);
      }
    }
  };

  const getValueByAlias = (aliasKey) => {
    return extractedData?.find(item => item.alias === aliasKey)?.text || '—';
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Container>
        <Card>
          <h2 style={{ color: "#000", fontWeight: 600, marginBottom: 16 }}>
            STR <span>File Upload</span>
          </h2>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", border: "1px solid #ccc", borderRadius: "6px", marginBottom: 16 }}>
            <span style={{ fontWeight: 600 }}>{fileName}</span>
            <div style={{ flex: 1, margin: "0 16px" }}>
              <Progress
                percent={progress}
                showInfo={false}
                strokeColor="#1890ff"
                status={progress === 100 ? "success" : "active"}
              />
            </div>
            <span style={{ color: "black", fontWeight: 500 }}>{progress}%</span>
          </div>

          {progress < 100 ? (
            <p style={{ fontWeight: 500, color: "#000", marginBottom: 24 }}>
              Uploading... Please wait.
            </p>
          ) : (
            <>
              <b style={{ fontWeight: 600, color: "#000", marginBottom: 24 }}>
                Success! Your file has been identified from the master documents inventory, associated with an active plan and no data anomalies were found.
              </b>
              <p style={{ marginBottom: 16, fontWeight: 500 }}>
                <b> Please review the key information from the document before committing the data to the plan documents inventory.</b>
              </p>

              {extractedData && (
                <div style={{ border: "1px solid #ccc", borderRadius: "4px", overflow: "hidden" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      <tr style={separatorRowStyle}><td colSpan={3}></td></tr>
                      <tr>
                        <td style={firstColStyle}>Employer Name:</td>
                        <td style={cellStyle}>{getValueByAlias("employer_name")}</td>
                        <td style={cellStyle}>{getValueByAlias("plan_plan_number")}</td>
                      </tr>
                      <tr>
                        <td style={firstColStyle}>Plan Name:</td>
                        <td style={cellStyle}>{getValueByAlias("plan_plan_name")}</td>
                        <td style={cellStyle}></td>
                      </tr>
                      <tr>
                        <td style={firstColStyle}>Trust EIN:</td>
                        <td style={cellStyle}>{getValueByAlias("plan_trust_ein")}</td>
                        <td style={cellStyle}></td>
                      </tr>
                      <tr style={separatorRowStyle}><td colSpan={3}></td></tr>
                      <tr>
                        <td style={firstColStyle}>Signature Date:</td>
                        <td style={cellStyle}>{getValueByAlias("effective_dates_initial_effective_date_of_plan_value")}</td>
                        <td style={cellStyle}></td>
                      </tr>
                      <tr>
                        <td style={firstColStyle}>Effective Date:</td>
                        <td style={cellStyle}>{getValueByAlias("effective_dates_restatement_effective_date_value")}</td>
                        <td style={cellStyle}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </Card>

        {progress === 100 && (
          <div style={{ marginTop: '20px' }}>
            <DataExtractionScreen
              uploadedFile={uploadedFile}
              uploadedFileName={fileName}
              extractedData={extractedData}
              onBack={onBack}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

const separatorRowStyle = {
  background: "#a2a28a",
  height: "34px",
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  fontSize: "14px",
  background: "#f9f9f9",
};

const firstColStyle = {
  ...cellStyle,
  background: "#d6d6ce",
  fontWeight: "bold",
};

export default UploadScreen;
