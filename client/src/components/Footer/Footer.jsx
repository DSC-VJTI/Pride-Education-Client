import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/FooterImages/Logo.jpg";
import "./FooterStyle.css";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <footer className="main_footer">
          <div className="first_part">
            <div className="heading">
              <h1
                style={{ color: "white", fontSize: "35px", margin: "0 55px" }}
              >
                Pride Commerce Academy
              </h1>
            </div>
            <div className="info" style={{ margin: "0 55px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0px 0 20px 0 "
                }}
              >
                <RoomIcon
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "2px 4px"
                  }}
                />
                <div style={{ margin: "2px 5px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "2px 4px"
                      }}
                    >
                      First Floor,Laxmi Anand Complex,Near Golibar Square,
                    </h4>
                    <h4
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "2px 4px"
                      }}
                    >
                      Itwari,Nagpur-440002
                    </h4>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0"
                }}
              >
                <PhoneIcon
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "2px 4px"
                  }}
                />
                <div style={{ margin: "2px 5px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "2px 4px"
                      }}
                    >
                      Cell No. &nbsp;&nbsp;&nbsp;&nbsp;: 7507106467
                    </h4>
                    <h4
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "2px 4px"
                      }}
                    >
                      Office No. : 8766927764
                    </h4>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0"
                }}
              >
                <EmailIcon
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "2px 4px"
                  }}
                />
                <div style={{ margin: "2px 5px" }}>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: "2px 4px"
                    }}
                  >
                    gsamarthancompany@gmail.com
                  </h4>
                </div>
              </div>
            </div>
            <div className="social">
              <h1
                style={{
                  textTransform: "capitalize",
                  color: "white",
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Follow Us
              </h1>
              <div style={{ color: "white", display: "flex" }}>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  href="https://www.youtube.com/channel/UCRSDemzjAQW0R4SqJ4KdSOg"
                >
                  <YouTubeIcon
                    style={{
                      margin: "10px 10px",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  />
                </a>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  href="https://instagram.com/ca_abhishekkhilwani"
                >
                  <InstagramIcon
                    style={{
                      margin: "10px 10px",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  />
                </a>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  href="https://www.facebook.com/www.prideca.in/"
                >
                  <FacebookIcon
                    style={{
                      margin: "10px 10px",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  />
                </a>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  href="https://t.me/ca_abhishekkhilwani_scmpe"
                >
                  <TelegramIcon
                    style={{
                      margin: "10px 10px",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="middlePart"></div>
          <div className="second_part" style={{ margin: "0 30px" }}>
            <div className="second_head">
              <h4
                style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
              >
                Privacy Policy
              </h4>
            </div>
            <div className="stick">
              <h4
                style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
              >
                |
              </h4>
            </div>
            <div className="copy">
              <h4
                style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
              >
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://dscvjti.tech/"
                  target="_blank"
                >
                  Made by @DSC VJTI
                </a>
              </h4>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
export default Footer;
