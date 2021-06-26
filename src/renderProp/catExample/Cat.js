import React from "react";
import classes from "./Cat.module.css";

// https://thumbs.gfycat.com/AccurateAgreeableDairycow-max-1mb.gif
class Cat extends React.Component {
  render() {
    const coord = this.props.coordMouse;
    return (
      <img
        src={this.props.src}
        alt="bat"
        style={{
          left: coord.x,
          top: coord.y,
        }}
        className={classes.cat}
      ></img>
    );
  }
}

export default Cat;
