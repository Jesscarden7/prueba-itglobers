import styles from "./footer.module.css";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { ImInstagram, ImQrcode } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>Pufi</div>
        <div className={styles.products}>
          <p>PUFI RAIN</p>
          <p>PUFI PUFF</p>
          <p>PUFI CART</p>
          <p>PUFI NAP</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.options}>
          <p>CONTACTO</p>
          <p>AYUDA</p>
          <p>CÓMO COMPRAR</p>
          <p>TERMINOS {"&"} CONDICIONES</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.backUp}>
          <p>COMPRA 100% SEGURA</p>
          <div className={styles.security}>
            <IconContext.Provider value={{ size: "50px" }}>
              <div>
                <ImQrcode /> <MdOutlineSecurity />
              </div>
            </IconContext.Provider>
            <div>
              <span>
                COMPRÁ CON <br /> LA GARANTIA <br /> DE PUFI
              </span>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <IconContext.Provider value={{ size: "25px" }}>
          <div className={styles.socialMedia}>
            SEGUINOS EN <GrFacebookOption /> <GrTwitter /> <ImInstagram />
          </div>
        </IconContext.Provider>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.dividerBottom}></div>
        <p>PUFI Copyrigth 2017 - Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
