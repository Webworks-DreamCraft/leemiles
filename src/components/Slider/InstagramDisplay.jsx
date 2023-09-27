import "swiper/css";
import "./Slider.css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const InstagramDisplay = ({ instagramPics }) => {
  return (
    <>
      {instagramPics.map((photo) => {
        return (
          photo.media_type === "VIDEO" ? null : 
          <SwiperSlide>
            <div class="swiper-div">
              <>
              <img class="instaPhoto" src={photo.media_url} />
               </>
            </div>
          </SwiperSlide>
        )
      })}
    </>
  )
}

export default InstagramDisplay