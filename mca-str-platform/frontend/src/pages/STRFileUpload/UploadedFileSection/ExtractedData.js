import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Col, Button, Spin } from "antd";
import { PlusOutlined, MinusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Container } from "styles/components/Layout";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import pdf1 from "assets/files/TEST CASE 1 V2 - Standardized_401k_Adoption_Agreement - Redacted.pdf";
import pdf2 from "assets/files/TEST CASE 2 V2 - Standardized_401k_Adoption_Agreement - Redacted.pdf";
import pdf3 from "assets/files/TEST CASE 3 V2 - Standardized_401k_Adoption_Agreement - Redacted.pdf";
import pdf4 from "assets/files/aa_page2.pdf";
import pdf5 from "assets/files/Test_Case1_aa_page234.pdf";
import pdf6 from "assets/files/Test_Case1_aa_page1-11.pdf";
import pdf7 from "assets/files/Test_Case2_aa_page1-11.pdf";

import textractMultiPageData from "./Test_Case2_aa_page1-11_anthropic_response.json";
import {
  StyledContainer,
  PDFScrollContainer,
  PDFContainer,
  PDFCanvasWrapper,
  HighlightBox,
  ZoomControls,
  ZoomPercentage,
  ExtractedDataContainer,
  ExtractedDataContent,
  LoadingContainer,
  LoadingText,
  SectionCard,
  SectionHeader,
  DataItem,
  DataRow,
  DataLabel,
  DataValue,
  CardHeaderStyle,
  CardBodyStyle,
  ExtractedDataBodyStyle
} from "./DataExtractionScreen.styles";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const DataExtractionScreen = ({ uploadedFile, uploadedFileName, uploadedFileUrl }) => {
  const [currentPdfPath, setCurrentPdfPath] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [baseScale, setBaseScale] = useState(1);
  const [naturalPageSize, setNaturalPageSize] = useState({ width: 0, height: 0 });
  const [highlightBox, setHighlightBox] = useState(null);
  const [selectedItemKey, setSelectedItemKey] = useState(null);
  const [renderedPages, setRenderedPages] = useState({});
  const [isDataExtracting, setIsDataExtracting] = useState(false);
  const [showExtractedData, setShowExtractedData] = useState(false);

  const containerRef = useRef(null);
  const pdfScrollRef = useRef(null);
  const extractedDataScrollRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderTasksRef = useRef({});
  const pagesContainerRef = useRef(null);

  // Improved DPI for better quality
  const DPI_SCALE = 2;

  const pdfMapping = {
    'TEST CASE 1 V2 - Standardized_401k_Adoption_Agreement - Redracted.pdf': pdf1,
    'TEST CASE 2 V2 - Standardized_401k_Adoption_Agreement - Redracted.pdf': pdf2,
    'TEST CASE 3 V2 - Standardized_401k_Adoption_Agreement - Redracted.pdf': pdf3,
    'aa_page2.pdf': pdf4,
    'Test_Case1_aa_page234.pdf': pdf5,
    'Test_Case1_aa_page1-11.pdf': pdf6,
    'Test_Case2_aa_page1-11.pdf': pdf7,
  };

  // Helper function to format section names
  const formatSectionName = (sectionKey) => {
    return sectionKey
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to format field names
  const formatFieldName = (fieldKey) => {
    return fieldKey
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to get display value based on value and checked properties
  const getDisplayValue = (item) => {
    const hasValue = item.value !== null && item.value !== undefined && item.value !== '';
    const hasChecked = Object.prototype.hasOwnProperty.call(item, 'checked');
    
    let displayValue = '';
    
    // Handle checked status
    if (hasChecked) {
      if (item.checked === true) {
        displayValue = '[X] Selected';
      } else if (item.checked === false) {
        displayValue = '[ ] Unselected';
      }
    }
    
    // Handle value
    if (hasValue) {
      const cleanedValue = cleanText(item.value);
      if (hasChecked) {
        // Both value and checked exist - combine them
        displayValue = `${displayValue} - ${cleanedValue}`;
      } else {
        // Only value exists
        displayValue = cleanedValue;
      }
    }
    
    // If neither value nor checked, return default
    if (!hasValue && !hasChecked) {
      displayValue = "No value";
    }
    
    return displayValue;
  };

  // Helper function to clean and validate text data
  const cleanText = (text) => {
    if (!text) return "No value";
    
    // Handle special cases like checkboxes and selections
    if (text.includes("[] unselected")) return "[ ] Unselected";
    if (text.includes("[x] selected")) return "[x] Selected";
    if (text.includes("[X]")) return "[X] Selected";
    if (text.includes("[ ]")) return "[ ] Unselected";
    
    // Clean up text and remove excessive whitespace
    return text.trim().replace(/\s+/g, ' ');
  };

  // Helper function to check if bounding box is valid for highlighting
  const hasValidBoundingBox = (bbox) => {
    return bbox && 
           typeof bbox === 'object' && 
           (bbox.left !== undefined || bbox.Left !== undefined) && 
           (bbox.top !== undefined || bbox.Top !== undefined) && 
           (bbox.width !== undefined || bbox.Width !== undefined) && 
           (bbox.height !== undefined || bbox.Height !== undefined) &&
           (bbox.width > 0 || bbox.Width > 0) && 
           (bbox.height > 0 || bbox.Height > 0);
  };

  // Normalize bounding box to handle both uppercase and lowercase properties
  const normalizeBoundingBox = (bbox) => {
    if (!bbox) return null;
    
    return {
      Left: bbox.Left || bbox.left || 0,
      Top: bbox.Top || bbox.top || 0,
      Width: bbox.Width || bbox.width || 0,
      Height: bbox.Height || bbox.height || 0
    };
  };

  useEffect(() => {
    if (uploadedFileName && pdfMapping[uploadedFileName]) {
      setCurrentPdfPath(pdfMapping[uploadedFileName]);
    } else if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      setCurrentPdfPath(fileUrl);
    } else if (uploadedFileUrl) {
      setCurrentPdfPath(uploadedFileUrl);
    }

    if (currentPdfPath) {
      setIsDataExtracting(true);
      setShowExtractedData(false);
      setTimeout(() => {
        setIsDataExtracting(false);
        setShowExtractedData(true);
      }, 5000);
    }
  }, [uploadedFileName, uploadedFileUrl, uploadedFile, currentPdfPath]);

  const renderAllPDFPages = async () => {
    if (!pdfDocRef.current || !containerRef.current) return;
    
    // Cancel any existing render tasks
    Object.values(renderTasksRef.current).forEach(task => {
      if (task && task.cancel) {
        task.cancel();
      }
    });
    renderTasksRef.current = {};

    try {
      const currentScale = baseScale * zoomLevel;
      const newRenderedPages = {};
      
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const page = await pdfDocRef.current.getPage(pageNum);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext("2d", { alpha: false });
        
        // Improved viewport calculation for better quality
        const viewport = page.getViewport({ scale: currentScale * DPI_SCALE });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Set white background for better PDF rendering
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Calculate display dimensions
        const displayWidth = viewport.width / DPI_SCALE;
        const displayHeight = viewport.height / DPI_SCALE;
        
        // Improved canvas styling for better quality
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;
        canvas.style.display = 'block';
        canvas.style.marginBottom = '10px';
        canvas.style.border = '1px solid #e8e8e8';
        canvas.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        canvas.style.backgroundColor = 'white';
        canvas.style.imageRendering = 'auto';
        canvas.dataset.pageNumber = pageNum;

        const renderTask = page.render({ 
          canvasContext: context, 
          viewport,
          intent: 'display'
        });
        renderTasksRef.current[pageNum] = renderTask;
        
        try {
          await renderTask.promise;
          newRenderedPages[pageNum] = {
            canvas,
            viewport,
            pageHeight: displayHeight,
            pageWidth: displayWidth,
            displayScale: currentScale
          };
        } catch (error) {
          if (error.name !== 'RenderingCancelledException') {
            console.error(`Error rendering PDF page ${pageNum}:`, error);
          }
        }
      }

      setRenderedPages(newRenderedPages);
    } catch (error) {
      console.error("Error rendering PDF:", error);
    }
  };

  useEffect(() => {
    const loadPdf = async () => {
      if (!currentPdfPath) return;

      try {
        const loadingTask = pdfjsLib.getDocument({
          url: currentPdfPath,
          cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/cmaps/',
          cMapPacked: true,
        });
        const pdf = await loadingTask.promise;
        
        pdfDocRef.current = pdf;
        setTotalPages(pdf.numPages);
        
        const page = await pdf.getPage(1);
        const naturalWidth = page.view[2];
        const naturalHeight = page.view[3];
        setNaturalPageSize({ width: naturalWidth, height: naturalHeight });

        const container = containerRef.current;
        if (!container) return;
        
        const { width: clientWidth } = container.getBoundingClientRect();
        const availableWidth = clientWidth - 20;
        const calculatedBaseScale = availableWidth / naturalWidth;
        setBaseScale(calculatedBaseScale);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPdf();
  }, [currentPdfPath]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !naturalPageSize.width) return;

      const { width: clientWidth } = containerRef.current.getBoundingClientRect();
      const availableWidth = clientWidth - 20;
      const calculatedBaseScale = availableWidth / naturalPageSize.width;
      setBaseScale(calculatedBaseScale);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      Object.values(renderTasksRef.current).forEach(task => {
        if (task && task.cancel) {
          task.cancel();
        }
      });
      renderTasksRef.current = {};
    };
  }, [naturalPageSize.width]);

  useEffect(() => {
    if (baseScale && pdfDocRef.current && totalPages > 0) {
      const timeoutId = setTimeout(() => {
        renderAllPDFPages();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [zoomLevel, baseScale, totalPages]);

  useEffect(() => {
    if (pagesContainerRef.current && Object.keys(renderedPages).length > 0) {
      pagesContainerRef.current.innerHTML = '';
      
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const pageData = renderedPages[pageNum];
        if (pageData) {
          pagesContainerRef.current.appendChild(pageData.canvas);
        }
      }
    }
  }, [renderedPages, totalPages]);

  const scrollToHighlight = (bbox, targetPage) => {
    const normalizedBbox = normalizeBoundingBox(bbox);
    if (!normalizedBbox || !pdfScrollRef.current || !renderedPages[targetPage]) return;

    const currentScale = baseScale * zoomLevel;
    const pageData = renderedPages[targetPage];
    
    if (!pageData) return;

    let cumulativeHeight = 0;
    for (let i = 1; i < targetPage; i++) {
      const prevPageData = renderedPages[i];
      if (prevPageData) {
        cumulativeHeight += prevPageData.pageHeight + 20;
      }
    }

    const canvasWidth = naturalPageSize.width * currentScale;
    const canvasHeight = naturalPageSize.height * currentScale;

    const left = normalizedBbox.Left * canvasWidth;
    const top = normalizedBbox.Top * canvasHeight;
    const boxWidth = normalizedBbox.Width * canvasWidth;
    const boxHeight = normalizedBbox.Height * canvasHeight;

    const highlightCenterX = left + boxWidth / 2;
    const highlightCenterY = top + boxHeight / 2;
    const absoluteHighlightY = cumulativeHeight + highlightCenterY;

    const scrollContainer = pdfScrollRef.current;
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const scrollLeft = Math.max(0, highlightCenterX + 10 - containerWidth / 2);
    const scrollTop = Math.max(0, absoluteHighlightY + 10 - containerHeight / 2);

    scrollContainer.scrollTo({
      left: scrollLeft,
      top: scrollTop,
      behavior: 'smooth'
    });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.25));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const renderHighlightBox = () => {
    if (!highlightBox || Object.keys(renderedPages).length === 0 || !highlightBox.page) return null;

    const targetPage = highlightBox.page;
    const pageData = renderedPages[targetPage];
    
    if (!pageData) return null;

    let cumulativeHeight = 0;
    for (let i = 1; i < targetPage; i++) {
      const prevPageData = renderedPages[i];
      if (prevPageData) {
        cumulativeHeight += prevPageData.pageHeight + 10;
      }
    }

    const currentScale = baseScale * zoomLevel;
    const canvasWidth = naturalPageSize.width * currentScale;
    const canvasHeight = naturalPageSize.height * currentScale;

    const left = highlightBox.Left * canvasWidth;
    const top = highlightBox.Top * canvasHeight;
    const boxWidth = highlightBox.Width * canvasWidth;
    const boxHeight = highlightBox.Height * canvasHeight;
    const absoluteTop = cumulativeHeight + top;

    return (
      <HighlightBox
        style={{
          left: `${left - 4}px`,
          top: `${absoluteTop - 4}px`,
          width: `${boxWidth + 8}px`,
          height: `${boxHeight + 8}px`,
        }}
      />
    );
  };

  const handleClickHighlight = (itemKey, boundingBox, page) => {
    setSelectedItemKey(itemKey);

    const normalizedBbox = normalizeBoundingBox(boundingBox);
    
    if (hasValidBoundingBox(normalizedBbox)) {
      setHighlightBox({...normalizedBbox, page: page});
      setTimeout(() => scrollToHighlight(normalizedBbox, page), 200);
    } else {
      setHighlightBox(null);
    }
  };

  const renderDataField = (label, value, hasHighlight = false) => {
    return (
      <DataRow style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '8px',
        padding: '2px 0'
      }}>
        <DataLabel style={{ 
          flex: '1', 
          fontWeight: 'bold',
          paddingRight: '14px',
          textAlign: 'left',
          minWidth: '0',
          wordWrap: 'break-word'
        }}>
          {label}:
        </DataLabel>
        <DataValue style={{ 
          flex: '1', 
          textAlign: 'left',
          minWidth: '0',
          wordWrap: 'break-word',
          color: hasHighlight ? 'inherit' : '#888'
        }}>
          {value}
        </DataValue>
      </DataRow>
    );
  };

  // Recursive function to render nested data structure
  const renderDataStructure = (data, path = '', page = null) => {
    const items = [];

    Object.entries(data).forEach(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        // Check if this object has direct value, confidence_score, checked, or bounding_box properties
        const hasValue = Object.prototype.hasOwnProperty.call(value, 'value');
        const hasChecked = Object.prototype.hasOwnProperty.call(value, 'checked');
        const hasConfidence = Object.prototype.hasOwnProperty.call(value, 'confidence_score');
        const hasBoundingBox = Object.prototype.hasOwnProperty.call(value, 'bounding_box');
        
        if (hasValue || hasChecked || hasConfidence || hasBoundingBox) {
          // This is a field with metadata
          const hasHighlight = hasValidBoundingBox(value.bounding_box);
          const itemKey = `${page}-${currentPath}`;
          const displayValue = getDisplayValue(value);
          
          items.push(
            <DataItem
              key={itemKey}
              isSelected={selectedItemKey === itemKey}
              onClick={() => handleClickHighlight(itemKey, value.bounding_box, page)}
              style={{
                cursor: hasHighlight ? 'pointer' : 'default',
                padding: '8px 12px',
                margin: '4px 0',
                borderRadius: '4px',
                backgroundColor: selectedItemKey === itemKey ? '#e6f7ff' : 'transparent',
                border: selectedItemKey === itemKey ? '1px solid #1890ff' : '1px solid transparent',
                transition: 'all 0.3s ease',
                opacity: hasHighlight ? 1 : 0.7
              }}
            >
              {renderDataField(formatFieldName(key), displayValue, hasHighlight)}
            </DataItem>
          );
        } else {
          // This is a nested object, render its contents
          items.push(...renderDataStructure(value, currentPath, page));
        }
      }
    });

    return items;
  };

  const renderZoomControls = () => (
    <ZoomControls>
      <Button
        type="text"
        size="small"
        icon={<MinusOutlined />}
        onClick={handleZoomOut}
        disabled={zoomLevel <= 0.25}
        style={{ color: zoomLevel <= 0.25 ? '#bfbfbf' : 'white' }}
        title="Zoom Out"
      />
      <Button
        type="text"
        size="small"
        icon={<ReloadOutlined />}
        onClick={handleResetZoom}
        style={{ color: 'white' }}
        title={`Reset Zoom (${Math.round(zoomLevel * 100)}%)`}
      />
      <Button
        type="text"
        size="small"
        icon={<PlusOutlined />}
        onClick={handleZoomIn}
        disabled={zoomLevel >= 4}
        style={{ color: zoomLevel >= 4 ? '#bfbfbf' : 'white' }}
        title="Zoom In"
      />
      <ZoomPercentage>
        {Math.round(zoomLevel * 100)}%
      </ZoomPercentage>
    </ZoomControls>
  );

  const renderPDFPreview = () => (
    <PDFScrollContainer ref={pdfScrollRef} className="pdf-scroll-container">
      <PDFContainer ref={containerRef}>
        <PDFCanvasWrapper>
          <div ref={pagesContainerRef} />
          {renderHighlightBox()}
        </PDFCanvasWrapper>
      </PDFContainer>
    </PDFScrollContainer>
  );

  const renderExtractedDataContent = () => {
    if (isDataExtracting) {
      return (
        <LoadingContainer>
          <Spin size="large" />
          <LoadingText>Extracting data...</LoadingText>
        </LoadingContainer>
      );
    }

    if (!showExtractedData) {
      return <div />;
    }

    return (
      <ExtractedDataContainer 
        ref={extractedDataScrollRef} 
        className="extracted-data-scroll-container"
      >
        <ExtractedDataContent>
          <SectionCard>
            {textractMultiPageData.map((pageData) => {
              if (!pageData.page) return null;
              
              return (
                <div key={`page-${pageData.page}`}>
                  <SectionHeader style={{ fontSize: '18px', color: '#1890ff', marginBottom: '16px' }}>
                    Page {pageData.page}
                  </SectionHeader>
                  
                  {Object.entries(pageData).map(([sectionKey, sectionData]) => {
                    if (sectionKey === 'page' || !sectionData || typeof sectionData !== 'object') return null;
                    
                    return (
                      <div key={`${pageData.page}-${sectionKey}`} style={{ marginBottom: '24px' }}>
                        <SectionHeader style={{ fontSize: '16px', marginBottom: '12px' }}>
                          {formatSectionName(sectionKey)}
                        </SectionHeader>
                        
                        <div style={{ marginLeft: '16px' }}>
                          {renderDataStructure(sectionData, sectionKey, pageData.page)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </SectionCard>
        </ExtractedDataContent>
      </ExtractedDataContainer>
    );
  };

  return (
    <StyledContainer>
      <Container>
        <Row gutter={20}>
          <Col span={12}>
            <Card
              title="Extracted Data"
              headStyle={CardHeaderStyle}
              bodyStyle={ExtractedDataBodyStyle}
            >
              {renderExtractedDataContent()}
            </Card>
          </Col>

          <Col span={12}>
            <Card
              title="PDF Preview"
              extra={renderZoomControls()}
              headStyle={CardHeaderStyle}
              bodyStyle={CardBodyStyle}
            >
              {renderPDFPreview()}
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default DataExtractionScreen;