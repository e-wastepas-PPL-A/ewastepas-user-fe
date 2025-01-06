import React, { useState } from "react";
import Profile from "../components/Profile/Profile";
import ChangePasswordForm from "../components/Profile/ChangePassword";
import SideBar from "../components/Bar/SideBar";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div className="flex flex-col lg:flex-row p-10 min-h-screen pt-36 lg:items-start lg:justify-start items-center justify-center">
        <SideBar />
        <div className="w-full bg-white p-6 rounded-xl shadow-xl ml-8">
          <div className="flex mb-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 text-center py-2 font-semibold ${
                activeTab === "profile"
                  ? "text-white bg-primary"
                  : "text-gray-600 border-b"
              } rounded-t-lg`}
            >
              Profil
            </button>
            <button
              onClick={() => setActiveTab("changePassword")}
              className={`flex-1 text-center py-2 font-semibold ${
                activeTab === "changePassword"
                  ? "text-white bg-primary"
                  : "text-gray-600 border-b"
              } rounded-t-lg`}
            >
              Ubah Kata Sandi
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "profile" && <Profile />}
            {activeTab === "changePassword" && (
              <ChangePasswordForm setActiveTab={setActiveTab} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
