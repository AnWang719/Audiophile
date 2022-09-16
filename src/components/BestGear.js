import ImgText from "../ui/ImgText";
import BestGearImg from "../assets/image-best-gear.jpg";
import { useState } from "react";
function BestGear() {
  const [{ btnExist, counterExist, spanExist }] = useState(false);

  return (
    <ImgText
      src={BestGearImg}
      span=""
      title1="bring you the"
      textSpan="best"
      title2="audio gear"
      text="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
      btnExist={btnExist}
      counterExist={counterExist}
      spanExist={spanExist}
      order1="last"
      order2="first"
      span1="12"
      span2="12"
    />
  );
}

export default BestGear;
