import React, { Component } from "react";

import styles from "./Tile.css";

const Tile = props => (
  props.disabled == false ? 
    <input
      className={styles.TileEnabled}
      type="number"
      min="0"
      max="9"
      value={props.value === "." ? "" : props.value}
      onChange={e => props.handleChange(props.index, e.target.value)}
    /> :
    <input
      className={styles.TileDisabled}
      type="number"
      min="0"
      max="9"
      value={props.value}
      disabled
    />
);

export default Tile;
