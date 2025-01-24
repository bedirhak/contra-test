import Logo from "../assets/images/contra-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import {
  FaPhone,
  FaEnvelope,
  FaAddressBook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="cg-footer">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="cg-footer-container ">
            <div>
              <img
                src={Logo}
                alt="Contra Logo"
                className="mb-2 cg-footer-image"
              />
              <p className="cg-footer-desc">
                &nbsp;&nbsp;&nbsp;&nbsp;Petrol, yağ ve savunma sanayii
                alanlarında tedarik çözümleri sunan şirketimiz, sektördeki
                uzmanlığıyla enerji ve savunma sektörlerine kritik katkılar
                sağlamaktadır. Özellikle, Azerbaycan ve Kafkasya bölgesinin ilk
                motor ve endüstriyel yağ üreticisi olan Technol gibi öncü
                tedarikçilerle iş birliği yaparak, müşterilerimize yüksek
                kaliteli ve güvenilir ürünler sunmaktayız.
              </p>
            </div>
            <div className="cg-footer-navs">
              <NavLink to="/home" className="cg-color-red d-block">
                Anasayfa
              </NavLink>
              <NavLink to="/institutional" className="cg-color-red d-block">
                Kurumsal
              </NavLink>
              <NavLink to="/capabilities" className="cg-color-red d-block">
                Faaliyet Alanları
              </NavLink>
              {/* <NavLink to="/contact" className="cg-color-red d-block">
                Arge Inovasyon
              </NavLink> */}
              <NavLink to="/contact" className="cg-color-red d-block">
                İletişim
              </NavLink>
            </div>
            <div>
              <div className="cg-footer-contact">
                <h5 className="cg-color-red">İletişim</h5>
                <div>
                  <div>
                    <p>
                      <div className="d-flex align-items-center gap-2">
                        <div>
                          <FaPhone className="cg-color-red" />
                        </div>
                        <span className="cg-color-red">Telefon:</span>
                      </div>
                      <a href="tel:+905320540584">+(90) 532 054 05 84</a>
                    </p>
                    <p>
                      <div className="d-flex align-items-center gap-2">
                        <div>
                          <FaEnvelope className="cg-color-red" />
                        </div>
                        <span className="cg-color-red">E-Mail:</span>
                      </div>
                      <span>executive@contracorporate.com</span>
                    </p>
                    <p>
                      <div className="d-flex align-items-center gap-2 ">
                        <div className="align-self-start">
                          <FaAddressBook className="cg-color-red" />
                        </div>
                        <span className="cg-color-red align-self-start">
                          Adres:
                        </span>
                      </div>
                      <span>
                        Maliköy Başkent OSB mah. 20.Cad. No: 12G
                        Sincan/Ankara/Türkiye
                      </span>
                    </p>
                  </div>
                  <div>
                    <ul className="cg-footer-social">
                      <li>
                        <a>
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a>
                          <BsTwitterX />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaLinkedin />
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div
        className="cg-footer-rights d-flex justify-content-between text-white p-3"
        style={{ fontSize: "16px" }}
      >
        <div>
          Contra Group Petrol Madeni Yağ Ticaret A.Ş. Kurumsal Websitesinin Tüm
          Hakları Saklıdır.
        </div>
        <div>© 2024 - Contra Group</div>
      </div>
    </>
  );
};

export default Footer;
