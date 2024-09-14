import henryPic from "../assets/people/Henrry.jpg";
import luchoPic from "../assets/people/Luhco.jpg";
import gustavoPic from "../assets/people/Gordazo.jpg";
import percyPic from "../assets/people/Percy.jpg";
import omarPic from "../assets/people/Omar.jpg";
import walterPic from "../assets/people/WALTER.jpg";

const characters = [
  {
    name: "Henry Bustos",
    nickname: "Marronsor",
    position: "Defensa, Mediocampista, Arrecho",
    pic: henryPic,
    stats: {
      attack: 35,
      defense: 44,
      speed: 22,
      endurance: 50,
      weight: 70,
      physical: 75,
    },
    abilities: ["Pisao", "Tragon", "Bajito", "CPP"],
  },
  {
    name: "Luis Vasquez",
    nickname: "Cathriel",
    position: "Delantero, Mediocampista, Arquero",
    pic: luchoPic,
    stats: {
      attack: 80,
      defense: 30,
      speed: 90,
      endurance: 70,
      weight: 65,
      physical: 85,
    },
    abilities: ["Pisao", "Bueno", "Capitan", "Proxeneta de maridos"],
  },
  {
    name: "Gustavo Espinoza",
    nickname: "Gordazo",
    position: "Defensa, Mediocampista, Delantero",
    pic: gustavoPic,
    stats: {
      attack: 45,
      defense: 60,
      speed: 40,
      endurance: 55,
      weight: 80,
      physical: 90,
    },
    abilities: ["Tragon", "Alexis Hater", "Bajito", "Food Hunter"],
  },
  {
    name: "Percy Zamora",
    nickname: "Pepi",
    position: "Delantero",
    pic: percyPic,
    stats: {
      attack: 90,
      defense: 10,
      speed: 95,
      endurance: 80,
      weight: 60,
      physical: 80,
    },
    abilities: ["Anciano", "Muy Bueno", "Tragon", "Alexis Hater", "Pisao"],
  },
  {
    name: "Omar Cahuana",
    nickname: "MidNight",
    position: "Defensa, Mediocampista, Delantero",
    pic: omarPic,
    stats: {
      attack: 60,
      defense: 80,
      speed: 50,
      endurance: 65,
      weight: 70,
      physical: 85,
    },
    abilities: ["Tragon", "Bueno", "Pisao", "Alexis Hater"],
  },
  {
    name: "Walter Molina",
    nickname: "Asaltacuna",
    position: "Defensa, Mediocampista",
    pic: walterPic,
    stats: {
      attack: 30,
      defense: 70,
      speed: 40,
      endurance: 60,
      weight: 75,
      physical: 80,
    },
    abilities: ["Tragon", "Menores Hunter", "Debut y Retiro", "Falta uña"],
  },
];

export default characters;
