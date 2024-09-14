import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const About = () => {
  const navigate = useNavigate();

  const character = {
    name: "Henry Bustos",
    nickname: "Marronsor",
    position: "Defensa, Mediocampista, Arrecho",
    pic: "https://randomuser.me/api/portraits/men/0.jpg",
    stats: {
      attack: 35,
      defense: 44,
      speed: 22,
      endurance: 50,
      weight: 70,
      physical: 75,
    },
    abilities: ["Swordsmanship", "Archery", "Stealth"],
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Jugadorazos</h1>
      <Card
        name={character.name}
        nickname={character.nickname}
        position={character.position}
        pic={character.pic}
        stats={character.stats}
        abilities={character.abilities}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default About;
