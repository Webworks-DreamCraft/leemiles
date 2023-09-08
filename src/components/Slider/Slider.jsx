import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";
import ss5 from "../../assets/ss5.png";
import wojack from "../../assets/wojack.gif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const Slider = () => {
  const [instagramPics, setInstagramPics] = useState([]);

  useEffect(() => {
    const fetchInstagram = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=media_url,media_type&access_token=${
          import.meta.env.VITE_LONG_TOKEN
        }`
      );
      const insta = await response.json();
      setInstagramPics(insta.data);
    };
    fetchInstagram();
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {instagramPics.map((photo) => {
        return photo.media_type === "VIDEO" ? null : (
          <SwiperSlide>
            <div class="swiper-div">
              <img class="instaPhoto" src={photo.media_url} />
            </div>
          </SwiperSlide>
        );
      })}
      <SwiperSlide>
        <img src={ss1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ss2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ss3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ss4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ss5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={wojack} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
