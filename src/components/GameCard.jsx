import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGame } from "../redux/locationSlice";
import { toast } from "react-toastify";
import cricket from "../assets/game-cart-img/cricket-new.svg";
import badminton from "../assets/game-cart-img/badminton-new.svg";
import football from "../assets/game-cart-img/football-new.svg";
import martialarts from "../assets/game-cart-img/martialarts-arts.svg";
import yoga from "../assets/game-cart-img/yoga-new.svg";
import gamecard6 from "../assets/game-cart-img/martialarts-arts.svg";
import gamecard7 from "../assets/game-cart-img/badminton-new.svg";
import gamecard8 from "../assets/game-cart-img/football-new.svg";
import gamecard9 from "../assets/game-cart-img/martialarts-arts.svg";

function GameCard() {
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const dispatch = useDispatch();
  const [sports, setSports] = useState([]);

  // Mapping object for sports images
  const sportImages = {
    cricket: cricket,
    badminton: badminton,
    football: football,
    martialarts: martialarts,
    yoga: yoga,
    other: [gamecard6, gamecard7, gamecard8, gamecard9], 
  };

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get(
          `https://vclottery.in/sportshub/api/academies/${selectedCity}/sports`
        );
        if (response.data && response.data.success) {
          setSports(response.data.sports);
        } else {
          console.error("No sports found for the selected city.");
          toast.error(`No sports available in ${selectedCity}`, {
            position: "top-right",
            autoClose: 2000,
          });
        }
      } catch (error) {
        console.error("Error fetching sports:", error);
        toast.error("Error fetching sports data", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    };

    if (selectedCity) {
      fetchSports();
    }
  }, [selectedCity]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleGameClick = async (game) => {
    dispatch(setSelectedGame(game)); 

    try {
      const response = await axios.get(
        `https://vclottery.in/sportshub/api/academies/${selectedCity}/${game}`
      );
      console.log("Response:", response);
      if (response.data && response.data.success) {
        console.log(
          "Academies offering",
          game,
          "in",
          selectedCity,
          ":",
          response.data.academies
        );
      } else {
        console.error("No academies found for the selected game and city.");
        toast.error(`No academies offering ${game} in ${selectedCity}`, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error fetching academies:", error);
      toast.error("Error fetching academies data", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <section className="section-padding pb-3" id="section_2">
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
              <div
                key={index}
                className="col-xxl-3 col-lg-4 col-md-6 col-6 wow fadeInUp"
              >
                <div className="project-item p-md-5 p-0">
                  <img
                    src={
                      sportImages[sport.toLowerCase()] ||
                      sportImages.other[index % sportImages.other.length]
                    }
                    className="img-fluid h-100"
                    alt={sport}
                  />
                  <a
                    style={{ cursor: "pointer" }}
                    className="fs-4 fw-bold text-center"
                    onClick={() => handleGameClick(sport)}
                  >
                    {capitalizeFirstLetter(sport)}
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
