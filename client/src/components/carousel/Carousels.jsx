import { Carousel } from "antd";
import indir from "./indir.jpeg";
import Banner from "./banner.jpeg";
const Carousels = () => {
  const contentStyle = {
    height: "560px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel className="lg:container mx-auto mt-10" autoplay effect="fade">
      <div>
        <img
          style={contentStyle}
          className="w-full object-cover"
          src={indir}
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          className="w-full object-cover"
          src={Banner}
          alt=""
        />
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Carousels;
