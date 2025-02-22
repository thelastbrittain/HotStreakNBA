import React from "react";
import Card from "./Card";
import HotTake from "./HotTake";
import "./HotStreakInfo.css";

// Teams data
const teams = [
  { name: "Team A", ratio: "8-2", imageUrl: "https://via.placeholder.com/150" },
  { name: "Team B", ratio: "7-3", imageUrl: "https://via.placeholder.com/150" },
  { name: "Team C", ratio: "6-4", imageUrl: "https://via.placeholder.com/150" },
  { name: "Team D", ratio: "9-1", imageUrl: "https://via.placeholder.com/150" },
  { name: "Team E", ratio: "8-2", imageUrl: "https://via.placeholder.com/150" },
  { name: "Team F", ratio: "7-3", imageUrl: "https://via.placeholder.com/150" },
];

// Function to calculate win percentage from the ratio
const calculateWinPercentage = (ratio: string): number => {
  const [wins, losses] = ratio.split("-").map(Number);
  return wins / (wins + losses);
};

// Sort teams by win percentage in descending order
const sortedTeams = teams.sort(
  (a, b) => calculateWinPercentage(b.ratio) - calculateWinPercentage(a.ratio)
);

const HotStreakInfo: React.FC = () => {
  return (
    <div className="hot-streak-info">
      <h1 className="hot-streak-title">Teams on a Hot Streak</h1>
      <div className="hot-streak-grid">
        {sortedTeams.map((team, index) => (
          <Card
            key={index}
            name={team.name}
            ratio={team.ratio}
            imageUrl={team.imageUrl}
          />
        ))}
      </div>
      <HotTake />
    </div>
  );
};

export default HotStreakInfo;
