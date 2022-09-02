import ShopButton from "../shopButton/ShopButton";
import styles from "./pufiContent.module.css";

function PufiContent({ showShopButton, backgroundImage, pufiImage, pufiName, index}) {
  return (
    <div style={{"flexDirection": index%2 === 0 ? "row" : "row-reverse"}} className={styles.pufiContentContainer}>
      <div className={styles.leftSideContainer}>
          <img className={styles.backImage} src={backgroundImage} alt=""></img>
        <div className={styles.buttonContainer}>
            {showShopButton && <ShopButton />}
        </div>
      </div>
      <div className={styles.rigthSideContainer}>
        <div className={styles.sectionImage}>
          <img src={pufiImage} alt=""></img>
        </div>
        <div className={styles.rigthSideContent}>
          <span>{pufiName}</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.rigthSideContent}>
          Descripción del producto. Este es <br /> un texto simulado
        </div>
        <div className={styles.rigthSideContent}>{">"} VER MAS</div>
        <div className={styles.cachito}></div>
      </div>
    </div>
  );
}

export default PufiContent;
