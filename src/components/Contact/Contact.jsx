import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { useState } from "react";
import InputText from "../Input/InputText";
import TextArea from "../Input/TextArea";
import { contact } from "../../utils/Api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Untuk menyimpan pesan sukses
  const [errorMessage, setErrorMessage] = useState(""); // Untuk menyimpan pesan error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset pesan sebelumnya
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await contact(formData);
      setSuccessMessage(result.message); // Set pesan sukses
      setFormData({ name: "", contact: "", email: "", message: "" });

      // Hilangkan pesan sukses setelah 3 detik
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Gagal mengirim pesan: " + error.message); // Set pesan error

      // Hilangkan pesan error setelah 3 detik
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div className="container mx-auto py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg border-2">
              <MdLocationOn className="h-8 w-8 text-[#29487D]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#29487D]">Lokasi</h3>
              <p className="text-[#0E5182]">
                Jl. Dr. Setiabudi No.193, Gegerkalong,
                <br />
                Kec. Sukasari, Kota Bandung, Jawa
                <br />
                Barat 40153
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg border-2">
              <MdEmail className="h-8 w-8 text-[#29487D]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#29487D]">Email</h3>
              <p className="text-[#0E5182]">ewhale.info@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg border-2">
              <MdPhone className="h-8 w-8 text-[#29487D]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#29487D]">Telepon</h3>
              <p className="text-[#0E5182]">(+62)-888-888-888</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pesan Sukses */}
          {successMessage && <p className="text-green-600">{successMessage}</p>}

          {/* Pesan Error */}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <div>
            <InputText
              id="name"
              type="text"
              label="Nama Anda"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Nama Anda"
            />
          </div>

          <div>
            <InputText
              id="contact"
              type="text"
              label="Kontak Anda"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              placeholder="Kontak Anda"
            />
          </div>

          <div>
            <InputText
              id="email"
              type="email"
              label="Email Anda"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email Anda"
            />
          </div>

          <div>
            <TextArea
              id="message"
              label="Pesan Anda"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Pesan Anda"
            />
          </div>

          <button
            type="submit"
            className="w-32 px-6 py-2 bg-primary text-white hover:bg-[#1e375e] transition-colors"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
