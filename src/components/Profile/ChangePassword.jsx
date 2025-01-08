import { useState, useEffect } from "react";
import InputPassword from "../Input/InputPassword";
import { changePassword } from "../../utils/Api";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const isValidLength = newPassword.length >= 8 && newPassword.length <= 20;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

  useEffect(() => {
    if (!isFocused && newPassword) {
      if (!isValidLength || !hasUppercase || !hasNumber || !hasSpecialChar) {
        setError("Kata sandi baru tidak memenuhi syarat.");
        setIsPasswordValid(false);
      } else {
        setError("");
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
    setError("");
    setLoading(true);

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("Semua kolom harus diisi.");
      setLoading(false);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("Kata sandi baru dan konfirmasi kata sandi tidak sesuai.");
      setLoading(false);
      return;
    }

    if (!isPasswordValid) {
      setError("Kata sandi baru tidak memenuhi syarat.");
      setLoading(false);
      return;
    }

    try {
      const response = await changePassword(
        currentPassword,
        newPassword,
        confirmNewPassword
      );

      if (response.status === 200) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setShowAlert(true);
      } else {
        setError("Terjadi masalah saat mengganti kata sandi. Coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error?.response?.data || error.message);
      if (error?.response?.data?.message === "Current password is incorrect") {
        setError("Kata sandi lama tidak sesuai.");
      } else if (error?.response?.data?.message === "Password is too weak") {
        setError("Kata sandi baru terlalu lemah.");
      } else if (error?.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Gagal mengganti kata sandi. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const validationMessage = (
    <div className="flex flex-col items-start text-sm mt-2">
      <p className="text-gray-700">Kata sandi baru harus memiliki:</p>
      <p className={isValidLength ? "text-green-500" : "text-red-500"}>
        ✓ Minimal 8 karakter (maksimal 20)
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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md border border-gray-300"
      >
        <h5 className="text-xl font-semibold mb-6">Ubah Kata Sandi</h5>
        <hr className="border-t-1 border-black -mt-4 mb-5" />
        <div className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <InputPassword
            id="currentPassword"
            label="Kata Sandi Lama"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Kata sandi lama"
          />
          <InputPassword
            id="newPassword"
            label="Kata Sandi Baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Kata sandi baru"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isFocused && validationMessage}{" "}
          <InputPassword
            id="confirmNewPassword"
            label="Konfirmasi Kata Sandi Baru"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Konfirmasi kata sandi baru"
          />
          <div className="flex justify-end mt-6 space-x-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white hover:bg-primary"
              disabled={loading || !isPasswordValid || error}
            >
              {loading ? "Memproses..." : "Simpan"}
            </button>
          </div>
        </div>
      </form>
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-4 w-[80%] max-w-sm">
            <div className="mb-3 flex justify-center">
              <svg
                width="70"
                height="70"
                viewBox="0 0 131 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.391 65.4998C128.414 63.1438 129.832 60.3298 130.521 57.3018C131.21 54.2738 131.151 51.1234 130.347 48.1237C129.543 45.1241 128.019 42.3659 125.908 40.0884C123.797 37.8108 121.162 36.0828 118.232 35.0542C118.806 32.0021 118.627 28.856 117.71 25.8889C116.793 22.9218 115.166 20.2233 112.97 18.0274C110.773 15.8316 108.075 14.2048 105.107 13.2881C102.14 12.3714 98.9942 12.1926 95.9422 12.7671C94.9143 9.83625 93.1866 7.2006 90.9091 5.08896C88.6315 2.97733 85.873 1.45354 82.8729 0.649883C79.8729 -0.15377 76.722 -0.212992 73.6938 0.47736C70.6657 1.16771 67.8518 2.58677 65.4965 4.61133C63.1405 2.58816 60.3265 1.17038 57.2985 0.480986C54.2705 -0.208412 51.12 -0.148607 48.1204 0.655211C45.1208 1.45903 42.3625 2.98258 40.085 5.09371C37.8075 7.20483 36.0795 9.83976 35.0508 12.7699C31.999 12.1963 28.8532 12.376 25.8865 13.2933C22.9198 14.2106 20.2217 15.8378 18.0262 18.0339C15.8307 20.2299 14.2041 22.9285 13.2876 25.8954C12.3711 28.8624 12.1922 32.0081 12.7666 35.0598C9.83643 36.0885 7.2015 37.8165 5.09037 40.094C2.97925 42.3715 1.45569 45.1298 0.651868 48.1294C-0.151951 51.129 -0.211765 54.2795 0.477633 57.3075C1.16703 60.3355 2.58484 63.1495 4.608 65.5055C2.58422 67.8614 1.16598 70.6757 0.476386 73.704C-0.213208 76.7323 -0.153342 79.8831 0.650828 82.883C1.455 85.8829 2.97915 88.6412 5.091 90.9186C7.20284 93.1959 9.8386 94.9234 12.7694 95.9512C12.1946 99.003 12.3732 102.149 13.2898 105.116C14.2065 108.083 15.8335 110.782 18.0295 112.977C20.2256 115.173 22.9243 116.8 25.8915 117.716C28.8588 118.632 32.0048 118.811 35.0565 118.235C36.0852 121.166 37.8132 123.8 40.0907 125.912C42.3682 128.023 45.1264 129.546 48.1261 130.35C51.1257 131.154 54.2762 131.214 57.3041 130.524C60.3321 129.835 63.1462 128.417 65.5022 126.394C67.8581 128.418 70.6724 129.836 73.7007 130.526C76.729 131.215 79.8798 131.155 82.8797 130.351C85.8796 129.547 88.6379 128.023 90.9153 125.911C93.1926 123.799 94.9201 121.163 95.9479 118.233C98.9998 118.807 102.146 118.629 105.113 117.712C108.08 116.795 110.779 115.168 112.975 112.972C115.171 110.776 116.798 108.078 117.714 105.111C118.631 102.143 118.81 98.9974 118.235 95.9455C121.165 94.9171 123.8 93.1891 125.912 90.9115C128.023 88.6339 129.546 85.8755 130.35 82.8757C131.154 79.8758 131.213 76.7252 130.523 73.6972C129.833 70.6692 128.415 67.8554 126.391 65.4998Z"
                  fill="#42A444"
                />
                <path
                  d="M53.7399 90.5042L35.5378 72.3135C34.847 71.6216 34.459 70.6838 34.459 69.7061C34.459 68.7283 34.847 67.7906 35.5378 67.0987L37.7492 64.8844C38.4411 64.1936 39.3789 63.8056 40.3566 63.8056C41.3343 63.8056 42.2721 64.1936 42.964 64.8844L56.1954 78.1074L87.3565 44.9933C88.027 44.2818 88.9524 43.8655 89.9296 43.8357C90.9067 43.8059 91.8558 44.165 92.5684 44.8343L94.8395 46.9776C95.5518 47.6482 95.9686 48.5742 95.9984 49.5521C96.0282 50.5299 95.6685 51.4796 94.9984 52.1924L59.0427 90.4219C58.7042 90.7827 58.2965 91.0718 57.844 91.2719C57.3916 91.472 56.9035 91.5791 56.4088 91.5867C55.9141 91.5944 55.4228 91.5025 54.9644 91.3166C54.5059 91.1306 54.0895 90.8543 53.7399 90.5042Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-center text-green-500">
              Berhasil!
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              Kata sandi Anda telah berhasil diubah.
            </p>
            <div className="text-center">
              <button
                onClick={closeAlert}
                className="bg-primary text-white py-2 px-4 hover:bg-primary-dark rounded-xl"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePasswordForm;
