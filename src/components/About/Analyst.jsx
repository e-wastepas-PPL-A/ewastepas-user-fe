import React from "react";
import Card from "./Card";

const Analyst = () => {
  const teamMembers = [
    {
      name: "Wildan Fauzan",
      role: "Analyst",
      image: "/images/team/WildanFauzan.jpg",
    },
    {
      name: "Fauzi Ilyas Nuryadi",
      role: "Analyst",
      image: "/images/team/FauziIlyasNuryadi.jpg",
    },
    {
      name: "Muhammad Jauhari",
      role: "Analyst",
      image: "/images/team/MuhammadJauhari.jpg",
    },
    {
      name: "Wina Agustina",
      role: "Analyst",
      image: "/images/team/WinaAgustina.jpg",
    },
    {
      name: "Syahnan Afifah Zahra",
      role: "Analyst",
      image: "/images/team/SyahnanAfifah.jpg",
    },
    {
      name: "Syafira Deby Sanjaya",
      role: "Analyst",
      image: "/images/team/SyafiraDebySanjaya.jpg",
    },
    {
      name: "Muhammad Angga Kusuma",
      role: "Analyst",
      image: "/images/team/MuhammadAnggaKusuma.jpg",
    },
    {
      name: "Wildan Nasrulloh Reliyanto",
      role: "Analyst",
      image: "/images/team/WildanNasrullohReliyanto.jpg",
    },
  ];

  return (
    <Card
      title="Analyst Team"
      description="Meet our talented analysts who turn ideas into actionable and effective project plans."
      teamMembers={teamMembers}
    />
  );
};

export default Analyst;
