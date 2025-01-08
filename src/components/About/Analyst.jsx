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
    // {
    //   name: "Syafira Deby Sanjaya",
    //   role: "Analyst",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Syahnan Afifah Zahra",
    //   role: "Analyst",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Muhammad Angga Kusuma",
    //   role: "Analyst",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Wildan Nasrulloh Reliyanto",
    //   role: "Analyst",
    //   image: "/images/profile.png",
    // },
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
