import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import instagramLogo from "../../assets/instagram.svg"
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const Slider = () => {
  const [instagramPics, setInstagramPics] = useState([]);
  const backupPics = Array.from({ length: 5 }, (_, i) => {
    return{media_url: `leemiles/src/assets/ss${i}.png`}
  })

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
        insta.data.length > 0 ? 
        setInstagramPics(insta.data)
        : setInstagramPics(backupPics);
      } catch (err) {
        setInstagramPics(backupPics);
      }
    };
    fetchInstagram();
    console.log(backupPics)
  }, []);

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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
      instagramPics.length > 0 ? instagramPics.map((photo) => {
        return photo.media_type === "VIDEO" ? null : (
          <SwiperSlide>
            <div class="swiper-div">
              <>
              <img class="instaPhoto" src={photo.media_url} />
               </>
            </div>
          </SwiperSlide>
        );
      })
      : backupPics.map(() => {
        return(
          <SwiperSlide>
            <div class="swiper-div">
              <div class="placeholderSquare transparent"></div>
            </div>
          </SwiperSlide>
        )
      })
    }
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
