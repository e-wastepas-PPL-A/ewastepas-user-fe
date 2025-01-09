import React from "react";
import Card from "./Card";

const Programmer = () => {
  const teamMembers = [
    {
      name: "Aufaa Husniati",
      role: "Front-End Developer",
      image: "/images/team/AufaaHusniati.jpg",
    },
    {
      name: "Gilman Arief",
      role: "Front-End Developer",
      image: "/images/team/GilmanArief.jpg",
    },
    {
      name: "Muhamad Jamaludin",
      role: "Front-End Developer",
      image: "/images/team/MuhamadJamaludin.jpg",
    },
    {
      name: "Muhammad Anggi Kusuma",
      role: "Back-End Developer",
      image: "/images/team/MuhammadAnggiKusuma.jpg",
    },
    {
      name: "Muhammad Lutfi Amin Ghifarullah",
      role: "Back-End Developer",
      image: "/images/team/MuhammadLutfiAminGhifarullah.jpg",
    },
    {
      name: "Dandy Wahyudin",
      role: "Back-End Developer",
      image: "/images/team/DandyWahyudin.jpg",
    },
    {
      name: "Muhamad Lanang Abid Kusuma",
      role: "Back-End Developer",
      image: "/images/team/MuhamadLanangAbidKusuma.jpg",
    },
    {
      name: "Putri Legiani Fahreza",
      role: "Back-End Developer",
      image: "/images/team/PutriLegianiFahreza.jpg",
    },
    {
      name: "Syifa Rizki Mutia",
      role: "Front-End Developer",
      image: "/images/team/SyifaRizkiMutia.jpg",
    },
    // {
    //   name: "Moch Priamitra Nur Alif",
    //   role: "Back-End Developer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Ainan Bahrul Ihsan",
    //   role: "Back-End Developer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Zalfa Mufrih Rifda Dwi Ramadhan",
    //   role: "Front-End Developer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Muhammad Rizki Haikal",
    //   role: "Back-End Developer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Julio Faridh Fherdianscyah",
    //   role: "Front-End Developer",
    //   image: "/images/profile.png",
    // },
  ];

  return (
    <Card
      title="Programmer Team"
      description="Meet our skilled developers who build amazing applications."
      teamMembers={teamMembers}
    />
  );
};

export default Programmer;
