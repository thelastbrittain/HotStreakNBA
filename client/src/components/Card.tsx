import React from "react";

interface CardProps {
  name: string;
  ratio: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, ratio, imageUrl }) => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "white",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src={imageUrl}
        alt={`${name} player`}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h2 style={{ marginTop: "10px", color: "red" }}>{name}</h2>
      <p>Last 10 Games Ratio:</p>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{ratio}</p>
    </div>
  );
};

export default Card;
