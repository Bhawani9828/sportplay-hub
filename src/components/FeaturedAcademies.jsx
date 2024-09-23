import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const FeaturedAcademies = () => {
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const [academies, setAcademies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCity) {
      axios
        .get(`https://vclottery.in/sportshub/api/academies/${selectedCity}`)
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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <section className="artists-section section-padding" id="section_4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="mb-4 text-primary">Featured Academies & Trainers</h2>
          </div>
          {academies.map((academy) => (
            <div key={academy._id} className="col-lg-5 col-12" onClick={() => handleCardClick(academy._id)}>
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img
                    className="img-fluid w-100"
                    src={`https://vclottery.in/sportshub${academy.photos[2]}`}
                    alt={`${academy.academyName}-photo`}
                  />
                </div>
                <div className="artists-hover text-start pe-0">
                  <p>
                    <strong>Academy Name:</strong> {capitalizeFirstLetter(academy.academyName)}
                  </p>
                  <p>
                    <strong>Coach Name:</strong> {capitalizeFirstLetter(academy.coachName)}
                  </p>
                  <p>
                    <strong>All Game:</strong> {capitalizeFirstLetter(academy.sports.join(', '))}
                  </p>
                  <hr />
                  <p className="mb-0">
                    <strong>Youtube Channel:</strong> 
                    <Link to={academy.youtubeChannel}> {academy.youtubeChannelName}</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAcademies;
