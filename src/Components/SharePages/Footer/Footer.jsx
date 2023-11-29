import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#152738] text-white">
      <div
        className="footer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <aside>
          <img
            src="/logo.png"
            style={{ width: "50px", height: "50px" }}
            alt="logo"
          />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <ul className="social-menu -ms-5">
            <li className="social-btn facebook" tooltip="Facebook">
              <a href="#">
                <FaFacebook size={"2rem"} />
              </a>
            </li>
            <li className="social-btn instagram" tooltip="Instagram">
              <a href="#">
                <FaInstagram size={"2rem"} />
              </a>
            </li>
            <li className="social-btn pinterest" tooltip="Pinterest">
              <a href="#">
                <FaPinterest size={"2rem"} />
              </a>
            </li>
            <li className="social-btn linkedin" tooltip="LinkedIn">
              <a href="#">
                <FaLinkedin size={"2rem"} />
              </a>
            </li>
          </ul>
        </aside>
        <nav className="flex flex-col">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
      </div>
      <div
        className="footer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <nav className="flex flex-col">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
