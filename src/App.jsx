import "./App.css";
import ColorBox from "./components/ColorBox";
import colors from "./data/data";
function App() {
  return (
    <div>
      <h1>WELCOME</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "250px",
          height: "250px",
          padding: "25px",
          backgroundColor: "black",
        }}
      >
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
      </div>
      <h3>Have a Wonderful Day 😊</h3>
    </div>
  );
}

export default App;
