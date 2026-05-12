import StatisticLine from "./StatsLine";

function Statistics({ sketch, lineArt, coloring, finished }) {
  const total = sketch + lineArt + coloring + finished;

  return (
    <div className="statistics">
      <h2>Sketchbook Statistics</h2>

      <StatisticLine label="Sketches" value={sketch} />
      <StatisticLine label="Line Art" value={lineArt} />
      <StatisticLine label="Coloring" value={coloring} />
      <StatisticLine label="Finished Pieces" value={finished} />
      <StatisticLine label="Total Art Entries" value={total} />
    </div>
  );
}

export default Statistics;