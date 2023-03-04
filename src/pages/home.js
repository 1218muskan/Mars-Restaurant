import Navbar from "../components/Navbar";
import MarsOasis from '../Images/MarsOasis.gif'

function Home() {
    return ( 
        <>
        <Navbar />
     <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Out of this world flavors, served on the Red Planet!</h1>
      <p>Experience the ultimate gastronomic adventure on the Red Planet! Savor the flavors of our exquisite cuisine, crafted from the finest Martian ingredients and cooked to perfection by our expert chefs. Enjoy breathtaking views of the Martian landscape from our restaurant's panoramic windows, while our attentive staff provides you with impeccable service. Come discover why our restaurant is hailed as the crown jewel of Martian dining - a true culinary masterpiece in the heart of the solar system.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={MarsOasis} />
    </div>
  </div>
        </>

     );
}

export default Home;