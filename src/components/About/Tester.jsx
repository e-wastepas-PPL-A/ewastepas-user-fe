import React from "react";
import Card from "./Card";

const Tester = () => {
  const teamMembers = [
    {
      name: "Adnan Rais Purnomo",
      role: "Tester",
      image: "/images/team/AdnanRaisPurnomo.jpg",
    },
    {
      name: "Aldi Muhammad Ramdhani",
      role: "Tester",
      image: "/images/team/AldiMuhammadRamdhani.jpg",
    },
    {
      name: "Malwi Hidayat Togatorop",
      role: "Tester",
      image: "/images/team/MalwiHidayatTogatorop.jpg",
    },
    {
      name: "Muhamad Fauzan Abdul Rochman",
      role: "Tester",
      image: "/images/team/MuhamadFauzanAbdulRochman.jpg",
    },
    {
      name: "Naufal Ramdhani",
      role: "Tester",
      image: "/images/team/NaufalRamdhani.jpg",
    },
    {
      name: "Saiful Hilal",
      role: "Tester",
      image: "/images/team/SaifulHilal.jpg",
    },
    {
      name: "Fajar Agus Hermanto",
      role: "Tester",
      image: "/images/team/FajarAgusHermanto.jpg",
    },
    {
      name: "Billy Ramadhan",
      role: "Tester",
      image: "/images/team/BillyRamadhan.jpg",
    },
    // {
    //   name: "Revina Bella Trisna",
    //   role: "Tester",
    //   image: "/images/profile.png",
    // },
  ];

  return (
    <Card
      title="Tester Team"
      description="Meet our dedicated testers who ensure every application meets top-quality standards."
      teamMembers={teamMembers}
    />
  );
};

export default Tester;
