import { LiaShippingFastSolid } from "react-icons/lia";
import { RxReload } from "react-icons/rx";
import { BsShieldLock } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
const HomeInfos = () => {
  return (
    <article className="flex mt-10 items-center  justify-center  border-t border-b p-14">
      <div className="flex flex-col border-r p-10 gap-y-2  items-center">
        <LiaShippingFastSolid className="icons" />
        <p>650 TL uzeri ucretsiz kargo</p>
      </div>
      <div className="flex flex-col border-r p-10 gap-y-2  items-center">
        <RxReload className="icons" />
        <p>Iptal & Degisim</p>
      </div>
      <div className="flex flex-col border-r p-10 gap-y-2  items-center">
        <BsShieldLock className="icons " />
        <p>Guvenli Alisveris</p>
      </div>
      <div className="flex flex-col p-10 gap-y-2  items-center">
        <BsCreditCard className="icons" />
        <p>Kredi kartina 12 taksit</p>
      </div>
    </article>
  );
};

export default HomeInfos;
