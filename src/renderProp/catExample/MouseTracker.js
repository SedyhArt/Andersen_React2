import React from "react";
import MouseWithCat from "./MouseWithCat";
import Cat from "./Cat";

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Перемещайте курсор мыши!</h1>
        <MouseWithCat
          render={(mouse) => {
            return (
              <Cat
                coordMouse={mouse}
                src={
                  "https://thumbs.gfycat.com/AccurateAgreeableDairycow-max-1mb.gif"
                }
              />
            );
          }}
        />
        <MouseWithCat
          render={() => {
            return (
              <Cat
                coordMouse={{x: 100, y: 800}}
                src={
                  "https://img.pngio.com/walking-animation-by-blackrozepetal-cat-png-gif-png-transparent-download-cat-png-gif-2469_1893.gif"
                }
              />
            );
          }}
        />
      </>
    );
  }
}

export default MouseTracker;
