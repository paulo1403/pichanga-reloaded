import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const About = () => {
  const navigate = useNavigate();

  const character = {
    name: "John Doe",
    nickname: "The Brave",
    pic: "https://www.thesportsdb.com/images/media/player/thumb/9xqjxv1624190974.jpg", // Replace with a valid image URL
    stats: {
      attack: 80,
      defense: 70,
      speed: 90,
    },
    abilities: ["Swordsmanship", "Archery", "Stealth"],
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">About</h1>
      <Card
        name={character.name}
        nickname={character.nickname}
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
