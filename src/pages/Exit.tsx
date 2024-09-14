import { useNavigate } from "react-router-dom";
import smashVideo from "../assets/people/smash.mp4";

const Exit = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Vete ps ctm!</h1>
      <video
        width="560"
        height="315"
        controls
        autoPlay
        loop
        muted
        className="mb-8"
      >
        <source src={smashVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Me arrepenti, papi
      </button>
    </div>
  );
};

export default Exit;
