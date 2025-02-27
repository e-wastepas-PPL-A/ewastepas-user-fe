import CardSlider from "../components/Category/CardSlider";
import CardProduct from "../components/Category/CardProduct";
import SearchBar from "../components/SearchBar/SearchBar";

export default function CategoryPage() {
  return (
    <>
      <div className="pt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <CardSlider />
        </div>
        <div className="flex items-center justify-center pt-10">
          <div className="text-center">
            <h1 className="text-primary font-bold text-4xl sm:text-5xl pb-3">
              Pick & Pack
            </h1>
            <p className="pb-5 text-gray-600">
              Pilih jenis sampah elektronik Anda untuk daur ulang yang lebih
              baik!
            </p>
          </div>
        </div>
        <SearchBar />
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <CardProduct />
        </div>
      </div>
    </>
  );
}
