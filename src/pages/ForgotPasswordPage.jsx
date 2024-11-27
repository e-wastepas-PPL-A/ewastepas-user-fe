import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputEmail from "../components/Input/InputEmail";
import { IoIosArrowRoundBack } from "react-icons/io";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email });
    // navigate("/OtpPage", { state: { from: "ForgotPasswordPage" } });
  };

  return (
    <div className="container px-1 mt-28 md:mt-14 lg:mt-14 xl:mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6 ">
        <div className="hidden xl:block lg:block md:block md:my-8 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/forgot.png" alt="Registrasi" />
        </div>
        <div className="p-6 w-full max-w-md">
          <div className="flex justify-center mb-10 -mt-10">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-52 md:w-56 xl:w-64"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Lupa Kata Sandi
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Masukkan email Anda untuk atur ulang kata sandi{" "}
          </h5>

          <form onSubmit={handleSubmit}>
            <InputEmail
              id="email"
              label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Email"}
            />

            <button
              type="submit"
              className="text-sm xl:text-base w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded mt-3"
            >
              Kirim
            </button>
          </form>
          <div className="text-sm xl:text-base my-3 flex items-center justify-center">
            <a href="LoginPage" className="text-black flex items-center">
              <IoIosArrowRoundBack size={28} className="mr-2" /> Kembali ke
              Halaman Masuk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
