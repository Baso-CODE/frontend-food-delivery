import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          {" "}
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingridients and elevate your dining
          experience, one delicius meal the time{" "}
        </p>
        <button> view menu</button>
      </div>
    </div>
  );
};

export default Header;
