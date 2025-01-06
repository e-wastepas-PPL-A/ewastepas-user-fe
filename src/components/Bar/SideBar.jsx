import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaUser, FaFileAlt, FaBars } from "react-icons/fa";
import { fetchProfileData } from "../../utils/Api";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("Lorem Ipsum");
  const [userPhoto, setUserPhoto] = useState("/images/profile.png");
  const location = useLocation();

  useEffect(() => {
    const getUserData = async () => {
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
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      {/* Sidebar for large screens */}
      <div className="bg-white hidden lg:block w-64 ml-10 h-auto p-4 rounded-lg border shadow">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={userPhoto}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-4 font-bold">{userName}</span>
        </div>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/ProfilePage"
              className={({ isActive }) =>
                `flex items-center cursor-pointer hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              <FaUser className="text-lg" />
              <span className="ml-2">Profil</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/OrderPage"
              className={() =>
                `flex items-center cursor-pointer hover:text-primary ${
                  location.pathname.startsWith("/OrderPage") ||
                  location.pathname.startsWith("/TrackPage")
                    ? "text-primary font-bold"
                    : ""
                }`
              }
            >
              <FaFileAlt className="text-lg" />
              <span className="ml-2">Order</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-md transition-transform duration-300 ${
          isSidebarOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={userPhoto}
                alt={userName}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="ml-4 font-bold">{userName}</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
        <ul className="p-4">
          <li className="mb-4">
            <NavLink
              to="/ProfilePage"
              className={({ isActive }) =>
                `flex items-center cursor-pointer hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              <FaUser className="text-lg" />
              <span className="ml-2">Profil</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/OrderPage"
              className={() =>
                `flex items-center cursor-pointer hover:text-primary ${
                  location.pathname.startsWith("/OrderPage") ||
                  location.pathname.startsWith("/TrackPage")
                    ? "text-primary font-bold"
                    : ""
                }`
              }
            >
              <FaFileAlt className="text-lg" />
              <span className="ml-2">Order</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default SideBar;
