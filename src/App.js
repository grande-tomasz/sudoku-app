import React, { Component } from "react";

import styles from "./App.css";

import Board from "./Board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: "",
      board: ""
    };    
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Sudoku</h1>
        <Board />
        <div className="buttons">
          <button>Check</button>
          <button>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
        </div>
      </div>
    );
  }

}

export default App;
