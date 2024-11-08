import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/style.css";
import InputPassword from "../components/Input/InputPassword";

function OtpPage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil informasi dari mana halaman OTP ini diakses
  const { from } = location.state || { from: "RegisterPage" };

  // Contoh OTP valid
  const validOtp = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp === validOtp) {
      if (from === "RegisterPage") {
        console.log("OTP valid. Silahkan login.");
        navigate("/LoginPage");
      } else if (from === "ForgotPasswordPage") {
        console.log("OTP valid. Silahkan buat kata sandi baru.");
        navigate("/NewPasswordPage");
      }
    } else {
      console.log("OTP tidak valid. Coba lagi.");
      alert("Kode OTP tidak valid, silakan coba lagi.");
    }
  };

  return (
    <>
      <div className="container px-4 py-16 mx-32 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-4/5">
            <img src="/images/otp.png" alt="Registrasi" />
          </div>
          <div className="p-6 w-full max-w-md">
            <div className="flex justify-center mb-10 -mt-10">
              <img src="/images/logo.png" alt="Logo" className="w-64" />
            </div>
            <h1 className="text-4xl font-bold mb-4 -mt-5 text-gray-800">
              Verifikasi OTP
            </h1>
            <h5 className="text-md mb-4 text-black opacity-50 font-semibold">
              Kode verifikasi telah dikirim melalui email Anda
            </h5>

            <form onSubmit={handleSubmit}>
              <InputPassword
                id="otp"
                label={"Masukkan Kode"}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder={"Kode OTP"}
              />
              <div className="my-3">
                <p>
                  Tidak mendapatkan kode OTP?{" "}
                  <a href="#" className="text-red-500">
                    Kirim ulang
                  </a>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded"
              >
                Verifikasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpPage;
