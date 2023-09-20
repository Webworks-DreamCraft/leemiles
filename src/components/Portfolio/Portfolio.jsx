import "./Portfolio.css";
import PhotoAlbum from "react-photo-album";

const Portfolio = () => {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="title transparent">PORTFOLIO</h1>
        <div className="line-break"></div>
        <section className="flex justify-center">
          <button className="border-white border-solid border-2 bg-black rounded-none">
            <p>View More</p>
          </button>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
