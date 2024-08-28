import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate, Link } from "react-router-dom";

function Slider() {
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const [academies, setAcademies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCity) {
      axios
        .get(`http://192.168.1.9:7000/api/academies/${selectedCity}`)
        .then((response) => {
          if (response.data && response.data.success) {
            setAcademies(response.data.academies);
          } else {
            console.error("No data found for the selected city");
          }
        })
        .catch((error) => {
          console.error("Error fetching academies:", error);
        });
    }
  }, [selectedCity]);

  const handleCardClick = (id) => {
    navigate(`/academy/${id}`);
  };

  return (
    <section className="artists-section section-padding" id="section_2">
      <div className="container properties">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="mb-5 text-primary"> Top Sports Academies</h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // loop={true}
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
                {/* <div
                  className="card-deck"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCardClick(academy._id)}
                >
                  <div
                    className="card p-1 border-0"
                    style={{ boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.08)" }}
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid w-100"
                        src={`http://192.168.1.9:7000${academy.photos[1]}`}
                        alt={`${academy.academyName}-photo`}
                      />
                      <div className="position-absolute top-0">
                        <img
                          className="img-fluid w-24 h-24"
                          src={`http://192.168.1.9:7000${academy.logo}`}
                          alt={`${academy.academyName}-logo`}
                        />
                      </div>
                    </div>
                    <div className="card-body text-start">
                      <p><strong>Academy Name:</strong> {academy.academyName}</p>
                      <p><strong>Coach Name:</strong> {academy.coachName}</p>
                      <p><strong>All Game:</strong> {academy.sports.join(", ")}</p>
                      <hr />
                      <p className="mb-0">
                        <strong>YouTube Channel:</strong> 
                        <Link to={academy.youtubeChannel}>{academy.coachName} Official</Link>
                      </p>
                      <p className="card-text mt-3 font-bold text-primary">
                        ₹ {academy.fees} / per month
                      </p>
                    </div>
                  </div>
                </div> */}

                <div
                  className="item"
                  onClick={() => handleCardClick(academy._id)}
                >
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
                  <h4>
                    {academy.academyName}
                  </h4>
                  <p>
                  <strong>Coach:</strong> {academy.coachName}
                  </p>
                  <ul>
                    <li>
                      {academy.sports[0]}: 
                    </li>
                    <li>
                      {academy.sports[1]} 
                    </li>
                    <li>
                      {academy.sports[2]} 
                    </li>
                    <li>
                      {academy.sports[3]} 
                    </li>
                  
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

<div className="item">
  <a href="property-details.html">
    <img src="assets/images/property-01.jpg" alt="" />
  </a>
  <span className="category">Luxury Villa</span>
  <h6>$2.264.000</h6>
  <h4>
    <a href="property-details.html">18 New Street Miami, OR 97219</a>
  </h4>
  <ul>
    <li>
      Bedrooms: <span>8</span>
    </li>
    <li>
      Bathrooms: <span>8</span>
    </li>
    <li>
      Area: <span>545m2</span>
    </li>
    <li>
      Floor: <span>3</span>
    </li>
    <li>
      Parking: <span>6 spots</span>
    </li>
  </ul>
  <div className="main-button">
    <a href="property-details.html">Schedule a visit</a>
  </div>
</div>;
