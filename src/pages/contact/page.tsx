import Container from "../../components/Container";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "react-bootstrap/Toast";

const page = () => {
  const form = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_j27bpsm", "template_dp212lq", form.current, {
          publicKey: "u6qhhjchXaC03xFDq",
        })
        .then(
          () => {
            setShow(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      <Container>
        <Toast
          className="cg-toast"
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <span className="me-auto">Mesajının Gönderildi</span>
          </Toast.Header>
        </Toast>
        <div>
          <h1 className="cg-part-title mt-3">Bize Ulaşın</h1>
          <div className="cg-contact-content">
            <div className="cg-contact-form">
              <form ref={form} onSubmit={sendEmail} id="cg-contact-form">
                <div className="cg-contact-form-inputs">
                  <div className="cg-contact-flex cg-flex-two">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Ad / Soyad*"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Telefon"
                      required
                    />
                  </div>
                  <div className="cg-contact-flex cg-flex-two">
                    <input type="text" name="company" placeholder="Şirket" />
                    <input
                      type="text"
                      name="from_email"
                      placeholder="E-mail adresi*"
                      required
                    />
                  </div>
                  <div className="cg-contact-flex">
                    <textarea
                      name="address"
                      id="address"
                      placeholder="Adres"
                    ></textarea>
                  </div>
                  <div className="cg-contact-flex cg-flex-three">
                    <input
                      type="text"
                      name="city"
                      placeholder="Şehir"
                      required
                    />
                    <input
                      type="text"
                      name="post_code"
                      placeholder="Posta Kodu"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Ülke"
                      required
                    />
                  </div>
                  <div className="cg-contact-flex">
                    <textarea
                      name="message"
                      id="subject"
                      placeholder="Mesaj"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="cg-contact-flex">
                  <button className="cg-contact-send" type="submit">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
            <div className="cg-contact-info">
              <p className="cg-contact-info-text">
                Contra Group Petrol Madeni Yağ Ticaret A.Ş.
              </p>
              <p className="cg-contact-info-text">
                Maliköy Başkent OSB mah. 20.Cad. No: 12G Sincan/Ankara/Türkiye
              </p>
              <div className="cg-contact-info-icon-container">
                <FaPhone className="cg-color-red" />
                <a href="tel:+905320540584">+(90) 532 054 05 84</a>
              </div>
           
              <div className="cg-contact-info-icon-container">
                <FaEnvelope className="cg-color-red" />

                <a href="mailto:executive@contracorporate.com">
                  executive@contracorporate.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
