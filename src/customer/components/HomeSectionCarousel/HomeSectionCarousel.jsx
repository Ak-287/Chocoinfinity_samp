import react, { useState } from "react";
import AliceCarouse from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex,setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    528: { items: 3 }, 
    1024: { items: 4 },

  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)
``

const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          autoPlay
          autoPlayInterval={1000}
          infinite 
        />
      </div>
    </div>
  );
};
export default HomeSectionCarousel;
