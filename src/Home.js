import React from "react";
import "./Home.css";
import Product from "./Product";
import img_headphone from "./images/headphone.jpg";
import img_bag from "./images/bag.jpg";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home_image"
      />

      <div className="home_row">
        <Product
          id="123455"
          title="This is the first product"
          price={350}
          rating={5}
          image={img_bag}
        />
        <Product
          id="123455"
          title="This is the first product"
          price={350}
          rating={5}
          image={img_bag}
        />
      </div>
      <div className="home_row">
        <Product
          id="123455"
          title="This is the first product"
          price={350}
          rating={5}
          image={img_bag}
        />
        <Product
          id="123455"
          title="This is the first product"
          price={350}
          rating={5}
          image={img_bag}
        />
        <Product
          id="123455"
          title="This is the first product"
          price={350}
          rating={5}
          image={img_bag}
        />
      </div>
      <div className="home_row">
        <Product
          id="123455"
          title="This is the first product"
          price={350}
          rating={5}
          image={img_bag}
        />
      </div>
    </div>
  );
}

export default Home;
