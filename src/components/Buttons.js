import React from "react";
import "./Buttons.css";

const Buttons = ({
  handleReset,
  handleBubbleSort,
  handleSelectionSort,
  handleInsertionSort,
  handleMergeSort,
  handleQuickSort,
}) => {
  return (
    <div className="buttonsPanel">
      <button onClick={handleReset} className="btn resetButon">
        New Array
      </button>
      <button onClick={handleBubbleSort} id="bubble" className="btn">
        Bubble Sort
      </button>
      <button onClick={handleSelectionSort} id="selection" className="btn">
        Selection Sort
      </button>
      <button onClick={handleInsertionSort} id="insertion" className="btn">
        Insertion Sort
      </button>
      <button onClick={handleMergeSort} id="merge" className="btn">
        Merge Sort
      </button>
      <button onClick={handleQuickSort} id="quick" className="btn">
        Quick Sort
      </button>
    </div>
  );
};

export default Buttons;
