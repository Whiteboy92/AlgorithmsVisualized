import React from 'react';

import Header from '../../../Components/Header/Header';
import InputField from '../../../Components/InputField/InputField';
import LeftInfoPanel from '../../../Components/LeftInfoPanel/LeftInfoPanel';
import BottomInfoPanel from '../../../Components/BottomInfoPanel/BottomInfoPanel';
import SortingDisplay from './BubbleSortComponents/SortingDisplay';
import { GlobalStyles } from '../../../Components/GlobalStyles';
import useBubbleSort from './useBubbleSort';
import { Time_Complexity } from '../../../Constraints/Time_Complexity';
import { Placeholders } from '../../../Constraints/Placeholders';


import {
  BottomPanel,
  LeftPanel,
  Page,
  MainContent,
  ArrayDisplay,
} from './BubbleSort.styled';

const BubbleSort: React.FC = () => {
  const {
    inputValue,
    sortedNumbers,
    highlightedIndices,
    sortedIndices,
    iterationCount,
    comparedNumbers,
    swapElements,
    disableButton,
    handleInputChange,
    handleEnterPress,
    nextIteration,
    resetSorting,
    previousIteration,
    skipToSorted,
  } = useBubbleSort();

  return (
    <>
      <GlobalStyles /> {/* Apply global styles */}
      <Page>
        <Header 
          disableButton={disableButton} 
          onNextIteration={nextIteration} 
          onReset={resetSorting} 
          onPreviousIteration={previousIteration} 
          onSkipToSorted={skipToSorted} 
        />
        <InputField
          placeholder={Placeholders.Placeholder.inputFieldText}
          value={inputValue}
          onChange={handleInputChange}
          onEnterPress={handleEnterPress}
        />
        <MainContent>
          <LeftPanel>
            <LeftInfoPanel 
              iteration={iterationCount} 
              comparedElements={comparedNumbers} 
              swapElements={swapElements} 
              timeComplexity={Time_Complexity.BUBBLE_SORT.timeComplexity} // Use renamed constant
            />
          </LeftPanel>
          <ArrayDisplay>
            <SortingDisplay
              numbers={sortedNumbers}
              highlightedIndices={highlightedIndices}
              sortedIndices={sortedIndices}
            />
          </ArrayDisplay>
        </MainContent>
        <BottomPanel>
          <BottomInfoPanel algorithm="BUBBLE_SORT" />
        </BottomPanel>
      </Page>
    </>
  );
};

export default BubbleSort;