import React, { useEffect } from "react";

import ScoreView, { ComparisonType } from "../gameplay/score/ScoreView.tsx";

const ScoreTestView = () => {
  const [score, setScore] = React.useState(0),
    [rate, setRate] = React.useState(0);
  useEffect(() => {
    setRate(score / 100000);
    if (score >= 10000000) {
      setTimeout(() => {
        setScore(0);
      }, 3000);
    } else {
      const scoreIncrement = Math.floor(500000 + Math.random() * 500000);
      setTimeout(() => {
        setScore(Math.min(score + scoreIncrement, 10000000));
      }, 1000);
    }
  }, [score]);

  return (
    // <div>
    //   <Word letters={[Number9, Number5, Number1]} fill={""} />
    // </div>
    <div className="h-12 w-full">
      <ScoreView
        score={score}
        comparisonType={ComparisonType.PERCENTAGE}
        comparison={rate}
      />
    </div>
  );
};

export default ScoreTestView;
