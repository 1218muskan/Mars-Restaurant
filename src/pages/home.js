import Navbar from "../components/Navbar";
import MarsOasis from '../Images/MarsOasis.gif'
// import Marquee from "react-fast-marquee";
import { FlipCard } from "react-flipme";

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


  {/* MENU */}

  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">MENU</h1>
    </div>
    <div className="menu-cont">
      {/* <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}


<div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Martian Cheetos</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>puffed and seasoned with local mars-grown spices, served with a creamy cheese dip.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>




        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Tharsis Rings</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>crispy onion rings made from locally-grown tharsis onions, served with a tangy mars-made ketchup.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Mons Wings </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>crispy chicken wings marinated in a spicy blend of mars-grown herbs and served with a zesty herb sauce.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Ferrum Salad </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a refreshing mix of locally-grown red-hued lettuce and vegetables, topped with crumbled mars-grown feta cheese and a tangy balsamic dressing.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Luft Potatoes </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>crispy and light potato chips made from mars-grown potatoes, served with a creamy mars-made dip and a sprinkle of mars-grown herbs.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Shrimp Feu </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>delicate and flavorful shrimp dumplings steamed to perfection and served with a mars-made spicy dipping sauce.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Deimos Scallops</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>succulent scallops pan-seared with lemon butter and mars-grown herbs, served with a side of mars-grown vegetables.
              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>




        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Martian Poke</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a fresh and colorful bowl featuring mars-grown vegetables and rice, topped with tender cubes of martian tuna.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Hellas Steak </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>juicy and flavorful steak cooked to perfection, topped with mars-grown chimichurri sauce and served with a side of mars-grown vegetables.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Solis Lamb </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>tender lamb shank slow-cooked with mars-grown root vegetables, served with a side of creamy mars-grown mashed potatoes.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Valles Tofu </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>flavorful stir-fried tofu made with mars-grown spices and vegetables, served with a side of fluffy mars-grown rice.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Terra Bistecca </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>juicy and tender steak grilled to perfection, served with a side of mars-grown roasted vegetables and creamy mars-grown mashed potatoes.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Mons Salmone</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>flaky and succulent salmon roasted with mars-grown herbs and lemon, served with a side of mars-grown rice and steamed vegetables.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>




        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Kikkererwten Kerrie</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a fragrant and flavorful curry made with mars-grown chickpeas and a blend of aromatic mars-grown spices, served with a side of fluffy mars-grown naan bread.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Marte Burger </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a juicy and flavorful burger made with mars-grown beef, served with a side of crispy mars-grown french fries and a mars-made ketchup.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Pollo Alfredo </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>tender and juicy chicken breast smothered in a creamy mars-made alfredo sauce, served over a bed of mars-grown linguine pasta.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Olympus Tart</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a warm and flaky apple tart made with mars-grown cinnamon and served with a scoop of mars-grown vanilla ice cream.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Rocky Brownies </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>rich and fudgy brownies loaded with mars-grown nuts and chocolate chunks, served warm with a dollop of whipped cream.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Marineris Bars</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>sweet and tangy lemon bars made with mars-grown lemons, served with a dusting of mars-grown powdered sugar.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>




        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Fragola Rossa</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a mouth-watering parfait featuring layers of creamy mars-grown yogurt, fresh mars-grown strawberries, and a crunchy mars-made granola topping.




              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Mons Cioccolato </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>rich and decadent chocolate cake made with mars-grown chocolate and dusted with mars-grown cocoa powder, served with a scoop of mars-grown vanilla ice cream.</p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Gelato di Mons </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>creamy and refreshing mars-grown vanilla ice cream drizzled with a mars-made caramel sauce and topped with crunchy mars-grown nuts.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Tharsis Tea </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a fragrant and refreshing blend of mars-grown herbs, served hot or iced.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Hellas Lemonade </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a thirst-quenching lemonade made with mars-grown lemons, served over ice.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Mons Mocha </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a decadent coffee drink made with mars-grown chocolate and topped with a swirl of whipped cream.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Elysium TÃ© </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a refreshing and aromatic blend of mars-grown herbs and spices, served hot or iced.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Arancia di Acidalia </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a sweet and tangy orange juice made with mars-grown oranges and served over ice.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Martini Mons </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>a classic martini made with a mars-made vermouth and garnished with a mars-grown olive.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Red Planet Margarita </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>this classic cocktail gets a martian twist with a splash of cranberry juice, giving it a vibrant red hue. made with tequila, lime juice, and a hint of agave nectar, it's the perfect way to start your meal.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Blue Moon Martini  </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>another colorful creation, this martini is made with blue curacao and vodka, giving it a brilliant blue color reminiscent of the martian sky. served with a twist of lemon.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Cosmic Colada </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>this tropical cocktail features pineapple juice, coconut cream, and white rum, all blended together for a creamy and refreshing treat. served with a slice of fresh pineapple.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Solar Flare Sangria </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>our signature sangria is made with red wine, brandy, and a mix of fresh fruit, including oranges, apples, and berries. it's the perfect drink for sharing with friends and fellow space travelers.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Martian Mule </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>this take on the classic moscow mule features ginger beer, lime juice, and vodka, with a splash of blue curacao for a bright green color. served in a copper mug for an extra touch of class.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Orbiting Orang </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>this refreshing cocktail features fresh orange juice, vodka, and a hint of triple sec, all shaken together and served over ice. it's the perfect way to cool down after a long day exploring the red planet.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>Alien Ale </h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>our signature beer is a light and refreshing ale, with a hint of citrus and a subtle hoppy finish. brewed with a special blend of martian-grown hops and barley, it's the perfect complement to any meal.


              </p>
            </FlipCard.Back>
          </FlipCard>
        </div>


    </div>
  </div>
        </>

     );
}

export default Home;