import Photo from "../../assets/images/topuklu-1.jpeg";
import DiscountProducts from "./DiscountProducts";
import HomeInfos from "./HomeInfos";
import MultipleSwiper from "./MultipleSwiper";

const HomeCategory = () => {
  return (
    <>
      <section className="flex gap-4 md:container mx-auto mt-4">
        <article className="overflow-hidden transition-transform hover:scale-100">
          <div className="w-full h-full transform scale-100 hover:scale-110 transition duration-500 ease-in-out">
            <img className="w-full h-full object-cover" src={Photo} alt="" />
          </div>
        </article>
        <article className="overflow-hidden transition-transform hover:scale-100">
          <div className="w-full h-full transform scale-100 hover:scale-110 transition duration-500 ease-in-out">
            <img className="w-full h-full object-cover" src={Photo} alt="" />
          </div>
        </article>
      </section>
      <section className="flex gap-4 md:container mx-auto mt-4 mb-20 items-center">
        <article className=" text-white w-2/5 flex flex-col gap-y-4 justify-start">
          <h4 className="text-4xl text-black font-bold ">Yeni Gelenler</h4>
          <p className="text-sm text-black">
            Her gun koleksiyona eklenen yeni urunleri kesfet
          </p>
          <button className="bg-black text-white text-xs font-medium hover:bg-white hover:text-black border border-black w-2/5 py-2 transition duration-500 ease-in-out">
            ALISVERISE BASLA
          </button>
        </article>
        <article className=" text-white w-4/6">
          <MultipleSwiper />
        </article>
      </section>
      <section className="flex gap-4 md:container mx-auto">
        <article className="overflow-hidden transition-transform hover:scale-100">
          <div className="w-full h-full transform scale-100 hover:scale-110 transition duration-500 ease-in-out">
            <img className="w-full h-full object-cover" src={Photo} alt="" />
          </div>
        </article>
        <article className="overflow-hidden transition-transform hover:scale-100">
          <div className="w-full h-full transform scale-100 hover:scale-110 transition duration-500 ease-in-out">
            <img className="w-full h-full object-cover" src={Photo} alt="" />
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-4 md:container mx-auto mt-8  ">
        <h2 className="text-2xl font-semibold text-center mb-2 ">
          Indirimli Urunler
        </h2>
        <DiscountProducts />
      </section>
      <section className="flex flex-col gap-4  mt-8  ">
        <HomeInfos />
      </section>
    </>
  );
};

export default HomeCategory;
