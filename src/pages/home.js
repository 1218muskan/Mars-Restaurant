import Navbar from "../components/Navbar";
import MarsOasis from '../Images/MarsOasis.gif'
import Marquee from "react-fast-marquee";

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
    <div className="gpt3__blog-container">
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
              <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta, quasi soluta deleniti, quam sunt dolorum, impedit magnam tempora suscipit quod error fugit temporibus omnis hic ullam modi corrupti placeat?</p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta, quasi soluta deleniti, quam sunt dolorum, impedit magnam tempora suscipit quod error fugit temporibus omnis hic ullam modi corrupti placeat?</p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta, quasi soluta deleniti, quam sunt dolorum, impedit magnam tempora suscipit quod error fugit temporibus omnis hic ullam modi corrupti placeat?</p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta, quasi soluta deleniti, quam sunt dolorum, impedit magnam tempora suscipit quod error fugit temporibus omnis hic ullam modi corrupti placeat?</p>
            </FlipCard.Back>
          </FlipCard>
        </div>


        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta, quasi soluta deleniti, quam sunt dolorum, impedit magnam tempora suscipit quod error fugit temporibus omnis hic ullam modi corrupti placeat?</p>
            </FlipCard.Back>
          </FlipCard>
        </div>


    </div>
  </div>
        </>

     );
}

export default Home;