import styles from "./gallery.module.css"
import pufiNap from "../../images/pufi-nap.jpg";
import instaUmbrellas from "../../images/instagram-umbrellas.jpg";
import instaCart from "../../images/instagram-cart.jpg";
import instaBeach from "../../images/instagram-beach.jpg";
import instaPuff from "../../images/instagram-puff.jpg";
import instaFriends from "../../images/instagram-friends.jpg";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <span>INSTAGRAM</span>
      <p>#ESPUFI</p>
      <div className={styles.gallery}>
        <figure>
            <img src={instaUmbrellas} alt=""></img>
        </figure>
        <figure>
            <img src={instaCart} alt=""></img>
        </figure>
        <figure>
            <img src={instaBeach} alt=""></img>
        </figure>
        <figure>
            <img src={instaPuff} alt=""></img>
        </figure>
        <figure>
            <img src={pufiNap} alt=""></img>
        </figure>
        <figure>
            <img src={instaFriends} alt=""></img>
        </figure>
      </div>
    </div>
  );
}

export default Gallery;
