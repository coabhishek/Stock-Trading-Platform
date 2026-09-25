import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSetion";
import RightSection from "./RightSections";
import Universe from "./Universe";

function Products() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="./imgs/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more"
        googlePlay="./imgs/googlePlayBadge.svg"
        appStore="./imgs/appstoreBadge.svg"
      />
      <RightSection
        imageUrl="./imgs/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more "
      />

      <LeftSection
        imageUrl="./imgs/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay="./imgs/googlePlayBadge.svg"
        appStore="./imgs/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="./imgs/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite Connect"
      />

      <LeftSection
        imageUrl="./imgs/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay="./imgs/googlePlayBadge.svg"
        appStore="./imgs/appstoreBadge.svg"
      />

      <Universe />
      <div className="text-center pb-5 mb-5">
        <button className="btn btn-primary ">Sign Up for Free</button>
      </div>
    </>
  );
}

export default Products;
