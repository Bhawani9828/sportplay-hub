import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGame } from "../redux/locationSlice";
import { toast } from 'react-toastify';
import gamecard from "../assets/img_1.jpg";
import gamecard2 from "../assets/img_2.jpg";
import gamecard3 from "../assets/img_3.jpg";
import gamecard4 from "../assets/Academies1.jpg";
import gamecard5 from "../assets/Academies2.jpg";
import gamecard6 from "../assets/Academies3.jpg";
import gamecard7 from "../assets/Academies4.jpg";
import gamecard8 from "../assets/Academies5.jpg";

function GameCard() {
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const dispatch = useDispatch();
  const [sports, setSports] = useState([]);

  const sportImages = [gamecard, gamecard2, gamecard3,gamecard4, gamecard5,gamecard6,gamecard7,gamecard8];

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.9:7000/api/academies/${selectedCity}/sports`
        );
        if (response.data && response.data.success) {
          setSports(response.data.sports);
        } else {
          console.error("No sports found for the selected city.");
          toast.error(`No sports available in ${selectedCity}`, {
            position: 'top-right',
            autoClose: 2000,
          });
        }
      } catch (error) {
        console.error("Error fetching sports:", error);
        toast.error("Error fetching sports data", {
          position: 'top-right',
          autoClose: 2000,
        });
      }
    };

    if (selectedCity) {
      fetchSports();
    }
  }, [selectedCity]);

  const handleGameClick = async (game) => {
    dispatch(setSelectedGame(game)); // Dispatch the action to set selected game

    try {
      const response = await axios.get(
        `http://192.168.1.9:7000/api/academies/${selectedCity}/${game}`
      );
      console.log('Response:', response);
      if (response.data && response.data.success) {
        console.log("Academies offering", game, "in", selectedCity, ":", response.data.academies);
      } else {
        console.error("No academies found for the selected game and city.");
        toast.error(`No academies offering ${game} in ${selectedCity}`, {
          position: 'top-right',
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error fetching academies:", error);
      toast.error("Error fetching academies data", {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };
  
  return (
    <section className="section-padding" id="section_2">
      <div className="container-fluid">
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Our Game
            </h5>
            <h2 className="text-primary mt-3">Our Recently Available Games</h2>
          </div>
          <div className="row g-5">
            {sports.map((sport, index) => (
              <div key={index} className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                <div className="project-item">
                  <div className="project-left bg-dark" />
                  <div className="project-right bg-dark" />
                  <img 
         src={sportImages[index]} 
          className="img-fluid h-100" 
          alt={sport} 
        />
        
                  <a
                    style={{ cursor: "pointer" }}
                    className="fs-4 fw-bold text-center"
                    onClick={() => handleGameClick(sport)}
                  >
                    {sport}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameCard;
