import baloncito from "../assets/people/BALON.webp";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import gemidito from "../assets/people/gemidito.ogg";
import { useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center">
      <ParticlesBackground />
      <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded z-10">
        Pichanga Deluxe
      </h1>
      <img src={baloncito} alt="React Logo" className="h-32 mt-8 z-10" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 z-10"
        onClick={() => navigate("/about")}
      >
        Wa chismear
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8 z-10"
        onClick={() => navigate("/location")}
      >
        Donde juegan
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8 z-10"
        onClick={() => navigate("/exit")}
      >
        Alamos, mongol
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-8 z-10"
        onClick={playAudio}
      >
        Soy sapazo!
      </button>
      <audio ref={audioRef} src={gemidito} />
    </div>
  );
};

export default Home;
