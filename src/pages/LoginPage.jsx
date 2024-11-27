import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    navigate("/");
  };

  return (
    <div className="container px-1 mt-28 md:mt-14 lg:mt-14 xl:mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6 ">
        <div className="hidden xl:block lg:block md:block md:my-8 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/register.png" alt="Registrasi" />
        </div>
        <div className="p-6 w-full max-w-md">
          <div className="flex justify-center mb-8 -mt-10">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-52 md:w-56 xl:w-64"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Masuk
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Masuk untuk mengakses akun Anda
          </h5>

          <form onSubmit={handleSubmit}>
            <InputEmail
              id="email"
              label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Email"}
            />
            <InputPassword
              id="password"
              label={"Kata Sandi"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Kata Sandi"}
            />

            <div className="my-3 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="form-checkbox text-blue-600"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm xl:text-base ml-3 text-gray-700 text-md"
                >
                  Ingatkan saya
                </label>
              </div>
              <a
                href="ForgotPasswordPage"
                className="text-sm xl:text-base text-red-500 text-md"
              >
                Lupa kata sandi
              </a>
            </div>
            <button
              type="submit"
              className="text-sm xl:text-base w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded"
            >
              Masuk
            </button>
          </form>
          <div className="text-sm xl:text-base text-center mt-2">
            <p>
              Anda sudah memiliki akun?{" "}
              <a href="RegisterPage" className="text-red-500">
                Registrasi
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
