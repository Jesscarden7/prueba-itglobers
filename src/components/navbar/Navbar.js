import styles from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>Pufi</div>
      <div className={styles.navbarMainOptions}>
        <div>PUFI PUFF</div>
        <div>PUFI RAIN</div>
        <div>PUFI CART</div>
        <div>PUFI NAP</div>
      </div>
      <div className={styles.navbarRigthOptions}>
        <div>MI CUENTA</div>
        <div>MI COMPRA</div>
      </div>
    </nav>
  );
}

export default Navbar;
