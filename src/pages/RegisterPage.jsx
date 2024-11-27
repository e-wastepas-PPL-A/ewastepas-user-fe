import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputText from "../components/Input/InputText";
import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import { FcGoogle } from "react-icons/fc";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Semua kolom harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Kata sandi tidak cocok.");
      return;
    }

    if (!agreeToTerms) {
      alert("Anda harus menyetujui syarat dan kebijakan privasi.");
      return;
    }

    setLoading(true); 

    setTimeout(() => {
      setLoading(false); 
      setShowAlert(true); 
    }, 2000);
  };

  const closeAlert = () => {
    setShowAlert(false);
    navigate("/OtpPage", { state: { from: "RegisterPage", email } }); 
  };

  return (
    <div className="container px-1 mt-8 xl:mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6">
        <div className="hidden xl:block lg:block md:block md:my-24 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
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
            Registrasi
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Mari siapkan semuanya agar Anda dapat mengakses akun Anda
          </h5>

          <form onSubmit={handleSubmit}>
            <InputText
              id="name"
              type={"text"}
              label={"Nama Pengguna"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Nama Pengguna"}
            />
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
            <InputPassword
              id="confirmPassword"
              label={"Konfirmasi Kata Sandi"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={"Konfirmasi Kata Sandi"}
            />

            {password && confirmPassword && password !== confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                Kata sandi dan konfirmasi kata sandi tidak cocok.
              </div>
            )}

            <div className="mb-2">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="form-checkbox text-blue-600"
                required
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-3 text-gray-700 text-sm xl:text-base"
              >
                Saya menyetujui semua{" "}
                <a href="#" className="text-red-500">
                  Syarat
                </a>{" "}
                dan{" "}
                <a href="#" className="text-red-500">
                  Kebijakan Privasi
                </a>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
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
            <div className="flex items-center justify-center mt-1">
              <hr className="w-24 border-gray-300" />
              <p className="text-sm xl:text-base text-gray-500 mx-3">
                Atau daftar dengan
              </p>
              <hr className="w-24 border-gray-300" />
            </div>
            <div className="flex justify-center mt-1">
              <button className="relative flex justify-center items-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                <FcGoogle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

     
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <div className="mb-4">
              <img
                src="/images/berhasil.png"
                alt="Alert Image"
                className="w-20 h-20 mx-auto"
              />
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
