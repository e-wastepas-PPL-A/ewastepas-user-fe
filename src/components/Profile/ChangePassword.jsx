import { useState } from "react";
import InputPassword from "../Input/InputPassword";

// eslint-disable-next-line
const ChangePasswordForm = ({ setIsChangePassword }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-lg shadow-md border border-gray-300"
    >
      <h5 className="text-xl font-semibold mb-6">Change Password Here</h5>
      <hr className="border-t-1 border-black -mt-4 mb-5" />
      <div className="space-y-4">
        <div>
          <InputPassword
            id="oldPassword"
            label={"Current Password"}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder={"Current Password"}
          />
        </div>
        <div>
          <InputPassword
            id="newPassword"
            label={"New Password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder={"New Password"}
          />
        </div>
        <div>
          <InputPassword
            id="confirmNewPassword"
            label={"Confirm New Password"}
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder={"Confirm New Password"}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6 space-x-2">
        <button
          type="button"
          onClick={() => setIsChangePassword(null)}
          className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white hover:bg-primary"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
