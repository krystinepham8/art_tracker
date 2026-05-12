import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Stats";;
import "./App.css";

function App() {
  const [sketch, setSketch] = useState(0);
  const [lineArt, setLineArt] = useState(0);
  const [coloring, setColoring] = useState(0);
  const [finished, setFinished] = useState(0);

  const incrementSketch = () => {
    setSketch(sketch + 1);
  };

  const incrementLineArt = () => {
    setLineArt(lineArt + 1);
  };

  const incrementColoring = () => {
    setColoring(coloring + 1);
  };

  const incrementFinished = () => {
    setFinished(finished + 1);
  };

  const total = sketch + lineArt + coloring + finished;

  return (
    <div className="app">
      <h1>Sketchbook Progress Tracker</h1>

      <p>
        Track how many digital art pieces are in each stage of your creative
        process.
      </p>

      <div className="button-container">
        <Button handleClick={incrementSketch} text="Add Sketch" />
        <Button handleClick={incrementLineArt} text="Add Line Art" />
        <Button handleClick={incrementColoring} text="Add Coloring" />
        <Button handleClick={incrementFinished} text="Add Finished Piece" />
      </div>

      {total === 0 ? (
        <p className="no-data">No art progress collected yet.</p>
      ) : (
        <Statistics
          sketch={sketch}
          lineArt={lineArt}
          coloring={coloring}
          finished={finished}
        />
      )}
    </div>
  );
}

export default App;