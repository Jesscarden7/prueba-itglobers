import ContactForm from "./ContactForm";
import styles from "./contactSection.module.css";

function ContactSection() {
    return ( 
        <div className={styles.contactSectionContainer}>
            <span>NEWSLETTER</span>
            <p>SUSCRIBITE</p>
            <p>Y enterate de todas las novedades</p>
            <ContactForm/>
        </div>
     );
}

export default ContactSection;