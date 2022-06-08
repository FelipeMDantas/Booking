import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContex";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideIndex, setSlideIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/hotels/find/${id}`
  );

  const { dates } = useContext(SearchContext);

  console.log(dates);

  const handleOpening = (i) => {
    setSlideIndex(i);
    setOpenSlider(true);
  };

  const handleChangeSlide = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {openSlider && <div className="gap"></div>}
      {loading ? (
        "loading"
      ) : (
        <div className={openSlider ? "hotelContainerSlider" : "hotelContainer"}>
          {openSlider && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpenSlider(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleChangeSlide("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideIndex]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleChangeSlide("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} className="arow" />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    src={photo}
                    alt=""
                    className="hotelImg"
                    onClick={() => handleOpening(i)}
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
