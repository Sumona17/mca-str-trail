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
import pdf6 from "assets/files/Test_Case1_aa_page1-10.pdf"
import textractMultiPageData from "./Test_Case1_aa_page2-8_results.json";
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
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [renderedPages, setRenderedPages] = useState(new Map());
  const [isDataExtracting, setIsDataExtracting] = useState(false);
  const [showExtractedData, setShowExtractedData] = useState(false);

  const containerRef = useRef(null);
  const pdfScrollRef = useRef(null);
  const extractedDataScrollRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderTasksRef = useRef(new Map());
  const pagesContainerRef = useRef(null);

  // Higher DPI for better resolution
  const DPI_SCALE = 3;

  const pdfMapping = {
    'TEST CASE 1 V2 - Standardized_401k_Adoption_Agreement - Redracted.pdf': pdf1,
    'TEST CASE 2 V2 - Standardized_401k_Adoption_Agreement - Redracted.pdf': pdf2,
    'TEST CASE 3 V2 - Standardized_401k_Adoption_Agreement - Redracted.pdf': pdf3,
    'aa_page2.pdf': pdf4,
    'Test_Case1_aa_page234.pdf': pdf5,
    'Test_Case1_aa_page1-10.pdf': pdf6
  };

  // Helper function to convert alias to human readable format, removing section words
  const formatAlias = (alias, groupKey) => {
    if (!alias) return '';
    
    const words = alias.split('_');
    const groupWords = groupKey.split('_');
    
    // Remove the words that were used to create the section
    const filteredWords = words.filter((word, index) => {
      // Keep the word if it's not part of the group key or if it's beyond the group key length
      return index >= groupWords.length || word.toLowerCase() !== groupWords[index].toLowerCase();
    });
    
    // If all words were filtered out, return the original alias
    if (filteredWords.length === 0) {
      return alias
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    
    return filteredWords
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Updated helper function to get group key considering second word for similar first words
  const getGroupKey = (alias) => {
    if (!alias) return 'Other';
    
    const words = alias.split('_');
    const firstWord = words[0].toLowerCase();
    
    // Define words that need second word differentiation
    const similarFirstWords = ['elective','excluded'];
    
    if (similarFirstWords.includes(firstWord) && words.length > 1) {
      const secondWord = words[1].toLowerCase();
      return `${firstWord}_${secondWord}`;
    }
    
    return firstWord;
  };

  // Helper function to capitalize group names with multiple words
  const formatGroupName = (groupKey) => {
    return groupKey
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to clean and validate text data
  const cleanText = (text) => {
    if (!text) return "No value";
    
    // Handle special cases like checkboxes and selections
    if (text.includes("[] unselected")) return "[ ] Unselected";
    if (text.includes("[x] selected")) return "[x] selected";
    if (text.includes("[x]")) return "[x]";
    
    // Clean up text and remove excessive whitespace
    return text.trim().replace(/\s+/g, ' ');
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
    renderTasksRef.current.forEach(task => {
      if (task && task.cancel) {
        task.cancel();
      }
    });
    renderTasksRef.current.clear();

    try {
      const currentScale = baseScale * zoomLevel;
      const newRenderedPages = new Map();
      
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const page = await pdfDocRef.current.getPage(pageNum);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext("2d");
        
        // Use higher DPI for better resolution
        const viewport = page.getViewport({ scale: currentScale * DPI_SCALE });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Calculate display dimensions
        const displayWidth = viewport.width / DPI_SCALE;
        const displayHeight = viewport.height / DPI_SCALE;
        
        // Set canvas style for proper display
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;
        canvas.style.display = 'block';
        canvas.style.marginBottom = '10px';
        canvas.style.border = '1px solid #e8e8e8';
        canvas.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        canvas.style.backgroundColor = 'white';
        canvas.dataset.pageNumber = pageNum;

        const renderTask = page.render({ canvasContext: context, viewport });
        renderTasksRef.current.set(pageNum, renderTask);
        
        try {
          await renderTask.promise;
          newRenderedPages.set(pageNum, {
            canvas,
            viewport,
            pageHeight: displayHeight,
            pageWidth: displayWidth,
            displayScale: currentScale
          });
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
        const loadingTask = pdfjsLib.getDocument(currentPdfPath);
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
        // Adjust for container padding (10px on each side)
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
      renderTasksRef.current.forEach(task => {
        if (task && task.cancel) {
          task.cancel();
        }
      });
      renderTasksRef.current.clear();
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
    if (pagesContainerRef.current && renderedPages.size > 0) {
      pagesContainerRef.current.innerHTML = '';
      
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const pageData = renderedPages.get(pageNum);
        if (pageData) {
          pagesContainerRef.current.appendChild(pageData.canvas);
        }
      }
    }
  }, [renderedPages, totalPages]);

  const scrollToHighlight = (bbox, targetPage) => {
    if (!bbox || !pdfScrollRef.current || !renderedPages.has(targetPage)) return;

    const currentScale = baseScale * zoomLevel;
    const pageData = renderedPages.get(targetPage);
    
    if (!pageData) return;

    let cumulativeHeight = 0;
    for (let i = 1; i < targetPage; i++) {
      const prevPageData = renderedPages.get(i);
      if (prevPageData) {
        cumulativeHeight += prevPageData.pageHeight + 20; // 20px margin between pages
      }
    }

    const canvasWidth = naturalPageSize.width * currentScale;
    const canvasHeight = naturalPageSize.height * currentScale;

    const left = bbox.Left * canvasWidth;
    const top = bbox.Top * canvasHeight;
    const boxWidth = bbox.Width * canvasWidth;
    const boxHeight = bbox.Height * canvasHeight;

    const highlightCenterX = left + boxWidth / 2;
    const highlightCenterY = top + boxHeight / 2;
    const absoluteHighlightY = cumulativeHeight + highlightCenterY;

    const scrollContainer = pdfScrollRef.current;
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Account for container padding (10px on each side)
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
    if (!highlightBox || !renderedPages.size || !highlightBox.page) return null;

    const targetPage = highlightBox.page;
    const pageData = renderedPages.get(targetPage);
    
    if (!pageData) return null;

    let cumulativeHeight = 0;
    for (let i = 1; i < targetPage; i++) {
      const prevPageData = renderedPages.get(i);
      if (prevPageData) {
        cumulativeHeight += prevPageData.pageHeight + 10; // 10px margin
      }
    }

    const currentScale = baseScale * zoomLevel;
    const canvasWidth = naturalPageSize.width * currentScale;
    const canvasHeight = naturalPageSize.height * currentScale;

    const left = highlightBox.Left * canvasWidth;
    const top = highlightBox.Top * canvasHeight;
    // Fixed: Use Width for boxWidth calculation instead of Height
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

  const handleClickHighlight = (item, index) => {
    const bbox = item.bounding_box;
    const targetPage = item.page;

    setSelectedItemIndex(index);

    if (bbox && bbox.Width > 0 && bbox.Height > 0) {
      setHighlightBox({...bbox, page: targetPage});
      setTimeout(() => scrollToHighlight(bbox, targetPage), 200);
    } else {
      setHighlightBox(null);
    }
  };

  const renderDataField = (label, value) => {
    const cleanedValue = cleanText(value);
    if (!cleanedValue || cleanedValue === "No value") return null;
    
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
          wordWrap: 'break-word'
        }}>
          {cleanedValue}
        </DataValue>
      </DataRow>
    );
  };

  // Updated function to handle similar first words and maintain page-wise serial order
  const groupDataByFirstWordMaintainOrder = () => {
    const grouped = {};
    const groupOrder = [];
    
    textractMultiPageData.forEach((item, index) => {
      // Skip items with empty bounding boxes or invalid data
      if (!item.bounding_box || (Object.keys(item.bounding_box).length === 0 && item.bounding_box.constructor === Object)) {
        return;
      }
      
      const groupKey = getGroupKey(item.alias);
      
      // Track the order of groups as they appear in JSON
      if (!grouped[groupKey]) {
        grouped[groupKey] = {};
        groupOrder.push(groupKey);
      }
      
      const pageNumber = item.page || 1;
      
      // Group by page within each section
      if (!grouped[groupKey][pageNumber]) {
        grouped[groupKey][pageNumber] = [];
      }
      
      grouped[groupKey][pageNumber].push({ ...item, globalIndex: index });
    });
    
    // Return data in the order groups first appeared in JSON, with pages sorted within each group
    const orderedGroups = {};
    groupOrder.forEach(groupKey => {
      orderedGroups[groupKey] = {};
      // Sort pages numerically within each group
      const sortedPages = Object.keys(grouped[groupKey]).sort((a, b) => parseInt(a) - parseInt(b));
      sortedPages.forEach(page => {
        orderedGroups[groupKey][page] = grouped[groupKey][page];
      });
    });
    
    return orderedGroups;
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

    const groupedData = groupDataByFirstWordMaintainOrder();

    return (
      <ExtractedDataContainer 
        ref={extractedDataScrollRef} 
        className="extracted-data-scroll-container"
      >
        <ExtractedDataContent>
          <SectionCard>
            {Object.entries(groupedData).map(([groupKey, pageData]) => (
              <div key={groupKey}>
                <SectionHeader>{formatGroupName(groupKey)}</SectionHeader>
                {Object.entries(pageData).map(([pageNumber, items]) => (
                  <div key={`${groupKey}-page-${pageNumber}`}>
                    {items.map((item, index) => (
                      <DataItem
                        key={`${groupKey}-page-${pageNumber}-${index}`}
                        data-item-index={item.globalIndex}
                        isSelected={selectedItemIndex === item.globalIndex}
                        onClick={() => handleClickHighlight(item, item.globalIndex)}
                        style={{
                          cursor: 'pointer',
                          padding: '8px 12px',
                          margin: '4px 0',
                          borderRadius: '4px',
                          backgroundColor: selectedItemIndex === item.globalIndex ? '#e6f7ff' : 'transparent',
                          border: selectedItemIndex === item.globalIndex ? '1px solid #1890ff' : '1px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {renderDataField(formatAlias(item.alias, groupKey), item.text)}
                      </DataItem>
                    ))}
                  </div>
                ))}
              </div>
            ))}
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