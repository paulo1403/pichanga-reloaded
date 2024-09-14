import baloncito from "../assets/people/BALON.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center">
      <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
        Pichanga Deluxe
      </h1>
      <img src={baloncito} alt="React Logo" className="h-32 mt-8" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => navigate("/about")}
      >
        Wa chismear
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => navigate("/exit")}
      >
        Alamos, mongol
      </button>
    </div>
  );
};

export default Home;
