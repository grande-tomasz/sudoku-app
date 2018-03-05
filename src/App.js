import React, { Component } from "react";
import sudoku from "sudoku-umd";

import styles from "./App.css";

import Board from "./Board";

class App extends Component {
  constructor(props) {
    super(props);
    const initialBoard = sudoku.generate("hard");
    this.state = {
      initialBoard: initialBoard,
      board: initialBoard
    };
  }

  newGame() {
    const newBoard = sudoku.generate("hard");
    this.setState({
      initialBoard: newBoard,
      board: newBoard
    });
  }
  restartGame() {
    this.setState({
      board: this.state.initialBoard
    });
  }
  checkGame() {
    if (sudoku.solve(this.state.board)) {
      alert("So far so good!");
    } else {
      alert("Please correct your mistakes or restart the game");
    }
  }
  solveGame() {
    if (sudoku.solve(this.state.board)) {      
      this.setState({
        board: sudoku.solve(this.state.board)
      });
    } else {
      alert("Please correct your mistakes or restart the game");
    }
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
    console.log(this.state.board);
    return (
      <div className={styles.App}>
        <h1 className={styles.Sudoku}>Sudoku</h1>
        <div className={styles.Buttons}>
          <button 
            className={styles.Button+" "+styles.New}
            onClick={(e) => this.newGame(e)}
          >New Game</button>
          <button 
            className={styles.Button+" "+styles.Restart}
            onClick={(e) => this.restartGame(e)}
          >Restart</button>
          <button 
            className={styles.Button+" "+styles.Check}
            onClick={(e) => this.checkGame(e)}
          >Check</button>
          <button 
            className={styles.Button+" "+styles.Solve}
            onClick={(e) => this.solveGame(e)}
          >Solve</button>
        </div>
        <Board 
          initialBoard={this.state.initialBoard.split("")}
          board={this.state.board.split("")}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

}

export default App;
