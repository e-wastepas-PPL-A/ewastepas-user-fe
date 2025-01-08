import Hero from "../components/Hero/Hero";
import CardSlider from "../components/Category/CardSlider";
import Contact from "../components/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Hero />
      </div>
      <div className="flex items-center justify-center sm:pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-4xl sm:text-5xl pb-3">
            Kategori
          </h1>
          <p className="pt-2 text-sm">
            Pilih jenis sampah elektronik Anda untuk daur ulang yang lebih baik!
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <CardSlider />
      </div>
      <div id="Contact" className="flex items-center justify-center sm:pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-4xl sm:text-5xl pb-3">
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
