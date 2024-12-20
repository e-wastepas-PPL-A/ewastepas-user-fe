import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputPassword from "../components/Input/InputPassword";

function NewPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Kata sandi tidak sesuai!");
      return;
    }
    console.log({ newPassword, confirmNewPassword });
    navigate("/LoginPage");
  };

  return (
    <div className="container px-1 mt-28 md:mt-14 lg:mt-14 xl:mt-14 flex justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6 ">
        <div className="hidden xl:block lg:block md:block md:my-8 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/register.png" alt="Registrasi" />
        </div>
        <div className="p-6 w-full max-w-md">
          <div className="flex justify-center mb-8 -mt-10">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-52 md:w-56 xl:w-64"
            />
          </div>
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Buat Kata Sandi Baru
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Permintaan atur ulang kata sandi diterima.
            <br />
            Silakan masukkan kata sandi baru Anda!
          </h5>

          <form onSubmit={handleSubmit}>
            <InputPassword
              id="newPassword"
              label={"Kata Sandi Baru"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={"Kata Sandi Baru"}
            />
            <InputPassword
              id="confirmNewPassword"
              label={"Konfirmasi Kata Sandi Baru"}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder={"Konfirmasi Kata Sandi Baru"}
            />
            <button
              type="submit"
              className="text-sm xl:text-base w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded mt-3"
            >
              Ubah Kata Sandi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;
