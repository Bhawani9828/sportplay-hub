import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoLocationSharp } from "react-icons/io5";
function Slider() {
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const selectedGame = useSelector((state) => state.location.selectedGame);
  const [academies, setAcademies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        let url = `https://vclottery.in/sportshub/api/academies/${selectedCity}`;
        if (selectedGame) {
          url = `https://vclottery.in/sportshub/api/academies/${selectedCity}/${selectedGame}`;
        }
        const response = await axios.get(url);
        if (response.data && response.data.success) {
          if (response.data.academies.length === 0) {
            toast.info(
              `No academies offering ${selectedGame} in ${selectedCity}`,
              {
                position: "top-right",
                autoClose: 2000,
              }
            );
          }
          setAcademies(response.data.academies);
        } else {
          toast.error("No data found for the selected city and game", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      } catch (error) {
        console.error("Error fetching academies:", error);
        toast.error("Failed to fetch academies. Please try again later.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    };

    if (selectedCity) {
      fetchAcademies();
    }
  }, [selectedCity, selectedGame]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleCardClick = (id) => {
    navigate(`/academy/${id}`);
  };

  return (
    <section className="artists-section section-padding" id="section_3">
      <div className="container-fluid px-md-4 properties">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="mb-5 text-primary">Top Sports Academies</h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            autoplay={{ delay: 2500000 }}
            breakpoints={{
              "@0.00": { slidesPerView: 1, spaceBetween: 10 },
              "@0.75": { slidesPerView: 2, spaceBetween: 20 },
              "@1.00": { slidesPerView: 2, spaceBetween: 20 },
              "@1.50": { slidesPerView: 3, spaceBetween: 40 },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {academies.map((academy, index) => (
              <SwiperSlide key={index}>
                <div className="item p-lg-4 p-1">
                  <div className="w-100">
                    <a className="position-relative">
                      <img
                      style={{width:'521px', height:'336px'}}
                        className="img-fluid w-100 "
                        src={`https://vclottery.in/sportshub${academy.photos[1]}`}
                        alt={`${academy.academyName}-photo`}
                      />
                      <div className="verify_flex">
                        <div className="verified_tick">
                          <img
                            src="https://d146zb2foqhwdd.cloudfront.net/asset/images/white_tick.png"
                            alt=""
                            height="24"
                            width="24"
                          />
                          <span>Verified</span>
                        </div>
                        <div className="coach_sport">
                          <span>Academy</span>
                        </div>
                      </div>
                    </a>
                    <div>
                      <div className="d-flex justify-content-between">
                        <h4>{capitalizeFirstLetter(academy.academyName)}</h4>
                        <h4 className="text-primary">
                          <strong className="text-dark">Coach:</strong>{" "}
                          {capitalizeFirstLetter(academy.coachName)}
                        </h4>
                      </div>

                      <div className="fb_star_section fb_flex_version">
                        <div className="graph_flex">
                          <div className="graph_view">
                            <div className="rating_num">
                              <span className="rating_value">0 ★</span>
                            </div>
                            <div className="total_rating_width">
                              <span className="fb_font total_ratings">
                                0 Reviews
                              </span>
                            </div>
                            <div className="line">|</div>
                            <p className="mt-2 mb-0 text-primary">
                              ₹ {academy.fees}
                             
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="extra_info">
                        <div className="extra_sport">
                          <span>Kids</span>
                        </div>
                        <div className="extra_sport">
                          <span>Coaching</span>
                        </div>
                        <div className="extra_sport">
                          <span>Women Friendly</span>
                        </div>
                        <div className="extra_sport">
                          <span>Admission Open</span>
                        </div>
                      </div>
                      <div className="list_location">
                        <IoLocationSharp className="text-primary" />
                        <small className="fb_font location_add">
                        
                        
                          {academy.address}
                        </small>
                      </div>
                      <div className="mt-4 text-start">
                        <ul className="p-0">
                          {academy.sports.map((sport, index) => (
                            <li className="coach_academy" key={index}>
                              {sport}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* <div className="d-flex justify-content-between">
                      <span className="category">1 Year</span>
                      <h6>₹ {academy.fees}</h6>
                    </div> */}

                    <div className="main-button">
                      <a
                        onClick={() => handleCardClick(academy._id)}
                        style={{ cursor: "pointer", color: "#fff" }}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Slider;
