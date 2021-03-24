import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./FooterStyle.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="main_footer">
          <div className="pageLinks">
            <h1 style={{ color: "#fff", fontSize: "50px" }}>LOGO</h1>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="socialHandles">
            <div className="firstPart">
              <div className="logo">
                <YouTubeIcon />
              </div>
              <div className="logo">
                <LinkedInIcon />
              </div>
              <div className="logo">
                <InstagramIcon />
              </div>
            </div>
            <div className="secondPart">
              <div className="logo">
                <FacebookIcon />
              </div>
              <div className="logo">
                <TwitterIcon />
              </div>
              <div className="logo">
                <TelegramIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
