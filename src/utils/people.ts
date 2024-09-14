import henryPic from "../assets/people/Henrry.jpg";
import luchoPic from "../assets/people/Luhco.jpg";

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
    abilities: ["Pisao", "Bueno", "Capitan", "Proxenetade maridos"],
  },
];

export default characters;
