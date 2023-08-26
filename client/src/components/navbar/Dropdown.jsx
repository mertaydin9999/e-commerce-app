import "./dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown  hover:bg-white hover:text-black transition ease-in-out duration-300">
      <button className="dropbtn ">Sapka</button>
      <div className="dropdown-content border-b-2  ">
        <div className="row ">
          <h3 className="column ">
            <a>Category 1</a>
          </h3>
          <h3 className="column">
            <a>Category 1</a>
          </h3>
          <h3 className="column">
            <a>Category 1</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
