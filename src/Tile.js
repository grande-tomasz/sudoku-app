import React, { Component } from "react";

import styles from "./Tile.css";

const Tile = props => (
  props.disabled == false ? 
    <input
      className={styles.Tile+" "+styles.TileEnabled}
      type="number"
      min="1"
      max="9"
      value={props.value === "." ? "" : props.value}
      onChange={e => props.handleChange(props.index, e.target.value)}
    /> :
    <input
      className={styles.Tile+" "+styles.TileDisabled}
      value={props.value}
      disabled
    />
);

export default Tile;
