import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Card from "../components/Card";
import characters from "../utils/people";
import sonido from "../assets/people/sonido.mp3";

const About = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Jugadorazos</h1>
      <audio ref={audioRef} src={sonido} controls autoPlay className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <Card
            key={index}
            name={character.name}
            nickname={character.nickname}
            position={character.position}
            pic={character.pic}
            stats={character.stats}
            abilities={character.abilities}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => navigate("/")}
      >
        Regresar
      </button>
    </div>
  );
};

export default About;
