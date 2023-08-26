import HomeInfos from "../../components/homeCategory/HomeInfos";

const OrderTrackingPage = () => {
  return (
    <>
      <section className="md:container mx-auto mt-10">
        <h3 className="text-center text-lg font-medium border-b p-4">
          Siparis Takip
        </h3>
        <article>
          <div className="flex gap-x-10 p-10">
            <div className="flex flex-col w-1/3 border-r gap-y-2">
              <label htmlFor="">E-posta adresiniz:</label>
              <input
                className="border w-2/3 focus:outline-none py-1 px-2"
                type="text"
              />
              <label htmlFor="">Siparis Numaraniz:</label>
              <input
                className="border w-2/3 focus:outline-none py-1 px-2"
                type="text"
              />
              <button className="border py-2 px-4 bg-green-400 text-white rounded-md  w-1/3 hover:bg-green-500">
                Sorgula
              </button>
            </div>
            <div className="w-2/3">burada liste</div>
          </div>
        </article>
      </section>
      <HomeInfos />
    </>
  );
};

export default OrderTrackingPage;
