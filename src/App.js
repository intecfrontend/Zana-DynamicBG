import React, { useEffect } from "react";
import "./App.css";
import Benny from "./BeneComp"

function App() {
  useEffect(() => {
    const background = document.getElementById("background");
    const gradientSize = 50;

    const handleMouseMove = (e) => {
      const gradientCenter = {
        x: e.clientX,
        y: e.clientY,
      };
      const gradientPosition = {
        x:
          ((gradientCenter.x - window.innerWidth / 2) / window.innerWidth) *
          gradientSize,
        y:
          ((gradientCenter.y - window.innerHeight / 2) / window.innerHeight) *
          gradientSize,
      };
      background.style.backgroundPosition = `${50 - gradientPosition.x}% ${50 - gradientPosition.y
        }%`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="background"></div>
      <div className="circles-container">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <h1>Welcome to my website!</h1>

      <Benny />

    </>
  );
}

export default App;