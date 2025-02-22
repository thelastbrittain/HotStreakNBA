import React from "react";
import "./HotTake.css";

const HotTake: React.FC = () => {
  const hotTakeText =
    "The Oklahoma City Thunder are emerging as a dark horse in the Western Conference, with their young core and elite defense poised to shake up the playoffs.";

  return (
    <div className="hot-take">
      <h2 className="hot-take-header">
        Here is ChatGPT’s hot take regarding the NBA season:
      </h2>
      <p className="hot-take-text">{hotTakeText}</p>
    </div>
  );
};

export default HotTake;
