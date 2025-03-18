import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(65); 
  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: "#6a0dad",
          pathColor: "#6a0dad",
          trailColor: "#d6d6d6",
          strokeLinecap: "round", 
        })}
      />
    </div>
  );
};

export default ProgressBar;
