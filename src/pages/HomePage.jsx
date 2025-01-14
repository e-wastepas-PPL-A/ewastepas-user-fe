import Hero from "../components/Hero/Hero";
import CardSlider from "../components/Category/CardSlider";
import Contact from "../components/Contact/Contact";
import Proses from "../components/Proses/Proses";
import Ewhale from "../components/About/Ewhale";

export default function HomePage() {
  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Ewhale />
      </div>
      <div className="flex items-center justify-center sm:pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-3xl sm:text-4xl sm:pb-3">
            Kategori
          </h1>
          <p className="pt-2 text-base text-gray-600">
            Pilih jenis sampah elektronik Anda!
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <CardSlider />
      </div>
      <div className="flex items-center justify-center sm:pt-20 pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-3xl sm:text-4xl sm:pb-3">
            3 Proses Mudah
          </h1>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Proses />
      </div>
      <div
        id="Contact"
        className="flex items-center justify-center pt-10 sm:pt-20"
      >
        <div className="text-center">
          <h1 className="text-primary font-bold text-3xl sm:text-4xl sm:pb-3">
            Kontak Kami
          </h1>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Contact />
      </div>
    </>
  );
}
