import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Link } from "react-router-dom";
import "./FooterStyle.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="main_footer">
          <h1
            className="LogoHeading"
            style={{ color: "rgb(242, 101, 34)", fontSize: "50px" }}
          >
            LOGO
          </h1>
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
                <Link to="">
                  <YouTubeIcon />
                </Link>
              </div>
              <div className="logo">
                <Link to="">
                  <LinkedInIcon />
                </Link>
              </div>
              <div className="logo">
                <Link to="">
                  <InstagramIcon />
                </Link>
              </div>
            </div>
            <div className="secondPart">
              <div className="logo">
                <Link to="">
                  <FacebookIcon />
                </Link>
              </div>
              <div className="logo">
                <Link to="">
                  <TwitterIcon />
                </Link>
              </div>
              <div className="logo">
                <Link to="">
                  <TelegramIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
