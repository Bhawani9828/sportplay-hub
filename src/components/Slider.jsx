import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Slider() {
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const selectedGame = useSelector((state) => state.location.selectedGame);
  const [academies, setAcademies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        let url = `http://192.168.1.9:7000/api/academies/${selectedCity}`;
        if (selectedGame) {
          url = `http://192.168.1.9:7000/api/academies/${selectedCity}/${selectedGame}`;
        }
        const response = await axios.get(url);
        if (response.data && response.data.success) {
          if (response.data.academies.length === 0) {
            toast.info(`No academies offering ${selectedGame} in ${selectedCity}`, {
              position: 'top-right',
              autoClose: 2000,
            });
          }
          setAcademies(response.data.academies);
        } else {
          toast.error("No data found for the selected city and game", {
            position: 'top-right',
            autoClose: 2000,
          });
        }
      } catch (error) {
        console.error("Error fetching academies:", error);
        toast.error("Failed to fetch academies. Please try again later.", {
          position: 'top-right',
          autoClose: 2000,
        });
      }
    };

    if (selectedCity) {
      fetchAcademies();
    }
  }, [selectedCity, selectedGame]); // Re-fetch when selectedCity or selectedGame changes

  const handleCardClick = (id) => {
    navigate(`/academy/${id}`);
  };

  return (
    <section className="artists-section section-padding" id="section_3">
      <div className="container properties">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="mb-5 text-primary">Top Sports Academies</h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2500 }}
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
                <div className="item" onClick={() => handleCardClick(academy._id)}>
                  <div className="w-100">
                    <a href="property-details.html">
                      <img
                        className="img-fluid w-100"
                        src={`http://192.168.1.9:7000${academy.photos[1]}`}
                        alt={`${academy.academyName}-photo`}
                      />
                    </a>
                    <div className="d-flex justify-content-between">
                      <span className="category">1 Year</span>
                      <h6>₹ {academy.fees}</h6>
                    </div>
                    <h4>{academy.academyName}</h4>
                    <p><strong>Coach:</strong> {academy.coachName}</p>
                    <ul>
                      {academy.sports.map((sport, index) => (
                        <li key={index}>{sport}</li>
                      ))}
                    </ul>
                    <div className="main-button">
                      <a href="property-details.html">Learn More</a>
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
