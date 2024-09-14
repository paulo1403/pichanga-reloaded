import React from "react";

interface CardProps {
  name: string;
  nickname: string;
  pic: string;
  position: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    endurance: number;
    weight: number;
    physical: number;
  };
  abilities: string[];
}

const Card: React.FC<CardProps> = ({
  name,
  nickname,
  pic,
  position,
  stats,
  abilities,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={pic}
        alt={`${name} picture`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-base italic mb-2">{nickname}</p>
        <p className="text-gray-600 text-base mb-4">Posición: {position}</p>
        <div className="mt-4">
          <h3 className="font-bold text-gray-700">Stats:</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-600 text-left">
            <div>Ataque: {stats.attack}</div>
            <div>Defensa: {stats.defense}</div>
            <div>Vel: {stats.speed}</div>
            <div>Resistencia: {stats.endurance}</div>
            <div>Peso: {stats.weight}</div>
            <div>Fisico: {stats.physical}</div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-gray-700">Habilidades:</h3>
          <div className="flex flex-wrap gap-2">
            {abilities.map((ability, index) => (
              <span
                key={index}
                className="inline-block bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {ability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
