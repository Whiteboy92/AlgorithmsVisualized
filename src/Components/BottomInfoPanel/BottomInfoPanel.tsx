import React from 'react';
import { AlgorithmInfoPanel, TextPanel, TextPanelRow } from './BottomInfoPanel.styled';
import { AlgorithmsInfo } from '../../Constraints/AlgorithmsInfo'; // Import AlgorithmsInfo

interface RightInfoPanelProps {
  algorithm: keyof typeof AlgorithmsInfo;
}

const RightInfoPanel: React.FC<RightInfoPanelProps> = ({ algorithm }) => {
  const { title, steps } = AlgorithmsInfo[algorithm];

  return (
    <AlgorithmInfoPanel>
      <TextPanel>
        <TextPanelRow>{`${title} Steps Explanation:`}</TextPanelRow>
        {steps.map((step, index) => (
          <TextPanelRow key={index}>{step}</TextPanelRow>
        ))}
      </TextPanel>
    </AlgorithmInfoPanel>
  );
};

export default RightInfoPanel;
