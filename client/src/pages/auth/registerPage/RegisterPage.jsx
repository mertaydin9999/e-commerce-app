import { useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const RegisterPage = () => {
  const [phone, setPhone] = useState("");

  return (
    <form className="md:container lg:w-2/5 md:w-2/4 m-10 mx-auto h-screen z-10 bg-white">
      <div className="items-center justify-center flex flex-col  border border-gray-300 p-10  gap-y-6">
        <h4 className="text-3xl font-medium mb-2">Uye Olma</h4>
        <Input
          placeholder="Adiniz"
          className="rounded-none ant-select-selector text-md p-2"
        />
        <Input
          placeholder="Soyadiniz"
          className="rounded-none ant-select-selector text-md p-2"
        />
        <Input
          placeholder="E-mail"
          className="rounded-none ant-select-selector text-md p-2"
        />
        <Input.Password
          placeholder="Sifre"
          className="rounded-none ant-select-selector text-md p-2"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <PhoneInput
          defaultCountry="tr"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className="w-full rounded-none "
          placeholder="Numaranizi giriniz..."
        />
        <div className="flex flex-row items-start justify-start w-full -mt-1">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="thing" />
          <label htmlFor="" className="text-xs pl-2">
            Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak
            istiyorum.
          </label>
        </div>
        <div className="flex flex-row items-start justify-start w-full -mt-4">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="thing" />
          <label htmlFor="" className="text-xs pl-2">
            Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak
            istiyorum.
          </label>
        </div>
        <div className="flex flex-row items-start justify-start w-full -mt-4">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="thing" />
          <label htmlFor="" className="text-xs pl-2">
            Üyelik koşullarını ve kişisel verilerimin korunmasını kabul
            ediyorum.
          </label>
        </div>

        <button className="w-full p-2 mt-6  font-medium bg-black text-white hover:bg-slate-800">
          Uye Ol
        </button>

        <div className="w-full flex  justify-center">
          <Link
            to="/login"
            className="text-gray-600  text-sm  hover:text-black pt-6 "
          >
            <span className="text-black underline hover:text-gray-500 ">
              {" "}
              Zaten uyeyim
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
