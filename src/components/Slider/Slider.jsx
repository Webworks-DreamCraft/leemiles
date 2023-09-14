import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import instagramLogo from "../../assets/instagram.svg";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const Slider = () => {
  const [instagramPics, setInstagramPics] = useState([]);
  const backupPics = Array.from({ length: 5 }, (_, i) => {
    return { media_url: `./ss${i}.png` };
  });

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=media_url,media_type&access_token=${
            import.meta.env.VITE_LONG_TOKEN
          }`
        );
        const insta = await response.json();
        insta.data.length > 0
          ? setInstagramPics(insta.data)
          : setInstagramPics(backupPics);
      } catch (err) {
        setInstagramPics(backupPics);
      }
    };
    fetchInstagram();
  }, []);

  const instagramDisplay = instagramPics.map((photo, i) => {
    return photo.media_type === "VIDEO" ? null : (
      <SwiperSlide key={i}>
        <div className="swiper-div">
          <>
            <img className="instaPhoto" src={photo.media_url} />
          </>
        </div>
      </SwiperSlide>
    );
  });

  const backupPicsDisplay = backupPics.map((_, i) => {
    return (
      <SwiperSlide key={i}>
        <div className="swiper-div">
          <div className="placeholderSquare"></div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        navigation
      >
        {instagramPics.length > 0 ? instagramDisplay : backupPicsDisplay}
      </Swiper>
      <section id="bottom-margin">
        <section className="follow-container">
          <p className="text">Follow On Instagram</p>
          <img className="logo" src={instagramLogo} />
        </section>
      </section>
    </>
  );
};

export default Slider;
