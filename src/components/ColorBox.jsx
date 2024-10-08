import { useState } from "react";
export default function colorBox({ colors }) {
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  return (
    <div>
      <div
        onClick={() =>
          setRandomColor(colors[Math.floor(Math.random() * colors.length)])
        }
        className="colorBox"
        style={{
          backgroundColor: randomColor,
          width: "50px",
          height: "50px",
        }}
      ></div>
    </div>
  );
}
