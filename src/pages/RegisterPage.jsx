import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputText from "../components/Input/InputText";
import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import { Register } from "../utils/Api";
import { FcGoogle } from "react-icons/fc";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: "",
    });
    setServerError("");

    let hasError = false;

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Nama harus diisi." }));
      hasError = true;
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email harus diisi." }));
      hasError = true;
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Kata Sandi harus diisi." }));
      hasError = true;
    }

    if (!confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Konfirmasi Kata Sandi harus diisi.",
      }));
      hasError = true;
    } else if (password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Kata sandi tidak cocok.",
      }));
      hasError = true;
    }

    if (!agreeToTerms) {
      setErrors((prev) => ({
        ...prev,
        agreeToTerms: "Anda harus menyetujui syarat dan kebijakan privasi.",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);

    try {
      const data = await Register(name, email, password, confirmPassword);
      console.log(data);

      setLoading(false);
      setShowAlert(true);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);

      if (
        error.response &&
        error.response.data.message === "Email sudah digunakan"
      ) {
        setServerError("Email sudah digunakan. Silakan gunakan email lain.");
      } else {
        setServerError("Terjadi kesalahan, silakan coba lagi.");
      }
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    navigate("/OtpPage", { state: { from: "RegisterPage", email } });
  };

  // Validasi password
  const isValidLength = password.length >= 8 && password.length <= 20;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  useEffect(() => {
    if (!isFocused && password) {
      if (!isValidLength || !hasUppercase || !hasNumber || !hasSpecialChar) {
        setErrors((prev) => ({
          ...prev,
          password: "Password tidak valid. Pastikan password memenuhi syarat.",
        }));
        setIsPasswordValid(false);
      } else {
        setErrors((prev) => ({
          ...prev,
          password: "",
        }));
        setIsPasswordValid(true);
      }
    }
  }, [
    isFocused,
    password,
    isValidLength,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ]);

  useEffect(() => {
    if (!isFocused) {
      setIsFocused(false);
    }
  }, [isFocused]);

  const validationMessage = (
    <div className="flex flex-col items-start text-sm mt-2">
      <p className="text-gray-700">
        Kata sandi Anda setidaknya harus memiliki:
      </p>
      <p className={isValidLength ? "text-green-500" : "text-red-500"}>
        ✓ 8 karakter (maksimal 20)
      </p>
      <p
        className={
          hasUppercase && hasNumber ? "text-green-500" : "text-red-500"
        }
      >
        ✓ 1 huruf kapital dan 1 angka
      </p>
      <p className={hasSpecialChar ? "text-green-500" : "text-red-500"}>
        ✓ 1 karakter khusus (contoh: . # ? ! $ & @)
      </p>
    </div>
  );

  const isSubmitDisabled =
    !isPasswordValid || Object.values(errors).some((error) => error);

  return (
    <div className="container px-1 mt-8 xl:mt-14 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 lg:mx-6 items-center w-full max-w-6xl">
        <div className="hidden lg:block xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img
            src="/images/register.png"
            alt="Registrasi"
            className="w-full h-auto"
          />
        </div>
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-full mx-auto p-6">
          <div className="flex justify-center mb-8 -mt-10">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-64 md:w-72 lg:w-80"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Registrasi
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Mari siapkan semuanya agar Anda dapat mengakses akun Anda
          </h5>

          <form onSubmit={handleSubmit} className="space-y-1">
            {serverError && (
              <div className="text-red-500 text-sm mt-4">{serverError}</div>
            )}
            <InputText
              id="name"
              type={"text"}
              label={"Nama Pengguna"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder={"Nama Pengguna"}
            />
            {errors.name && (
              <div className="text-red-500 text-sm">{errors.name}</div>
            )}

            <InputEmail
              id="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!/\S+@\S+\.\S+/.test(e.target.value) && e.target.value) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "Format email tidak valid",
                  }));
                } else {
                  setErrors((prev) => ({ ...prev, email: "" }));
                }
              }}
              placeholder="Email"
            />
            {errors.email && (
              <div className="text-red-500 text-sm ">{errors.email}</div>
            )}

            <InputPassword
              id="password"
              label={"Kata Sandi"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              placeholder={"Kata Sandi"}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {errors.password && (
              <div className="text-red-500 text-sm ">{errors.password}</div>
            )}
            {isFocused && validationMessage}

            <InputPassword
              id="confirmPassword"
              label={"Konfirmasi Kata Sandi"}
              value={confirmPassword}
              onChange={(e) => {
                const value = e.target.value;
                setConfirmPassword(value);
                if (value && value !== password) {
                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: "Kata sandi tidak cocok.",
                  }));
                } else {
                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: "",
                  }));
                }
              }}
              placeholder={"Konfirmasi Kata Sandi"}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm ">
                {errors.confirmPassword}
              </div>
            )}

            <div className="mb-2">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => {
                  setAgreeToTerms(e.target.checked);
                  if (e.target.checked) {
                    setErrors((prev) => ({ ...prev, agreeToTerms: "" }));
                  }
                }}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="agreeToTerms" className="text-gray-700 text-sm ">
                Saya menyetujui semua Syarat dan Kebijakan Privasi
              </label>
            </div>
            {errors.agreeToTerms && (
              <div className="text-red-500 text-sm ">{errors.agreeToTerms}</div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded cursor-pointer"
              disabled={loading || isSubmitDisabled}
            >
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </form>
          <div className="text-sm xl:text-base text-center mt-2">
            <p>
              Anda sudah memiliki akun?{" "}
              <a href="LoginPage" className="text-red-500">
                Masuk
              </a>
            </p>
            <div className="flex items-center justify-center mt-2">
              <hr className="w-24 border-gray-300" />
              <p className="text-sm xl:text-base text-gray-500 mx-3">
                Atau daftar dengan
              </p>
              <hr className="w-24 border-gray-300" />
            </div>
            <div className="flex justify-center mt-4">
              <button className="relative flex justify-center items-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                <FcGoogle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-sm">
            <div className="mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
              Registrasi Berhasil
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              Akun Anda telah berhasil dibuat. Silakan cek email Anda untuk
              mengkonfirmasi.
            </p>
            <div className="text-center">
              <button
                onClick={closeAlert}
                className="bg-primary text-white py-2 px-4  hover:bg-primary-dark"
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
