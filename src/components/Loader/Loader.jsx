import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextProgress;
      });
    }, 30); // Скорость увеличения прогресса

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-wrapper">
      <div
        className="loader-line"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Loader;
