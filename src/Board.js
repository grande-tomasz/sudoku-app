import React, { Component } from "react";

import styles from "./Board.css";
import Tile from "./Tile";

const Board = props => (
  <div className={styles.Board}>
    {
      props.initialBoard.map((value, index) => {
        let disabled = (value == "." ? false : true);
        return (
          <Tile 
            key={index}
            index={index}
            value={props.board[index]}
            handleChange={props.handleChange}
            disabled={disabled}
          />
        );
      })
    }
  </div>
);

export default Board;
