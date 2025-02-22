import React from "react";
import Card from "./Card";
import HotTake from "./HotTake";

// Define the teams array with their win/loss ratios
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

// Sort the teams by win percentage in descending order
const sortedTeams = teams.sort(
  (a, b) => calculateWinPercentage(b.ratio) - calculateWinPercentage(a.ratio)
);

const HotStreakInfo: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Teams on a Hot Streak
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
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
