export const AlgorithmsInfo = {
    BUBBLE_SORT: {
      title: "Bubble Sort",
      steps: [
        "Traverse from left and compare adjacent elements. The higher one is placed at the right side.",
        "Repeat the process to move the largest element to the rightmost end.",
        "Continue until the data is sorted.",
      ],
    },
    SELECTION_SORT: {
      title: "Selection Sort",
      steps: [
        "Find the smallest element in the unsorted array.",
        "Swap it with the leftmost unsorted element.",
        "Move the boundary of the unsorted subarray one element to the right.",
        "Repeat until the entire array is sorted.",
      ],
    },
    INSERTION_SORT: {
      title: "Insertion Sort",
      steps: [
        "Iterate through the list, starting from the second element, and compare it with the elements before it.",
        "If smaller element found by decrementing indexes, swap it with current one .",
        "then shift all larger elements one index to the right.",
        "This process repeats for each element in the list until the entire list is sorted.",
      ],
    },
  };
  