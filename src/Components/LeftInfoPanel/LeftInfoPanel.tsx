import React from "react";
import { PanelContainer, InfoPanel, InfoPanelCol, TextPanelCol } from "./LeftInfoPanel.styled";
import { InfoPanelText } from "./InfoPanelText";

interface LeftInfoPanelProps {
  iteration: number;
  comparedElements: number[];
  swapElements: boolean;
  timeComplexity: string;
}

const LeftInfoPanel: React.FC<LeftInfoPanelProps> = ({ iteration, comparedElements, swapElements, timeComplexity }) => {
  return (
    <PanelContainer>
      <InfoPanel>
        <TextPanelCol>{InfoPanelText.TIME_COMPLEXITY}</TextPanelCol>
        <InfoPanelCol>{timeComplexity}</InfoPanelCol>
      </InfoPanel>
      <InfoPanel>
        <TextPanelCol>{InfoPanelText.ITERATION}</TextPanelCol>
        <InfoPanelCol>{iteration}</InfoPanelCol>
      </InfoPanel>
      <InfoPanel>
        <TextPanelCol>{InfoPanelText.COMPARED_ELEMENTS}</TextPanelCol>
        {comparedElements.map((element, index) => (
          <InfoPanelCol key={index}>{element}</InfoPanelCol>
        ))}
      </InfoPanel>
      <InfoPanel>
        <TextPanelCol>{InfoPanelText.SWAP_ELEMENTS}</TextPanelCol>
        <InfoPanelCol>{swapElements ? 'Yes' : 'No'}</InfoPanelCol>
      </InfoPanel>
    </PanelContainer>
  );
};

export default LeftInfoPanel;
