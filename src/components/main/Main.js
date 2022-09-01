import Navbar from "../navbar/Navbar";
import ShopButton from "../shopButton/ShopButton";
import styles from "./main.module.css"

function Main() {
    return ( 
        <div className={styles.mainContainer}>
            <Navbar/>
            <div className={styles.shopContainer}>
                <div>ESTÁR CÓMODO, <br/> NUNCA FUE TAN FACIL.</div>
                <div><ShopButton/></div> 
            </div>        
        </div>
     );
}

export default Main;