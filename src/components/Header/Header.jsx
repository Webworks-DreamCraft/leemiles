import "./Header.css";

const Header = () => {
  return (
    <div id="home">
      <h1 className="title">LEE MILES</h1>
      <div className="line-break"></div>
      <div className="header-info">
        <p>LIKE YOU I WAS</p>
        <p className="vertical-line">|</p>
        <p>1-585-245-8536</p>
        <p className="vertical-line">|</p>
        <p>lee@leemilestattoo.com</p>
      </div>
      <div className="btn-container">
        <a href="#contact">
          <button>BOOK APPOINTMENT</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
