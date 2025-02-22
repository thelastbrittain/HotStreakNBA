import React from "react";
import "./Card.css";

interface CardProps {
  name: string;
  ratio: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, ratio, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={`${name} player`} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p className="card-ratio">Last 10 Games Ratio:</p>
      <p className="card-ratio-value">{ratio}</p>
    </div>
  );
};

export default Card;
