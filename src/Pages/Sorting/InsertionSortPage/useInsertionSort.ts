import { useEffect, useState } from 'react';

type StepSnapshot = {
  sortedNumbers: number[];
  highlightedIndices: number[];
  comparedNumbers: number[];
  swapElements: boolean;
  currentComparisonIndex: number;
  sortedIndices: number[];
  currentLoop: number;
};

type UseInsertionSortReturnType = {
  inputValue: string;
  setInputValue: (value: string) => void;
  numbers: number[];
  sortedNumbers: number[];
  currentIteration: number;
  currentComparisonIndex: number;
  highlightedIndices: number[];
  sortedIndices: number[];
  comparedNumbers: number[];
  swapElements: boolean;
  iterationCount: number;
  disableButton: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnterPress: () => void;
  nextIteration: () => void;
  resetSorting: () => void;
  previousIteration: () => void;
  skipToSorted: () => void;
};

const useInsertionSort = (): UseInsertionSortReturnType => {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState<number[]>([]);
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [loopCount, setCurrentLoopCount] = useState(0);
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);
  const [highlightedIndices, setHighlightComparedIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [savedArray, setSavedArray] = useState<number[]>([]);
  const [comparedNumbers, setComparedNumbersValues] = useState<number[]>([]);
  const [swapElements, setSwapElements] = useState<boolean>(false);
  const [skip, setSkip] = useState<boolean>(false);
  const [endSkipping, setEndSkipping] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState(false);
  const [iterationCount, setIterationCount] = useState(0);
  const [stepSnapshots, setStepSnapshots] = useState<StepSnapshot[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const skipToSorted = async () => {
      setSkip(true);
  };

  useEffect(() =>  setComparedNumbersValues([0, 0]),[])
  
  useEffect(() => {if(skip && !endSkipping) {
    setDisableButton(true);
    setTimeout(() => nextIteration(), 125);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }}, [skip, iterationCount, endSkipping]);
  
  const handleEnterPress = () => {
    try {
      const parsedNumbers = inputValue
        .split(',')
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num))
        .slice(0, 15);

      if (parsedNumbers.length < 2) {
        alert('Please enter at least two numbers.');
        return;
      }

      setSavedArray(parsedNumbers); // Save parsed numbers to savedArray
      setArray(parsedNumbers);
      setArrayToSort([...parsedNumbers]);
      setCurrentLoopCount(0);
      setCurrentComparisonIndex(0);
      setIterationCount(0);

      if (parsedNumbers.length > 1) {
        setHighlightComparedIndices([0, 1]);
        setComparedNumbersValues([parsedNumbers[0], parsedNumbers[1]]);
        setSwapElements(parsedNumbers[0] > parsedNumbers[1]);
      } else {
        setHighlightComparedIndices([]);
      }

      setSortedIndices([]);
      setStepSnapshots([{ sortedIndices: [], 
        currentComparisonIndex,
        sortedNumbers: [...parsedNumbers], 
        highlightedIndices, 
        comparedNumbers, 
        swapElements, 
        currentLoop: 0,
      }]);
    } catch (error) {
      console.error('Error parsing input or setting state:', error);
    }
  };

  const resetSorting = () => {
    if (savedArray.length > 0) {
      setArray(savedArray); // Restore savedArray when resetting
      setArrayToSort([...savedArray]);
      setCurrentLoopCount(0);
      setCurrentComparisonIndex(0);
      setIterationCount(0);
      setComparedNumbersValues([savedArray[0], savedArray[1]]);
      setSwapElements(savedArray[0] > savedArray[1]);
      setHighlightComparedIndices([0, 1]);
      setSortedIndices([]);

      setStepSnapshots([{ sortedIndices: [],
                          currentComparisonIndex: 0,
                          sortedNumbers: savedArray,
                          highlightedIndices: [],
                          comparedNumbers,
                          swapElements,
                          currentLoop: 0,
                        }]);
      console.log('Reset to saved array:', savedArray); // Print saved array when resetting
    } else {
      console.warn('No saved array to reset to.');
    }
  };
  
  const nextIteration = () => {
    if (loopCount >= arrayToSort.length) {
      setSortedIndices([...Array(arrayToSort.length).keys()]);
      setHighlightComparedIndices([]);
      setSkip(false);
      setComparedNumbersValues([0, 0]);
      setDisableButton(false);
      return;
    }
  
    setEndSkipping(true);
  
    let comparisonIndex = currentComparisonIndex;
    let loop = loopCount;
  
    if (comparisonIndex >= 0 && arrayToSort[comparisonIndex] > arrayToSort[comparisonIndex + 1]) {
      [arrayToSort[comparisonIndex], arrayToSort[comparisonIndex + 1]] = [
        arrayToSort[comparisonIndex + 1],
        arrayToSort[comparisonIndex],
      ];
      setSwapElements(true);
      comparisonIndex--;
    } else {
      setSwapElements(false);
      comparisonIndex = loop + 1;
      loop++;
    }
  
    let newSortedIndices = [];
    if (comparisonIndex === loop) {
      newSortedIndices = Array.from({ length: loop }, (_, i) => i);
      setSortedIndices(newSortedIndices);
    }

    if (comparisonIndex < 0) {
      comparisonIndex = loop;
    }
  
    setCurrentComparisonIndex(comparisonIndex);
    setCurrentLoopCount(loop);
    setHighlightComparedIndices([comparisonIndex, comparisonIndex + 1]);
    setComparedNumbersValues([arrayToSort[comparisonIndex], arrayToSort[comparisonIndex + 1]]);
  
    // Update the step snapshots
    setStepSnapshots((prevSnapshots) => [
      ...prevSnapshots,
      {
        sortedNumbers: [...arrayToSort],
        highlightedIndices: [comparisonIndex, comparisonIndex + 1],
        comparedNumbers: [arrayToSort[comparisonIndex], arrayToSort[comparisonIndex + 1]],
        swapElements,
        currentLoop: loop,
        currentComparisonIndex: comparisonIndex,
        sortedIndices: loop < arrayToSort.length ? sortedIndices : [...Array(arrayToSort.length).keys()],
      },
    ]);
  
    // Update the iteration count
    setIterationCount((prev) => prev + 1);
  
    // Check if sorting is done
    if (loop >= arrayToSort.length) {
      setSortedIndices([...Array(arrayToSort.length).keys()]);
      setHighlightComparedIndices([]);
      setSkip(false);
      setComparedNumbersValues([0, 0]);
      setDisableButton(false);
    }
  
    setEndSkipping(false);
    setDisableButton(false);
  };
  
  
  const previousIteration = () => {
    if (iterationCount <= 1) {
      resetSorting();
      return;
    }

    // Retrieve the previous snapshot
    const previousSnapshot = stepSnapshots[iterationCount - 1];
    const {
      sortedNumbers: prevSortedNumbers,
      highlightedIndices: prevHighlightedIndices,
      comparedNumbers: prevComparedNumbers,
      swapElements: prevSwapElements,
      currentComparisonIndex: prevCurrentComparisonIndex,
      sortedIndices: prevSortedIndices,
      currentLoop: prevCurrentLoop,
    } = previousSnapshot;

    // Restore previous state
    setArrayToSort(prevSortedNumbers);
    setHighlightComparedIndices(prevHighlightedIndices);
    setComparedNumbersValues(prevComparedNumbers);
    setSwapElements(prevSwapElements);
    setCurrentComparisonIndex(prevCurrentComparisonIndex);
    setIterationCount(iterationCount - 1);
    setSortedIndices(prevSortedIndices);
    setCurrentLoopCount(prevCurrentLoop);
  };

  return {
    inputValue,
    numbers: array,
    sortedNumbers: arrayToSort,
    currentIteration: loopCount,
    currentComparisonIndex,
    highlightedIndices,
    sortedIndices,
    comparedNumbers,
    swapElements,
    iterationCount,
    disableButton,
    setInputValue,
    handleInputChange,
    handleEnterPress,
    nextIteration,
    resetSorting,
    previousIteration,
    skipToSorted,
  };
};

export default useInsertionSort;
