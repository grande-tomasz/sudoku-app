import React, { Component } from "react";
import sudoku from "sudoku-umd";

import styles from "./App.css";

import Board from "./Board";

const initialBoard = sudoku.generate("easy"); 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: initialBoard,
      board: initialBoard
    };    
  }

  handleChange(index, value) {
    this.setState({
      board:
        this.state.board.slice(0, index) +
        value +
        this.state.board.slice(index + 1)
    });
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Sudoku</h1>
        <Board 
          initialBoard={this.state.initialBoard.split("")}
          board={this.state.board.split("")}
          handleChange={this.handleChange.bind(this)}
        />
        <div className={styles.Buttons}>
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
