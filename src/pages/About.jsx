import React from "react";
import DetailCard from "../components/DetailCard";
import Cart from "./Cart";

function About() {
  const data = {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    price: 25999,
    image: "https://images2.imgbox.com/38/85/iuYyO9RP_o.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  };
  return (
    <div>
      {/* <Cart /> */}
      <DetailCard productDetails={data} />
    </div>
  );
}

export default About;
