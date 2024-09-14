import React from "react";

interface CardProps {
  name: string;
  nickname: string;
  pic: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
  abilities: string[];
}

const Card: React.FC<CardProps> = ({
  name,
  nickname,
  pic,
  stats,
  abilities,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={pic} alt={`${name} picture`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{nickname}</p>
        <div className="mt-4">
          <h3 className="font-bold">Stats:</h3>
          <ul className="list-disc list-inside">
            <li>Attack: {stats.attack}</li>
            <li>Defense: {stats.defense}</li>
            <li>Speed: {stats.speed}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Abilities:</h3>
          <ul className="list-disc list-inside">
            {abilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
