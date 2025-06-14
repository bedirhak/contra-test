import Container from "../../components/Container";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";

const page = () => {
  const form = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

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
          <span className="me-auto">{t('contact.toast.success')}</span>
        </Toast.Header>
      </Toast>
      
      <div>
        <h1 className="cg-part-title mt-3">{t('contact.title')}</h1>
        <div className="cg-contact-content">
          <div className="cg-contact-form">
            <form ref={form} onSubmit={sendEmail} id="cg-contact-form">
              <div className="cg-contact-form-inputs">
                <div className="cg-contact-flex cg-flex-two">
                  <input
                    type="text"
                    name="from_name"
                    placeholder={t('contact.form.name')}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    required
                  />
                </div>
                <div className="cg-contact-flex cg-flex-two">
                  <input 
                    type="text" 
                    name="company" 
                    placeholder={t('contact.form.company')} 
                  />
                  <input
                    type="text"
                    name="from_email"
                    placeholder={t('contact.form.email')}
                    required
                  />
                </div>
                <div className="cg-contact-flex">
                  <textarea
                    name="address"
                    id="address"
                    placeholder={t('contact.form.address')}
                  ></textarea>
                </div>
                <div className="cg-contact-flex cg-flex-three">
                  <input
                    type="text"
                    name="city"
                    placeholder={t('contact.form.city')}
                    required
                  />
                  <input
                    type="text"
                    name="post_code"
                    placeholder={t('contact.form.post_code')}
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder={t('contact.form.country')}
                    required
                  />
                </div>
                <div className="cg-contact-flex">
                  <textarea
                    name="message"
                    id="subject"
                    placeholder={t('contact.form.message')}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="cg-contact-flex">
                <button className="cg-contact-send" type="submit">
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
          <div className="cg-contact-info">
            <p className="cg-contact-info-text">
              {t('contact.info.company_name')}
            </p>
            <p className="cg-contact-info-text">
              {t('contact.info.address')}
            </p>
            <div className="cg-contact-info-icon-container">
              <FaPhone className="cg-color-red" />
              <a href="tel:+905320540584">{t('contact.info.phone')}</a>
            </div>
            <div className="cg-contact-info-icon-container">
              <FaEnvelope className="cg-color-red" />
              <a href="mailto:executive@contracorporate.com">
                {t('contact.info.email')}
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
