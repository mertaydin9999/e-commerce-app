import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <form className="md:container lg:w-1/3 md:w-2/4 m-20 mx-auto h-screen z-10 bg-white">
      <div className="items-center justify-center flex flex-col  border border-gray-300 p-10 py-16 gap-y-6">
        <h4 className="text-3xl font-medium mb-10">Uye Girisi</h4>
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
        <button className="w-full p-2 font-medium bg-black text-white hover:bg-slate-800">
          Giris Yap
        </button>
        <div className="w-full">
          <Link
            to="/login"
            className="text-gray-600 underline text-sm float-right hover:text-black"
          >
            Sifremi unuttum
          </Link>
        </div>
        <div className="w-full flex  justify-center">
          <Link
            to="/register"
            className="text-gray-600  text-sm  hover:text-black pt-6 "
          >
            Uye degil misin ?{" "}
            <span className="text-black underline hover:text-gray-500">
              {" "}
              Hemen uye ol.
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
