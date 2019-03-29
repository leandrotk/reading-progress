import React, { useState, useEffect } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  const getPercentageScroll = () => {
    return (
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100.0
    );
  };

  const updateReadingProgress = () => {
    const scrollPercentage = getPercentageScroll();
    setProgress(scrollPercentage);
  };

  useEffect(() => {
    updateReadingProgress();
    window.addEventListener("scroll", updateReadingProgress);
  });

  return <div className="reading-progress" style={{ width: `${progress}%` }} />;
};

export default ReadingProgress;
