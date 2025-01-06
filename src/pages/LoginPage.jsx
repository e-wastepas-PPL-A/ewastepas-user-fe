import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import { Login } from "../utils/Api";
import Cookies from "js-cookie";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let valid = true;

    
    if (email.trim() === "") {
      setEmailError("Email wajib diisi.");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Kata sandi wajib diisi.");
      valid = false;
    }

    if (!valid) {
      return; 
    }

try {
  const result = await Login(email, password, rememberMe);

  localStorage.setItem("token", result.token);
  Cookies.set(
    "profile",
    JSON.stringify({
      name: result.name,
      email: email,
    })
  );

  console.log("Login successful", result.message);

  navigate("/");
} catch (error) {
  console.error(error);

  const message = error?.data?.message;

  if (message === "Pengguna tidak ditemukan") {
    setAlertMessage("Pengguna tidak ditemukan. Silakan cek email Anda.");
  } else if (
    message === "Akun belum diverifikasi. Silakan periksa email Anda untuk OTP."
  ) {
    setAlertMessage(
      "Akun Anda belum diverifikasi. Silakan periksa email Anda untuk OTP."
    );
  } else if (message === "Password tidak valid") {
    setAlertMessage("Kata sandi tidak valid. Silakan coba lagi.");
  } else {
    setAlertMessage(message || "Terjadi kesalahan. Silakan coba lagi.");
  }

  setShowAlert(true);
}

  };

  return (
    <div className="container px-1 flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 lg:mx-6 items-center w-full max-w-6xl">
        <div className="hidden lg:block xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img
            src="/images/register.png"
            alt="Login"
            className="w-full h-auto"
          />
        </div>
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-full mx-auto p-6">
          <div className="flex justify-center mb-5 lg:mb-2 lg:-mt-44">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-64 md:w-72 lg:w-80"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 text-gray-800">
            Masuk
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Masuk untuk mengakses akun Anda
          </h5>

          <form onSubmit={handleSubmit} className="space-y-3 w-full">
            <div>
              <InputEmail
                id="email"
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email"}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>

            <div className="mt-4">
              <InputPassword
                id="password"
                label={"Kata Sandi"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Kata Sandi"}
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

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
              Anda belum memiliki akun?{" "}
              <a href="RegisterPage" className="text-red-500">
                Registrasi
              </a>
            </p>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-sm">
             <div className="mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
              Login Gagal!
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              {alertMessage}
            </p>
            <div className="text-center">
              <button
                onClick={() => setShowAlert(false)}
                className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
