import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import championsImage from "./assets/people/champions.png";

function App() {
  return (
    <div
      className="bg-black text-center min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${championsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
