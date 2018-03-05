import React, { Component } from "react";

import Tile from "./Tile";
import styles from "./Board.css";

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
