import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">About</h1>
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
