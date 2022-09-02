import { useForm, ValidationError } from "@formspree/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import styles from "./contactSection.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xlevdyee");
  if (state.succeeded) {
    return <p>Gracias por suscribirte!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          placeholder="Ingresa tu email"
          id="email"
          type="email"
          name="email"
        />
        <label htmlFor="subscribeButton">
          <HiOutlineArrowRight />
        </label>
      </div>
      <ValidationError className={styles.errorMessage} prefix="Email" errors={state.errors} />
      <ValidationError className={styles.errorMessage} prefix="Email" field="email" errors={state.errors} />
      <button
        hidden
        id="subscribeButton"
        type="submit"
        disabled={state.submitting}
      ></button>
    </form>
  );
}

export default ContactForm;
