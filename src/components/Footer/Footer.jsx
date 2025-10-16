import "./Footer.css";
import Insta from "../../../public/insta_logo.png";
import SaviorLogo from "../../../public/savior_logo.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer--left">
        <p>Lee Miles</p>
        <p>1-585-484-9771</p>
        <p>LEE@LEEMILESTATTOO.COM</p>
        <div className="footer-left--logos">
          <a href="#">
            <p className="lm--logo">L.M.</p>
          </a>
          <a href="https://www.instagram.com/leemilestattoo/" target="_blank">
            <img src={Insta} className="insta--logo" alt="Instagram logo"></img>
          </a>
        </div>
      </div>
      <div className="vl"></div>
      <div className="footer--right">
        <a
          href="http://saviortattoo.com/"
          target="_blank"
          alt="Logo for the Savior Tattoo business"
        >
          <img src={SaviorLogo} className="savior--logo"></img>
        </a>
        <div className="footer-right--info">
          <p>LIKE YOU I WAS</p>
          <p>
            116 main st
            <br /> GENESEO, NY
            <br /> 14454
          </p>
        </div>
      </div>
    </footer>
  );
}
