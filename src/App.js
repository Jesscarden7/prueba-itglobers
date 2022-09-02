import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Main from "./components/main/Main";
import PufiContent from "./components/pufiContent/pufiContent";
import pufiRain from "./images/pufi-rain.jpg";
import pinkUmbrella from "./images/pink-umbrella.jpg";
import pufiPuff from "./images/pufi-puff.jpg";
import pufiPink from "./images/pufi-pink.jpg";
import pufiCart from "./images/pufi-cart.jpg";
import pufiBags from "./images/pufi-bags.jpg";
import pufiNap from "./images/pufi-nap.jpg";
import pufiBlue from "./images/pufi-blue.jpg";


function App() {

  const puffies = [
    {
      showShopButton: true,
      backgroundImage: pufiRain,
      pufiImage: pinkUmbrella,
      pufiName: "Pufi RAIN"
    },
    {
      showShopButton: false,
      backgroundImage: pufiPuff,
      pufiImage: pufiPink,
      pufiName: "Pufi PUFF"
    },
    {
      showShopButton: false,
      backgroundImage: pufiCart,
      pufiImage: pufiBags,
      pufiName: "Pufi CART"
    },{
      showShopButton: false,
      backgroundImage: pufiNap,
      pufiImage: pufiBlue,
      pufiName: "Pufi NAP"
    }
  ]

  return (
    <div>
      <Main/>
      {puffies.map( (puffi, index) => {
        return <PufiContent showShopButton = {puffi.showShopButton} backgroundImage={puffi.backgroundImage} pufiImage = {puffi.pufiImage} pufiName = {puffi.pufiName} index = {index} key = {index}/>
      })}
      <Gallery/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
