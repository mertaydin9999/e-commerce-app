import logo from "../../assets/logo/logo.png";
import { Input } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-4">
      <div className="lg:container mx-auto flex items-center justify-between">
        <h1 className="text-xl">
          <img src={logo} alt="Logo" className="h-12 mr-2 " />
        </h1>

        <Input
          size="large"
          placeholder="Ara..."
          suffix={<SearchOutlined />}
          className="w-1/3 ant-select-selector rounded-none "
        />
        <div className="flex gap-x-6">
          <Link to="/" className="flex items-center gap-x-2">
            <i>
              <UserOutlined className="text-xl" />
            </i>
            <span className="text-sm">Uye Girisi</span>
          </Link>
          <Link to="/order-track" className="flex items-center  gap-x-2">
            <i>
              <UserOutlined className="text-xl" />
            </i>
            <span className=" text-sm">Siparis Takibi</span>
          </Link>
          <Link to="/" className="flex items-center  gap-x-2">
            <i>
              <ShoppingCartOutlined className="text-xl" />
            </i>
            <span className="text-sm">Sepetim</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
