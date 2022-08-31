import styles from "./footer.module.css"

function Footer() {
    return ( 
        <div className={styles.footer}>
            <div>
                Logo
            </div>
            <div>
                <p>PUFI RAIN</p>
                <p>PUFI PUFF</p>
                <p>PUFI CART</p>
                <p>PUFI NAP</p>
            </div>
            <div>
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>CÓMO COMPRAR</p>
                <p>TERMINOS {"&"} CONDICIONES</p>
            </div>
            <div>
                <p>COMPRA 100% SEGURA</p>
                <div>
                    QR
                    Logo seguridad
                    <p>COMPRA CON LA GARANTIA DE PUFI</p>
                </div>
            </div>
            <div>
                SEGUINOS EN LOGO FB TWITTER INSTAGRAM
            </div>
        </div>
     );
}

export default Footer;