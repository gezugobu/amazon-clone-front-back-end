import React from "react";
import "./Home.css";
import Product from "./Product";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel} from 'react-responsive-carousel'

function Home(){
  return (
    <div className="home">
      <div className="home__container">
      <Carousel
          showThumbs={false}
          infiniteLoop
          showArrows={true}
          interval={3000}
          autoPlay
          transitionTime={1500}
          stopOnHover={false}
          swipeable={true}
          emulateTouch
          showIndicators={false}
          showStatus={false}
        >
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
<img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"
          alt=""
        />
<img
          className="home__image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt=""
        />

<img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61GNlm8xShL._SX3000_.jpg"
          alt=""
        />

<img
          className="home__image"
          src="https://business.amazon.com/assets/global/images/events/reshape-2022/heroes/1480-Reshape-AEM-Hero-Banner-Blog-Half-EN-2880x960.png.transform/1440x480/image.jpg"
          alt=""
        />
        </Carousel>
        <div className="home__row">
<Product
            id="34112321"
            title="SIHOO Ergonomic Office Chair, Computer Desk Chair with Adjustable Sponge lumbar Support, Comfortable Thick Cushion High Back Desk Chair with Adjustable Headrest and PU armrests(Black)"
            price={255.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61luOx-27oL._AC_SL1000_.jpg"
          />
<Product
            id="12321341"
            title="All-in-One PMP Exam Prep Kit 6th Edition Plus Agile: Based on 6th Ed. PMBOK Guide (Test Prep)
            Paperback"
            price={88.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Swg6aqdnL._SX258_BO1,204,203,200_.jpg"
          />
<Product
            id="49538094"
            title="Vospeed 5 IN 1 Stand Mixer, 850W Tilt-Head Multifunctional Electric Mixer with 7.5 QT Stainless Steel Bowl, 1.5L Glass Jar, Meat Grinder, Hook, Whisk, Beater Dishwasher Safe - Black"
            price={209.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71bFtbpmddL._AC_UY218_.jpg"
          />
        </div>
            <div className="home__row"> 
<Product
            id="49031850"
            title="Ring Stick Up Cam Battery HD security camera with custom privacy controls, Simple setup, Works with Alexa - Black"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/713qhtEOq5L._SL1500_.jpg"
          />
<Product
            id="2344593074"
            title="iTouch Sport 3 Smartwatch: Gold Case with Gold Mesh Strap"
            price={69.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRs4Hr6V_5fOorb8JYpY_T_1EpBL2OaVyNDQHDUqxiulJI7Blsk9TTzyTeEkw9j2qR-m63Yc8N4yf4OGPLH9nnznVG31qOk&usqp=CAY"
          />
<Product
            id="3543453254"
            title="Ember Temperature Control Smart Mug 2, 14 oz, Black, 80 min. Battery Life - App Controlled Heated Coffee Mug - Improved Design"
            price={144.00}  
            rating={4}
            image="https://m.media-amazon.com/images/I/61VXH79P8sL._AC_SL1500_.jpg"
          />
        </div>
            <div className="home__row">
<Product
            id="3254354345"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Silver"
            price={999.00}  
            rating={5}
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SL1500_.jpg"
          />
<Product
            id="7916354345"
            title="Gibson Elite Everston 12 Piece Dinnerware Set, Red"
            price={44.99}  
            rating={4}
            image="https://m.media-amazon.com/images/I/61L6MQT2w3L._AC_SL1024_.jpg"
          />
<Product
            id="4273054365"
            title="Arc'teryx Fission SV Jacket Men's | Versatile, Synthetically Insulated, Gore-Tex Waterproof Jacket for Severe Weathe"
            price={799.00}  
            rating={4}
            image="https://m.media-amazon.com/images/I/71L97TxFpFS._AC_UL1500_.jpg"
          />     
          </div>
            <div className="home__row">
<Product
            id="3254693172"
            title="NIVEA Essentially Enriched Body Lotion for Dry Skin, Pack of 2, 16.9 Fl Oz Pump Bottles"
            price={10.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZBdw-EGLS._SL1500_.jpg "
          />
<Product
            id="8916354347"
            title="Nike T90 Laser III Firm Ground Soccer Boots"
            price={329.29}
            rating={4}
            image="https://m.media-amazon.com/images/I/61JtwHBhYuL._AC_UY500_.jpg"
          />
<Product
            id="3571054346"
            title="Men's Small Messenger Bag Crossbody Bag Travel Bag Casual Sling Pack Purse Wallet Travel Handbags"
            price={18.99}  
            rating={4}
            image="https://m.media-amazon.com/images/I/61X3hj71MML._AC_UY575_.jpg"
          />     
          </div>
            <div className="home__row">
<Product
            id="4693253170"
            title="title: Canon EOS R Mirrorless Full Frame Camera w/ RF24-105mm F4-7.1 IS STM Lens Kit - Vlogging Camera 4K, Content Creator Camera, Wi-Fi, 30.3 MP Full-Frame CMOS..."
            price={2099.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71B33yx+J2L._AC_SL1500_.jpg "
          />
<Product
            id="8016324941"
            title="title: Apple AirPods Max - Space Gray"
            price={449.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SL1500_.jpg"
          />
<Product
            id="2571654343"
            title="Toshiba EM925A5A-BS Microwave Oven with Sound On/Off ECO Mode and LED Lighting, 0.9 Cu Ft/900W, Black Stainless Steel"
            price={114.99}  
            rating={4}
            image="https://m.media-amazon.com/images/I/61pALU94wYL._AC_SL1000_.jpg"
          />     
          </div>
            <div className="home__row">
<Product
            id="29332908"
            title="
            Faux Leather Upholstered Platform Bed Frame with Headboard and 4 Storage Drawers - PU Upholstered Platform Bed - Black Faux Bed Frame with Roll Out Drawers..."
            price={449.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61RqDJX2zJL._AC_SL1500_.jpg "
          />
<Product
            id="90829332"
            title="
            HP Home Office Bundle with 2 x E273 27 Monitors (HDMI, DisplayPort) - HP USB-C Dock - Dual Monitor Stand - Wireless Keyboard and Mouse, Gel Wrist Pad - 32GB USB Drive - Surge Protector and More"
            price={1099.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71U1YELe8DL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;








//https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg

//https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg

//https://business.amazon.com/assets/global/images/hero/AB-Homepage-Hero-Test-2.png.transform/1440x480/image.jpg

//https://business.amazon.com/assets/global/images/events/reshape-2022/heroes/1480-Reshape-AEM-Hero-Banner-Blog-Half-EN-2880x960.png.transform/1440x480/image.jpg




