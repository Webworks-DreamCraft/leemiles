import "./Portfolio.css";
import { useState, useEffect } from 'react'
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Portfolio = () => {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState();
  const [count, setCount] = useState(0);
  const [hasMoreClick, setHasMoreClick] = useState(true);

  useEffect(() => {
    const fetchPics = Array.from({ length: 6 }, (_, i) => {
      return { key:`${i}`, src: `./uploads/IMG${i}.jpg`, width: 1080, height: 1440 };
    });
    setPhotos(fetchPics)
    setCount(6)
  }, []);

  const handleViewMore = () => {
    setHasMoreClick(false);
    const morePics = Array.from({ length: 6 }, (_, i) => {
      return { key:`${i + count}`, src: `./uploads/IMG${i + count}.jpg`, width: 1080, height: 1440 };
    });
    const combinationPhotos = [...photos, ...morePics]
    setPhotos(combinationPhotos);
    setCount(count + 6);
  }

  return (
    <>
      <section id="portfolio" className="flex flex-col">
        <h1 className="title transparent">PORTFOLIO</h1>
        <div className="line-break "></div>
        <section className="my-8">
          <PhotoAlbum layout="rows" targetRowHeight={650} photos={photos} onClick={({ index }) => setIndex(index)}/>
          <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Thumbnails, Zoom]}
            />
        </section>
        <section className="flex justify-center">
          {hasMoreClick && (
            <button 
              onClick={handleViewMore}
              className="border-white border-solid border-2 bg-black rounded-none"
              >
              <p>View More</p>
            </button>
          )} 
        </section>
      </section>
    </>
  );
};

export default Portfolio;
