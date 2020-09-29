import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Buttons from "./components/Buttons";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "./algorithms/Algorithms";

const randomArray = (length, max) =>
  //returns array with integers between 1 and max
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (max - 1)) + 1);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [], speed: 10 };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    //console.log("resetting array");
    this.setState({ numbers: randomArray(50, 100) });
    const grid = document.getElementsByClassName("gridItem");
    if (grid.length > 0) {
      for (let idx = 0; idx < grid.length; idx++) {
        grid[idx].style.backgroundColor = "lightgray";
      }
    }
  }

  startRunning(sortName) {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("disable");
    }
    let selectedButton = document.getElementById(sortName);
    selectedButton.classList.add("btn-selected");
  }

  stopRunning(sortedArray) {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("disable");
      buttons[i].classList.remove("btn-selected");
    }
    this.setState({ numbers: sortedArray });
  }

  bubbleSort() {
    this.startRunning("bubble");
    const {
      array,
      animations,
      swapThisWithNext,
      sortedAnimations,
      counter,
    } = bubbleSort([...this.state.numbers]);
    //console.log(array);
    swapThisWithNext.map((el) => {
      // el is a list [index of the element to swap with the next one, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        let temp_height = grid[el[0]].style.height;
        grid[el[0]].style.height = grid[el[0] + 1].style.height;
        grid[el[0] + 1].style.height = temp_height;
      }, el[1] * this.state.speed);
    });
    animations.map((el) => {
      // el is a list [index of the element to animate with the next one, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "red";
        //  grid[el[0] + 1].style.backgroundColor = "red";
      }, el[1] * this.state.speed);

      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "#D4C7D4";
        //  grid[el[0] + 1].style.backgroundColor = "#D4C7D4";
      }, (el[1] + 1) * this.state.speed);
    });

    sortedAnimations.map((el) => {
      // el is a list [index of the element to animate, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "purple";
      }, el[1] * this.state.speed);
    });

    setTimeout(() => {
      this.stopRunning(array);
    }, counter * this.state.speed);
  }

  selectionSort() {
    this.startRunning("selection");
    const {
      array,
      animations,
      swapElements,
      sortedAnimations,
      counter,
    } = selectionSort([...this.state.numbers]);
    //console.log(array);
    swapElements.map((el) => {
      // el is a list [index of the 1st element to swap, index of the 2nd element to swap, integer signifying when to animate]
      setTimeout(() => {
        //console.log(el[0], el[1]);
        const grid = document.getElementsByClassName("gridItem");
        let temp_height = grid[el[0]].style.height;
        grid[el[0]].style.height = grid[el[1]].style.height;
        grid[el[1]].style.height = temp_height;
      }, el[2] * this.state.speed);
    });
    animations.map((el) => {
      // el is a list [index of the element to animate with the next one, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "red";
        grid[el[1]].style.backgroundColor = "blue";
      }, el[2] * this.state.speed);

      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "#D4C7D4";
        grid[el[1]].style.backgroundColor = "#D4C7D4";
      }, (el[2] + 1) * this.state.speed);
    });

    sortedAnimations.map((el) => {
      // el is a list [index of the element to animate, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "purple";
      }, el[1] * this.state.speed);
    });

    setTimeout(() => {
      this.stopRunning(array);
    }, counter * this.state.speed);
  }

  insertionSort() {
    this.startRunning("insertion");
    const {
      array,
      animations,
      swapElements,
      sortedAnimations,
      counter,
    } = insertionSort([...this.state.numbers]);

    //console.log(array);
    swapElements.map((el) => {
      // el is a list [index of the 1st element to swap, index of the 2nd element to swap, integer signifying when to animate]
      setTimeout(() => {
        //console.log(el[0], el[1]);
        const grid = document.getElementsByClassName("gridItem");
        let temp_height = grid[el[0]].style.height;
        grid[el[0]].style.height = grid[el[1]].style.height;
        grid[el[1]].style.height = temp_height;
      }, el[2] * this.state.speed);
    });
    animations.map((el) => {
      // el is a list [index of the element to animate with the next one, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "red";
        grid[el[1]].style.backgroundColor = "blue";
      }, el[2] * this.state.speed);

      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "#D4C7D4";
        grid[el[1]].style.backgroundColor = "#D4C7D4";
      }, (el[2] + 1) * this.state.speed);
    });

    sortedAnimations.map((el) => {
      // el is a list [index of the element to animate, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "purple";
      }, el[1] * this.state.speed);
    });

    setTimeout(() => {
      this.stopRunning(array);
    }, counter * this.state.speed);
  }

  mergeSort() {
    this.startRunning("merge");
    const {
      array,
      animations,
      eraseColors,
      sortedAnimations,
      counter,
    } = mergeSort([...this.state.numbers]);

    animations.map((el) => {
      // el is a list [index of the element, to what value to change the height to, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.height = `calc(0.6*${el[1]}vh)`;
        grid[el[0]].style.backgroundColor = "red";
      }, el[2] * this.state.speed * 2);
    });
    eraseColors.map((el) => {
      // el is a list of numbers telling when to remove all colors
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        for (let idx = 0; idx < array.length; idx++) {
          grid[idx].style.backgroundColor = "#D4C7D4";
        }
      }, el * this.state.speed * 2);
    });
    sortedAnimations.map((el) => {
      // el is a list [idex of the element, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "purple";
      }, el[1] * this.state.speed * 2);
    });

    setTimeout(() => {
      this.stopRunning(array);
    }, counter * this.state.speed * 2);

    //console.log(array, animations, eraseColors, sortedAnimations, counter);
  }

  quickSort() {
    this.startRunning("quick");
    const {
      array,
      animations,
      swapElements,
      sortedAnimations,
      counter,
    } = quickSort([...this.state.numbers]);
    //console.log(sortedAnimations);

    animations.map((el) => {
      // el is a list [index of the element to animate with the next one, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "red";
        grid[el[1]].style.backgroundColor = "blue";
      }, el[2] * this.state.speed * 3);
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "#D4C7D4";
        grid[el[1]].style.backgroundColor = "#D4C7D4";
      }, (el[2] + 1) * this.state.speed * 3);
    });

    swapElements.map((el) => {
      // el is a list [index of the 1st element to swap, index of the 2nd element to swap, integer signifying when to animate]
      setTimeout(() => {
        //console.log(el[0], el[1]);
        const grid = document.getElementsByClassName("gridItem");
        let temp_height = grid[el[0]].style.height;
        grid[el[0]].style.height = grid[el[1]].style.height;
        grid[el[1]].style.height = temp_height;
      }, el[2] * this.state.speed * 3);
    });

    sortedAnimations.map((el) => {
      // el is a list [idex of the element, integer signifying when to animate]
      setTimeout(() => {
        const grid = document.getElementsByClassName("gridItem");
        grid[el[0]].style.backgroundColor = "purple";
      }, el[1] * this.state.speed * 3);
    });

    setTimeout(() => {
      this.stopRunning(array);
    }, counter * this.state.speed * 3);

    //console.log(array, animations, swapElements, counter);
  }
  render() {
    return (
      <div className="container">
        <h1>Sorting Visualiser</h1>
        <Grid numbers={this.state.numbers} />
        <Buttons
          handleReset={() => this.resetArray()}
          handleBubbleSort={() => this.bubbleSort()}
          handleSelectionSort={() => this.selectionSort()}
          handleInsertionSort={() => this.insertionSort()}
          handleMergeSort={() => this.mergeSort()}
          handleQuickSort={() => this.quickSort()}
        />
      </div>
    );
  }
}

export default App;
