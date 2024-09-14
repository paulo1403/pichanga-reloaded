import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Location = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeUntilNextSaturday, setTimeUntilNextSaturday] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
      setTimeUntilNextSaturday(getTimeUntilNextSaturday());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeUntilNextSaturday = () => {
    const now = new Date();
    const nextSaturday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + ((6 - now.getDay() + 7) % 7),
      11,
      0,
      0
    );

    const diff = nextSaturday.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Ubicación</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.8376596732202!2d-77.10216924193004!3d-12.071262840523667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c977a6e3c26d%3A0xf168c43ae9ecfbfe!2sAcademia%20de%20F%C3%BAtbol%20Dieka%20-%20Sede%20San%20Miguel!5e1!3m2!1sen!2spe!4v1726279711679!5m2!1sen!2spe"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        allowFullScreen
        className="w-full max-w-4xl h-96 border-0"
      ></iframe>
      <p className="text-white text-lg mt-4">
        Cada Sábado desde las 11 hasta la 1
      </p>
      <p className="text-white text-lg mt-4">
        Fecha actual: {currentDate.toLocaleString()}
      </p>
      <p className="text-white text-lg mt-4">
        Tiempo hasta el próximo sábado a las 11 AM: {timeUntilNextSaturday}
      </p>
      <p className="text-white text-lg mt-4">
        ¡No faltes! Sé puntual para que no te pierdas ni un minuto de la
        pichanga. CTM!
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => navigate(-1)}
      >
        Regresar
      </button>
    </div>
  );
};

export default Location;
