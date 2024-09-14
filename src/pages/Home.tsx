import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center">
      <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
        Welcome to Vite + React + Tailwind CSS
      </h1>
      <img src={reactLogo} alt="React Logo" className="h-32 mt-8" />
      <img src={viteLogo} alt="Vite Logo" className="h-32 mt-8" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => navigate("/about")}
      >
        Ir a About
      </button>
    </div>
  );
};

export default Home;
