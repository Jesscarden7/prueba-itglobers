import styles from "./navbar.module.css";
import { IoUmbrellaOutline } from "react-icons/io5";
import { TbPaperBag } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineChair } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Pufi</div>
      <div className={styles.navbarMainOptions}>
        <div className={styles.options}>
          <IconContext.Provider value={{ size: "30px" }}>
            <div>
              <MdOutlineChair />
            </div>
            PUFI PUFF
          </IconContext.Provider>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.options}>
          <IconContext.Provider value={{ size: "30px" }}>
            <div>
              <IoUmbrellaOutline />
            </div>
            <div>PUFI RAIN</div>
          </IconContext.Provider>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.options}>
          <IconContext.Provider value={{ size: "30px" }}>
            <div>
              <FiShoppingBag />
            </div>
            <div>PUFI CART</div>
          </IconContext.Provider>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.options}>
          <IconContext.Provider value={{ size: "30px" }}>
            <div>
              <TbPaperBag />
            </div>
            <div>PUFI NAP</div>
          </IconContext.Provider>
        </div>
      </div>
      <div className={styles.navbarRigthOptions}>
        <div className={styles.rigthOptions}>
          MI CUENTA
          <IconContext.Provider value={{ size: "20px" }}>
            <div >
              <RiArrowDropDownLine/>
            </div>
          </IconContext.Provider>
        </div>
        <div className={styles.rigthDivider}></div>
        <div className={styles.rigthOptions}>MI COMPRA</div>
      </div>
    </nav>
  );
}

export default Navbar;
