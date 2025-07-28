import styled from 'styled-components';

export const StyledContainer = styled.div`
  .pdf-scroll-container,
  .extracted-data-scroll-container {
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 6px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    
    &::-webkit-scrollbar-corner {
      background: #f1f1f1;
    }
  }
`;

export const PDFScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #f5f5f5;
  scrollbar-width: auto;
  scrollbar-color: #888 #f1f1f1;
`;

export const PDFContainer = styled.div`
  padding: 10px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: fit-content;
  min-width: 100%;
`;

export const PDFCanvasWrapper = styled.div`
  position: relative;
  display: block;
  width: fit-content;
  min-width: 100%;
`;

export const PDFCanvas = styled.canvas`
  display: block;
  margin-bottom: 10px;
  border: 1px solid #e8e8e8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 100% !important;
  height: auto !important;
`;

export const HighlightBox = styled.div`
  position: absolute;
  border: 2px solid rgba(0, 162, 255, 0.7);
  background-color: rgba(104, 167, 250, 0.2);
  border-radius: 4px;
  box-shadow: 0 0 6px rgba(109, 155, 253, 0.4);
  pointer-events: none;
  z-index: 20;
`;

export const ZoomControls = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ZoomPercentage = styled.div`
  font-size: 11px;
  color: white;
  margin-left: 8px;
  opacity: 0.9;
`;

export const ExtractedDataContainer = styled.div`
  height: 100%;
  overflow: auto;
  scrollbar-width: auto;
  scrollbar-color: #888 #f1f1f1;
`;

export const ExtractedDataContent = styled.div`
  padding: 16px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`;

export const LoadingText = styled.p`
  color: #595959;
  font-size: 14px;
`;

export const SectionCard = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid #e8e8e8;
`;

export const SectionHeader = styled.h4`
  color: black;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 14px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 8px;
  background-color: lightgray;
`;

export const DataItem = styled.div`
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  background-color: ${props => props.isSelected ? '#e6f7ff' : 'transparent'};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isSelected ? '#e6f7ff' : '#f5f5f5'};
  }
`;

export const DataRow = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const DataLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  flex: 0 0 33.33%;
  padding-right: 8px;
`;

export const DataValue = styled.span`
  font-size: 14px;
  color: #595959;
  flex: 1;
`;

export const CardHeaderStyle = {
  background: 'linear-gradient(161.5deg, #065281 -15.49%, #36affb 98.81%)',
  color: '#fff'
};

export const CardBodyStyle = {
  height: '600px',
  padding: 0,
  overflow: 'hidden'
};

export const ExtractedDataBodyStyle = {
  ...CardBodyStyle,
  background: '#fafafa'
};