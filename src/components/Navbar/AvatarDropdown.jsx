import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Cookies from "js-cookie";
import { fetchProfileData, Logout } from "../../utils/Api";

function AvatarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("/images/profile.png");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const isLoggedIn = !!Cookies.get("token");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getProfileData = async () => {
      if (!isLoggedIn) return;

      try {
        const profileData = await fetchProfileData();
        if (profileData?.photo) {
          setProfilePhoto(
            `http://localhost:3000/${profileData.photo.replace(/\\/g, "/")}`
          );
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    getProfileData();
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      await Logout();
      navigate("/LoginPage");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary rounded-full">
          <img
            src={profilePhoto}
            alt="User Avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        {isOpen ? (
          <FiChevronUp className="text-gray-600" />
        ) : (
          <FiChevronDown className="text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
          <Link
            to="/ProfilePage"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:font-semibold hover:text-white transition"
            onClick={closeDropdown}
          >
            Profil
          </Link>
          <Link
            to="/OrderPage"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:font-semibold hover:text-white transition"
            onClick={closeDropdown}
          >
            Order
          </Link>
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:font-semibold hover:text-white text-left"
            onClick={() => {
              closeDropdown();
              handleLogout();
            }}
          >
            Keluar
          </button>
        </div>
      )}
    </div>
  );
}

export default AvatarDropdown;
