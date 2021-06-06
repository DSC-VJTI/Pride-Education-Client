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
import { withRouter } from "react-router-dom";
import "./FooterStyle.css";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  const history = useHistory();
  return (
    <>
      <div className="footer">
        <div className="first_part">
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={12} md={4}>
              <div
                style={{
                  color: "white",
                  fontSize: "35px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Pride Commerce Academy
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block" }}>
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
                          margin: "2px 4px",
                          textAlign: "left"
                        }}
                      >
                        First Floor,Laxmi Anand Complex,Near Golibar Square,
                      </h4>
                      <h4
                        style={{
                          color: "white",
                          fontSize: "16px",
                          fontWeight: "bold",
                          margin: "2px 4px",
                          textAlign: "left"
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
                        margin: "2px 4px",
                        wordBreak: "break-all"
                      }}
                    >
                      gsamarthancompany@gmail.com
                    </h4>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="social">
                <h1
                  style={{
                    textTransform: "capitalize",
                    color: "white",
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Follow Us
                </h1>
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
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
            </Grid>
          </Grid>
        </div>
        <div className="middlePart"></div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="second_head"
              onClick={() => history.push("/privacy-policy")}
            >
              Privacy Policy
            </div>
            {/* <div className="stick">
              |
            </div> */}
            <div
              className="second_head"
              onClick={() => history.push("/terms-and-conditions")}
            >
              Terms and Conditions
            </div>
            {/* <div className="stick">
              |
            </div> */}
            <div
              className="second_head"
              onClick={() => history.push("/refund-policy")}
            >
              Cancellation/Refund Policy
            </div>
            {/* <div className="stick">
              |
            </div> */}
          </div>
          <div className="copy">
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://dscvjti.tech/"
              target="_blank"
            >
              Made by @DSC VJTI
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(Footer);
