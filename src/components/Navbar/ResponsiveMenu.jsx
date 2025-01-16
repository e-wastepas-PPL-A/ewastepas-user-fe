import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import Cookies from "js-cookie";
import { fetchProfileData, Logout } from "../../utils/Api";

const ResponsiveMenu = ({ open, setOpen }) => {
  const isLoggedIn = !!Cookies.get("token");
  const [userName, setUserName] = useState("Lorem Ipsum");
  const [userPhoto, setUserPhoto] = useState("/images/profile.png");
  const navigate = useNavigate();

  const [isLargeOrLarger, setIsLargeOrLarger] = useState(
    window.innerWidth >= 1024 
  );

  const navLinks = isLoggedIn
    ? [
        ...NavbarLinks.slice(0, 1),
        { name: "Pick & Pack", link: "/CategoryPage" },
        ...NavbarLinks.slice(1),
        { name: "Order", link: "/OrderPage" }, 
      ]
    : NavbarLinks;

  useEffect(() => {
    const getProfileData = async () => {
      if (!isLoggedIn) return;

      try {
        const profileData = await fetchProfileData();
        if (profileData) {
          setUserName(profileData.name || "Lorem Ipsum");
          if (profileData.photo) {
            setUserPhoto(
              `http://localhost:3000/${profileData.photo.replace(/\\/g, "/")}`
            );
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    getProfileData();
  }, [isLoggedIn]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeOrLarger(window.innerWidth >= 1024); 
    };

    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  useEffect(() => {
    if (isLargeOrLarger && open) {
      setOpen(false); 
    }
  }, [isLargeOrLarger, open, setOpen]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("Contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleLogout = async () => {
    try {
      await Logout();
      navigate("/LoginPage");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setOpen(false)} 
        />
      )}

      <div
        className={`fixed top-0 right-0 bg-white z-50 w-full h-[80vh]   transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center pt-8">
          <img src="/images/Logo.png" alt="Ewhale Logo" className="h-8" />
        </div>

        {isLoggedIn && (
          <NavLink
            to="/ProfilePage"
            onClick={() => setOpen(false)}
            className="flex flex-col items-center mt-10"
          >
            <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
              <img
                src={userPhoto}
                alt={userName}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 text-md font-medium">{userName}</span>
          </NavLink>
        )}

        {/* Navigation Links */}
        <nav className={`${isLoggedIn ? "mt-52" : "mt-28"}`}>
          <ul className="space-y-0 text-sm font-medium">
            {navLinks.map((navItem) => (
              <li key={navItem.name}>
                {navItem.name === "Kontak" ? (
                  <button
                    onClick={(e) => {
                      handleScrollToContact(e);
                      setOpen(false); 
                    }}
                    className="w-full px-6 py-4 text-left border-b border-gray-200"
                  >
                    {navItem.name}
                  </button>
                ) : (
                  <NavLink
                    to={navItem.link}
                    onClick={() => setOpen(false)} 
                    className={({ isActive }) =>
                      `block px-6 py-4 border-b border-gray-200 ${
                        isActive ? "text-primary" : ""
                      }`
                    }
                  >
                    {navItem.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {isLoggedIn && (
          <div className="absolute mt-72 left-0 right-0 flex justify-center items-center px-4">
            <button
              onClick={() => {
                handleLogout();
                setOpen(false); 
              }}
              className="bg-primary text-white py-1.5 px-8 rounded-none "
            >
              Keluar
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ResponsiveMenu;
