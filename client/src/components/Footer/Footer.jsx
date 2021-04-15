import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/FooterImages/Logo.jpg";
import "./FooterStyle.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="main_footer">
          <img className="logo" style={{ backgroundColor: "red" }} src={Logo} />
          <div className="pageLinks">
            <Link className="footerLinks" to="">
              About
            </Link>
            <Link className="footerLinks" to="">
              Contact
            </Link>
            <Link className="footerLinks" to="">
              Privacy Policy
            </Link>
          </div>
          <div className="socialHandles">
            <div className="firstPart">
              <div className="logo">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCRSDemzjAQW0R4SqJ4KdSOg"
                >
                  <YouTubeIcon className="mediaHandles" />
                </a>
              </div>
              <div className="logo">
                <a
                  target="_blank"
                  href="https://instagram.com/ca_abhishekkhilwani"
                >
                  <InstagramIcon className="mediaHandles" />
                </a>
              </div>
            </div>
            <div className="secondPart">
              <div className="logo">
                <a
                  target="_blank"
                  href="https://www.facebook.com/www.prideca.in/"
                >
                  <FacebookIcon className="mediaHandles" />
                </a>
              </div>
              <div className="logo">
                <a href="https://t.me/ca_abhishekkhilwani_scmpe">
                  <TelegramIcon className="mediaHandles" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
