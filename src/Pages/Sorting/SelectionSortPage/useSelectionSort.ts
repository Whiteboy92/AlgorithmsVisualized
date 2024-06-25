import { useEffect, useState } from 'react';

type StepSnapshot = {
  sortedNumbers: number[];
  highlightedIndices: number[];
  comparedNumbers: number[];
  swapElements: boolean;
  currentComparisonIndex: number;
  sortedIndices: number[];
  currentLoop: number;
  minIndex: number;
};

type UseSelectionSortReturnType = {
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

const useSelectionSort = (): UseSelectionSortReturnType => {
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
  const [currentMinIndex, setCurrentMinIndex] = useState(0);
  const [stepSnapshots, setStepSnapshots] = useState<StepSnapshot[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const skipToSorted = async () => {
    setSkip(true);
  };

  useEffect(() => setComparedNumbersValues([0, 0]), []);

  useEffect(() => {
    if (skip && !endSkipping) {
      setDisableButton(true);
      setTimeout(() => nextIteration(), 125);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, iterationCount, endSkipping]);

  const handleEnterPress = () => {
    try {
      const parsedNumbers = inputValue
        .split(',')
        .map((num) => parseInt(num.trim(), 10))
        .filter((num) => !isNaN(num))
        .slice(0, 15);

      if (parsedNumbers.length < 2) {
        alert('Please enter at least two numbers.');
        return;
      }

      setSavedArray(parsedNumbers);
      setArray(parsedNumbers);
      setArrayToSort([...parsedNumbers]);
      setCurrentLoopCount(0);
      setCurrentComparisonIndex(0);
      setIterationCount(0);
      setCurrentMinIndex(0);

      if (parsedNumbers.length > 1) {
        setHighlightComparedIndices([0, 1]);
        setComparedNumbersValues([parsedNumbers[0], parsedNumbers[1]]);
        setSwapElements(parsedNumbers[0] > parsedNumbers[1]);
      } else {
        setHighlightComparedIndices([]);
      }

      setSortedIndices([]);
      setStepSnapshots([
        {
          sortedIndices: [],
          currentComparisonIndex: 0,
          sortedNumbers: [...parsedNumbers],
          highlightedIndices: [],
          comparedNumbers: [parsedNumbers[0], parsedNumbers[1]],
          swapElements: parsedNumbers[0] > parsedNumbers[1],
          currentLoop: 0,
          minIndex: 0,
        },
      ]);
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
      setCurrentComparisonIndex(0);
      setSortedIndices([]);
      setCurrentMinIndex(0);

      setStepSnapshots([
        {
          sortedIndices: [],
          currentComparisonIndex: 0,
          sortedNumbers: savedArray,
          highlightedIndices: [],
          comparedNumbers: [savedArray[0], savedArray[1]],
          swapElements: savedArray[0] > savedArray[1],
          currentLoop: 0,
          minIndex: 0,
        },
      ]);
      console.log('Reset to saved array:', savedArray); // Print saved array when resetting
    } else {
      console.warn('No saved array to reset to.');
    }
  };

  const nextIteration = () => {
    if (loopCount >= arrayToSort.length - 1) { return; }

    setEndSkipping(true);

    let comparisonIndex = currentComparisonIndex;
    let loop = loopCount;
    let minIndex = currentMinIndex;

    // Highlight the current indices being compared
    setHighlightComparedIndices([minIndex, comparisonIndex + 1]);
    setComparedNumbersValues([arrayToSort[minIndex], arrayToSort[comparisonIndex + 1]]);
    setSwapElements(arrayToSort[minIndex] > arrayToSort[comparisonIndex + 1]);

    // Compare and update minIndex
    if (arrayToSort[minIndex] >= arrayToSort[comparisonIndex + 1]) {
      minIndex = comparisonIndex + 1;
      setCurrentMinIndex(minIndex);
      setHighlightComparedIndices([minIndex, comparisonIndex + 2]);
      setComparedNumbersValues([arrayToSort[minIndex], arrayToSort[comparisonIndex + 2]]);
      setSwapElements(arrayToSort[minIndex] >= arrayToSort[comparisonIndex + 2]);
    }

    setStepSnapshots((prevSnapshots) => [
      ...prevSnapshots, 
      {
        sortedNumbers: [...arrayToSort],
        highlightedIndices: [...highlightedIndices],
        comparedNumbers: [...comparedNumbers],
        swapElements,
        currentLoop: loop,
        currentComparisonIndex: comparisonIndex,
        sortedIndices: sortedIndices,
        minIndex: minIndex,
      }
    ]);

    // Update the comparison index
    setIterationCount((prev) => prev + 1);
    comparisonIndex++;
    setSwapElements(arrayToSort[minIndex] >= arrayToSort[comparisonIndex + 1]);
    setHighlightComparedIndices([minIndex, comparisonIndex + 1]);
    setComparedNumbersValues([arrayToSort[minIndex], arrayToSort[comparisonIndex + 1]]);

    setCurrentComparisonIndex(comparisonIndex);

    // If we reached the end of the inner loop, perform the swap
    if (comparisonIndex >= arrayToSort.length - 1) {
      if (minIndex !== loop) {
        [arrayToSort[loop], arrayToSort[minIndex]] = [
          arrayToSort[minIndex],
          arrayToSort[loop],
        ];
      }

      // Move to the next iteration of the outer loop
      loop++;
      setCurrentLoopCount(loop);
      minIndex = loop;
      setCurrentMinIndex(minIndex);
      setCurrentComparisonIndex(loop);

      setHighlightComparedIndices([minIndex, minIndex + 1]);
      setComparedNumbersValues([arrayToSort[minIndex], arrayToSort[minIndex + 1]]);
      setSwapElements(arrayToSort[minIndex] >= arrayToSort[minIndex + 1]);

      // Update the sorted indices
      setSortedIndices((prev) => [...prev, loop - 1]);

      // Check if sorting is done
      if (loop === arrayToSort.length - 1) {
        setSortedIndices([...Array(arrayToSort.length).keys()]);
        setHighlightComparedIndices([]);
        setSkip(false);
        setComparedNumbersValues([0,0]);
      }

      setStepSnapshots((prevSnapshots) => [
        ...prevSnapshots, 
        {
          sortedNumbers: [...arrayToSort],
          highlightedIndices: [...highlightedIndices],
          comparedNumbers: [...comparedNumbers],
          swapElements,
          currentLoop: loop,
          currentComparisonIndex: comparisonIndex,
          sortedIndices: sortedIndices,
          minIndex: minIndex,
        }
      ]);

      setEndSkipping(false);
      setDisableButton(false);
    }
    
    // Update the iteration count
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
    if (!previousSnapshot) {
      console.warn('No previous snapshot found.');
      return;
    }
    
    const {
      sortedNumbers: prevSortedNumbers,
      highlightedIndices: prevHighlightedIndices,
      comparedNumbers: prevComparedNumbers,
      swapElements: prevSwapElements,
      currentComparisonIndex: prevCurrentComparisonIndex,
      sortedIndices: prevSortedIndices,
      currentLoop: prevCurrentLoop,
      minIndex: prevMinIndex,
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
    setCurrentMinIndex(prevMinIndex);
  };

  return {
    inputValue,
    setInputValue,
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
    handleInputChange,
    handleEnterPress,
    nextIteration,
    resetSorting,
    previousIteration,
    skipToSorted,
  };
};

export default useSelectionSort;
