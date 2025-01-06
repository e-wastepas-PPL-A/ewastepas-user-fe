import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/style.css";
import InputPassword from "../components/Input/InputPassword";
import { verifyOtp, resendOtp } from "../utils/Api";

function OtpPage() {
  const [otp, setOtp] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { from, email } = location.state || { from: "RegisterPage", email: "" };
  if (!email) {
    console.error("Email not found in location state");
  }

  useEffect(() => {
    const savedExpirationTime = localStorage.getItem("otpExpirationTime");

    if (savedExpirationTime) {
      const expirationTime = parseInt(savedExpirationTime, 10);
      const currentTime = Date.now();
      const remainingTime = Math.max(
        0,
        Math.floor((expirationTime - currentTime) / 1000)
      );

      if (remainingTime > 0) {
        setTimer(remainingTime);
        setCanResend(false);
      } else {
        setTimer(0);
        setCanResend(true);
      }
    } else {
      const expirationTime = Date.now() + 180 * 1000;
      localStorage.setItem("otpExpirationTime", expirationTime.toString());
      setTimer(180);
      setCanResend(false);
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(intervalId);
            setCanResend(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const savedExpirationTime = localStorage.getItem("otpExpirationTime");
    const currentTime = Date.now();

    if (
      !savedExpirationTime ||
      parseInt(savedExpirationTime, 10) < currentTime
    ) {
      setAlertType("error");
      setShowAlert(true);
      setTimer(0);
      setCanResend(true);
      return;
    }

    try {
      const response = await verifyOtp(email, otp);

      if (response.message.includes("berhasil diverifikasi")) {
        setAlertType("success");
        setShowAlert(true);
        localStorage.removeItem("otpExpirationTime");
      } else {
        setAlertType("error");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setAlertType("error");
      setShowAlert(true);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    try {
      await resendOtp(email);
      setSuccessMessage("OTP baru telah dikirim ke email Anda.");
      const expirationTime = Date.now() + 180 * 1000;
      localStorage.setItem("otpExpirationTime", expirationTime.toString());
      setTimer(180);
      setCanResend(false);
      setOtp("");
      setTimeout(() => {
        setSuccessMessage(""); 
      }, 5000);
    } catch (error) {
      console.error(
        "Error resending OTP:",
        error.response?.data || error.message
      );
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const closeAlert = () => {
    setShowAlert(false);
    if (alertType === "success") {
      if (from === "RegisterPage") {
        navigate("/LoginPage");
      }
    }
  };

  return (
    <div className="container px-1 flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 lg:mx-6 items-center w-full max-w-6xl">
        <div className="hidden lg:block xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/otp.png" alt="OTP" className="w-full h-auto" />
        </div>
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-full mx-auto p-6">
          <div className="flex justify-center mb-5 lg:mb-2 lg:-mt-56">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-64 md:w-72 lg:w-80"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 text-gray-800">
            Verifikasi OTP
          </h1>
          <h5 className="text-sm xl:text-base mb-5 text-black opacity-50 font-semibold">
            Kode verifikasi telah dikirim melalui email Anda
          </h5>

          {successMessage && (
            <p className="text-green-600 text-md">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <InputPassword
              id="otp"
              label={"Masukkan Kode"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={"Kode OTP"}
            />
            <div className="my-3 text-sm xl:text-base flex justify-between items-center">
              <p>
                Tidak mendapatkan kode OTP?{" "}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className={`text-red-500 ${
                    !canResend && "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!canResend}
                >
                  Kirim ulang
                </button>
              </p>
              <span className="text-gray-500">{formatTime(timer)}</span>
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

      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-sm">
            <div className="mb-4 flex justify-center">
              {alertType === "success" ? (
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
              ) : (
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
              )}
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
              {alertType === "success"
                ? "Verifikasi Berhasil!"
                : "Verifikasi Gagal!"}
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              {alertType === "success"
                ? "Akun Anda berhasil dibuat. Silakan login untuk melanjutkan."
                : timer === 0
                ? "Kode OTP Anda telah kadaluwarsa. Silakan kirim ulang untuk mendapatkan kode baru."
                : "Kode OTP yang Anda masukkan tidak valid. Silakan coba lagi."}
            </p>
            <div className="text-center">
              <button
                onClick={closeAlert}
                className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
              >
                {alertType === "success" ? "Masuk Sekarang" : "Coba Lagi"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpPage;
