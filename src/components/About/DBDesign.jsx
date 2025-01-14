import React from "react";
import Card from "./Card";

const DBDesign = () => {
  const teamMembers = [
    {
      name: "Ahmad Saeful Rahman",
      role: "Database Designer",
      image: "/images/team/AhmadSaefulRahman.jpg",
    },
    {
      name: "Allfiandi Rahman",
      role: "Database Designer",
      image: "/images/team/AllfiandiRahman.jpg",
    },
    {
      name: "Daffa Arkantaqqy Khoisy",
      role: "Database Designer",
      image: "/images/team/DaffaArkantaqqyKhoisy.jpg",
    },
    {
      name: "Faqih Firdaus Kemal Pangestu",
      role: "Database Designer",
      image: "/images/team/FaqihFirdausKemalPangestu.jpg",
    },
    {
      name: "Mochamad Haykal Alvegio Hadian",
      role: "Database Designer",
      image: "/images/team/MochamadHaykalAlvegioHadian.jpg",
    },
    {
      name: "Muhammad Ardhia Nugraha",
      role: "Database Designer",
      image: "/images/team/MuhammadArdhiaNugraha.jpg",
    },
    {
      name: "Widya Dwi Indrianti",
      role: "Database Designer",
      image: "/images/team/WidyaDwiIndrianti.jpg",
    },
    {
      name: "Fowaz Amran Alfarez",
      role: "Database Designer",
      image: "/images/team/FowazAmranAlfarez.jpg",
    },
    {
      name: "Adawiyah ajriah lubis",
      role: "Database Designer",
      image: "/images/profile.png",
    },
  ];

  return (
    <Card
      title="Database Designer Team"
      description="Meet our expert database designers who craft efficient and reliable data structures."
      teamMembers={teamMembers}
    />
  );
};

export default DBDesign;
