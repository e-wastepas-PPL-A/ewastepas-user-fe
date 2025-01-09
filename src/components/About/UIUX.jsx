import React from "react";
import Card from "./Card";

const Uiux = () => {
  const teamMembers = [
    {
      name: "Mohamad Afandi Hidayat",
      role: "UI/UX Designer",
      image: "/images/team/MohamadAfandiHidayat.jpg",
    },
    {
      name: "Moch Daffa Dhiya Ulhaq",
      role: "UI/UX Designer",
      image: "/images/team/MochDaffaDhiyaUlhaq.jpg",
    },
    {
      name: "Yudha Yudhistira Putra Firmansyah",
      role: "UI/UX Designer",
      image: "/images/team/YudhaYudhistiraPutraFirmansyah.jpg",
    },
    {
      name: "Risma Rahmana Fitri",
      role: "UI/UX Designer",
      image: "/images/team/RismaRahmanaFitri.jpg",
    },
    // {
    //   name: "Mohammad Deandra Adhitya",
    //   role: "UI/UX Designer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Gloria Rustama Simbolon",
    //   role: "UI/UX Designer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Diva Nur Haffifah",
    //   role: "UI/UX Designer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Dzikry Habibie Muchtar",
    //   role: "UI/UX Designer",
    //   image: "/images/profile.png",
    // },
    // {
    //   name: "Muhammad Dary Febrian",
    //   role: "UI/UX Designer",
    //   image: "/images/profile.png",
    // },
  ];

  return (
    <Card
      title="UI/UX Team"
      description="Meet our creative UI/UX designers who deliver intuitive and user-friendly experiences."
      teamMembers={teamMembers}
    />
  );
};

export default Uiux;
