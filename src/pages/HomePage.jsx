import Hero from "../components/Hero/Hero";
import CardSlider from "../components/Category/CardSlider";
import Contact from "../components/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center sm:pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-4xl sm:text-5xl pb-3">
            Kategori
          </h1>
          <p className="">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <CardSlider />
      <div id="Contact" className="flex items-center justify-center sm:pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-4xl sm:text-5xl pb-3">
            KONTAK KAMI
          </h1>
        </div>
      </div>
      <Contact />
    </>
  );
}
