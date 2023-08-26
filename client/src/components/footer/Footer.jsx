import { GrSend } from "react-icons/gr";
import { Input } from "antd";
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10">
      <nav className="md:container mx-auto">
        <ul className="flex justify-between">
          <li className="text-md font-semibold flex flex-col w-1/6">
            <span className="mb-6">ILETISIM</span>
            <ul className="flex flex-col gap-y-6">
              <li>
                <span className="text-xs font-medium">
                  Meşrutiyet Mah. Rumeli Cad. No:30/1 İstanbul / Türkiye
                </span>
              </li>
              <li>
                <span className="text-xs font-medium">0850 241 0 323 </span>
              </li>
              <li>
                <span className="text-xs font-medium">
                  destek@eceninbutigi.com
                </span>
              </li>
            </ul>
          </li>
          <li className="text-md font-semibold flex flex-col">
            <span className="mb-6">POPULER KATEGOERILER</span>
            <ul className="flex flex-col gap-y-6">
              <li className="text-sm font-normal">Çizme Modelleri</li>
              <li className="text-sm font-normal">Kadın Babet</li>
              <li className="text-sm font-normal">Kadın Postal</li>
              <li className="text-sm font-normal">Kadın Bot</li>
              <li className="text-sm font-normal">Kadın Spor Ayakkabı</li>
              <li className="text-sm font-normal">Kadın Ev Terliği</li>
              <li className="text-sm font-normal">Kadın Casual Ayakkabı</li>
            </ul>
          </li>
          <li className="text-md font-semibold flex flex-col">
            <span className="mb-6">KURUMSAL</span>
            <ul className="flex flex-col gap-y-6">
              <li className="text-sm font-normal">Anasayfa</li>
              <li className="text-sm font-normal">Magazalarimiz</li>
              <li className="text-sm font-normal">Bize Ulasin</li>
            </ul>
          </li>
          <li className="text-md font-semibold flex flex-col">
            <span className="mb-6">MUSTERI ILISKILERI</span>
            <ul className="flex flex-col gap-y-6">
              <li className="text-sm font-normal">Üyelik</li>
              <li className="text-sm font-normal">Alışveriş</li>
              <li className="text-sm font-normal">Kargo & Teslimat</li>
              <li className="text-sm font-normal">KVKK</li>
            </ul>
          </li>
          <li className="text-md font-semibold flex flex-col">
            <span className="mb-6">YARDIM</span>
            <ul className="flex flex-col gap-y-6">
              <li className="text-sm font-normal">Müşteri Hizmetleri</li>
              <li className="text-sm font-normal">İade ve Değişim</li>
              <li className="text-sm font-normal">Kargo Takibi</li>
            </ul>
          </li>
          <li className="text-md font-semibold flex flex-col w-1/6">
            <span className="mb-6">E-BULTEN UYELIGI</span>
            <Input
              size="large"
              placeholder="E-posta adresinizi yazin..."
              className="rounded-full ant-select-selector border-none text-black p-4 text-xs font-meduim"
              suffix={<GrSend />}
            />
          </li>
        </ul>
      </nav>
      <p className="text-center mt-10 p-6 border text-sm font-medium">
        Copyright © 2023, {"ECE'NİN"} BUTİĞİ AYAKKABICILIK SANAYİ VE DIŞ TİCARET
        LTD. ŞTİ.
      </p>
    </footer>
  );
};

export default Footer;
