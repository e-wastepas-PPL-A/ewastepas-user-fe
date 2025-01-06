import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/style.css";
import InputPassword from "../components/Input/InputPassword";
import { resetPassword } from "../utils/Api";

function NewPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showExpiredAlert, setShowExpiredAlert] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const [timePassed, setTimePassed] = useState(0); 

  // Validasi password
  const isValidLength = newPassword.length >= 8 && newPassword.length <= 20;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);
  const hasSpecialChar = /[#!?$&@.]/.test(newPassword);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timePassed >= 180) {
      setShowExpiredAlert(true);
    }
  }, [timePassed]);

  useEffect(() => {
    if (!isFocused && newPassword) {
      if (!isValidLength || !hasUppercase || !hasNumber || !hasSpecialChar) {
        setErrors((prev) => ({
          ...prev,
          newPassword:
            "Password tidak valid. Pastikan password memenuhi syarat.",
        }));
        setIsPasswordValid(false);
      } else {
        setErrors((prev) => ({
          ...prev,
          newPassword: "",
        }));
        setIsPasswordValid(true);
      }
    }
  }, [
    isFocused,
    newPassword,
    isValidLength,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ]);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); 

  if (newPassword !== confirmNewPassword) {
    setErrors((prev) => ({
      ...prev,
      confirmNewPassword: "Kata sandi tidak cocok.",
    }));
    setLoading(false); 
    return;
  }

  try {
    const result = await resetPassword(token, newPassword);
    console.log("Password reset successfully:", result.message);

    setShowAlert(true);
  } catch (error) {
    console.error(
      "Error resetting password:",
      error.response?.data || error.message
    );

    const errorMessage = error.response?.data?.error || error.message;
    if (errorMessage.toLowerCase().includes("jwt expired")) {
      setShowExpiredAlert(true);
    } else {
      alert(errorMessage || "Terjadi kesalahan. Silakan coba lagi.");
    }
  }

  setLoading(false); 
};


  const closeAlert = () => {
    setShowAlert(false);
    navigate("/LoginPage");
  };

  const closeExpiredAlert = () => {
    setShowExpiredAlert(false);
    navigate("/ForgotPasswordPage");
  };

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
    !isPasswordValid || !!errors.newPassword || !!errors.confirmNewPassword;

  return (
    <div className="container px-1 flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 lg:mx-6 items-center w-full max-w-6xl">
        <div className="hidden lg:block xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img
            src="/images/register.png"
            alt="New Password"
            className="w-full h-auto"
          />
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
              label="Kata Sandi Baru"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setErrors((prev) => ({ ...prev, newPassword: "" }));
              }}
              placeholder="Kata Sandi Baru"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {errors.newPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.newPassword}
              </div>
            )}
            {isFocused && validationMessage}

            <InputPassword
              id="confirmNewPassword"
              label="Konfirmasi Kata Sandi Baru"
              value={confirmNewPassword}
              onChange={(e) => {
                const value = e.target.value;
                setConfirmNewPassword(value);
                if (value && value !== newPassword) {
                  setErrors((prev) => ({
                    ...prev,
                    confirmNewPassword: "Kata sandi tidak cocok.",
                  }));
                } else {
                  setErrors((prev) => ({
                    ...prev,
                    confirmNewPassword: "",
                  }));
                }
              }}
              placeholder="Konfirmasi Kata Sandi Baru"
            />
            {errors.confirmNewPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmNewPassword}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded cursor-pointer"
              disabled={loading || isSubmitDisabled}
            >
              {loading ? "Memproses..." : "Ubah Kata Sandi"}
            </button>
          </form>
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
                  Berhasil!!
                </h2>
                <p className="text-gray-700 text-sm text-center mb-4">
                  Password Anda telah berhasil diperbarui
                </p>
                <div className="text-center">
                  <button
                    onClick={closeAlert}
                    className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
          {showExpiredAlert && (
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
                  Link Kedaluwarsa
                </h2>
                <p className="text-gray-700 text-sm text-center mb-4">
                  Link reset password Anda telah kedaluwarsa. Silakan kirim
                  ulang permintaan untuk link baru.
                </p>
                <div className="text-center">
                  <button
                    onClick={closeExpiredAlert}
                    className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;
