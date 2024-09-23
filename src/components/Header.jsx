import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import axios from "axios";
import { FaSearchLocation } from "react-icons/fa";
import Typed from "typed.js";
import { setSelectedCity } from "../redux/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import Bhilwara from "../assets/cityimg/Bhilwara.png";
import jaipur from "../assets/cityimg/jaipur.png";
import Tonk from "../assets/cityimg/Tonk.png";
import Ajmer from "../assets/cityimg/Ajmer.png";
import Hanumangarh from "../assets/cityimg/Hanumangarh.png";
import Rajsamand from "../assets/cityimg/Rajsamand.png";
import Sambhar from "../assets/cityimg/Sambhar.png";
import Udaipur from "../assets/cityimg/Udaipur.png";
import Kota from "../assets/cityimg/bansur.png";
import Sodala from "../assets/cityimg/Sodala.png";
import logo from "../assets/newlogo.png";
import { LuMousePointerClick } from "react-icons/lu";

function Header() {
  const [areas, setAreas] = useState([]);
  const dispatch = useDispatch();
  const selectedArea = useSelector((state) => state.location.selectedCity);
  const [localSelectedArea, setLocalSelectedArea] = useState("jaipur");
  const textRef = useRef(null);
  const [showAllCities, setShowAllCities] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to Sports Hub 2024",
        "Join us for an exciting season!",
        "Stay tuned for more updates!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    console.log($);
    if ($ && $.fn.sticky) {
      $(".navbar").sticky({ topSpacing: 0 });
    } else {
      console.error("Sticky plugin is not loaded.");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://vclottery.in/sportshub/api/areas")
      .then((response) => {
        if (response.data && response.data.success) {
          setAreas(response.data.areas);
          if (!selectedArea) {
            dispatch(setSelectedCity("jaipur")); // Set default city in Redux
            setLocalSelectedArea("jaipur"); // Set local state default
          }
        } else {
          console.error("Unexpected API response:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [dispatch, selectedArea]);

  useEffect(() => {
    if (selectedArea) {
      setLocalSelectedArea(selectedArea);
    }
  }, [selectedArea]);

  const handleAreaChange = (e) => {
    const area = e.target.value;
    setLocalSelectedArea(area);
    dispatch(setSelectedCity(area));
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      const modalElement = document.getElementById("searchModal");
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 5000); // Open modal after 5 seconds

    return () => clearTimeout(modalTimeout); // Clear timeout if component unmounts
  }, []);

  const handleCityClick = (city) => {
    setLocalSelectedArea(city);
    dispatch(setSelectedCity(city));

    // Close the modal after a city is selected
    const modalElement = document.getElementById("searchModal");
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  };



  const toggleShowAllCities = () => {
    setShowAllCities(!showAllCities);
  };

  const cityImageMap = {
    jaipur: jaipur,
    bhilwara: Bhilwara,
    tonk: Tonk,
    ajmer: Ajmer,
    hanumangarh: Hanumangarh,
    rajsamand: Rajsamand,
    sambhar: Sambhar,
    udaipur: Udaipur,
    kota: Kota,
    jaipurr: Sodala,
  };


    // Function to handle icon click
    const handleIconClick = () => {
      const selectElement = document.getElementById("area-select");
      if (selectElement) {
        selectElement.focus();
        // Attempt to open the dropdown
        // Note: Some browsers may not allow programmatic opening of select dropdowns
        // As an alternative, you can use a custom dropdown component for better control
      }
    };

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 d-flex justify-content-center flex-wrap">
              <p className="d-flex me-4 mb-0">
                <i className="bi-person custom-icon me-2" />
                <strong className="text-dark">
                  <span ref={textRef}></span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg d-block">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="" style={{ width: "52px" }} />
          </a>
          <a href="/login" className="btn custom-btn d-lg-none ms-auto me-4">
            Login
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  Game
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Academies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Event
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_6">
                  Latest News
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary btn-md-square border-0 rounded-circle mb-3 mb-md-3 mb-lg-0 me-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <FaSearchLocation />
            </button>

            <a
              href="http://localhost:5174/"
              className="btn custom-btn d-lg-block d-none me-3"
            >
              Login
            </a>
            <a
              href="http://localhost:5174/register"
              className="btn custom-btn d-lg-block d-none"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div
            className="modal-content image-border rounded-0 "
           
          >
            <div className="modal-header">
              <h4
                className="modal-title text-secondary mb-0"
                id="exampleModalLabel"
              >
                Select Area
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body ">
            <div className="input-group mx-auto d-flex" >
            <div className="d-flex align-items-center" style={{ position: "relative", width: "100%" }}>
                <select
                  className="form-select p-2"
                  value={localSelectedArea}
                  onChange={handleAreaChange}
                  style={{
                    background: "#edac8e30",
                    borderColor: "#ee5007",
                    width: "100%",
                    paddingRight: "40px"  // Add padding to the right to make space for the icon
                  }}
                >
                  <option value="" disabled>
                    Select Area
                  </option>
                  {areas.length > 0 ? (
                    areas.map((area, index) => (
                      <option   key={index} value={area}>
                {capitalizeFirstLetter(area)}
              </option>
                    ))
                  ) : (
                    <option disabled>Loading areas...</option>
                  )}
                </select>
                <LuMousePointerClick
      style={{
        color: "#ee5007",
        position: "absolute",
        right: "10px", // Position the icon inside the select box on the right side
        pointerEvents: "none" // Make sure the icon does not interfere with the dropdown interaction
      }}
    />
                </div>
     
              </div>

              <div className="bwc__sc-ttnkwg-33 kCsyEE mt-3">
                <ul className="bwc__sc-ttnkwg-15 gZrltM">
                  {areas.map((city, index) => (
                    <li
                      key={index}
                      className="bwc__sc-ttnkwg-18 KUowN"
                      onClick={() => handleCityClick(city.toLowerCase())}
                    >
                      <div className="bwc__sc-ttnkwg-19 hkqhSR">
                        <div className="bwc__sc-ttnkwg-17 gvzyfS">
                          <img
                            src={cityImageMap[city.toLowerCase()]}
                            alt={city}
                            className="bwc__sc-ttnkwg-26 izPSOY"
                          />
                        </div>
                        <span className="bwc__sc-ttnkwg-16 dizuyr">{capitalizeFirstLetter(city)}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className="bwc__sc-ttnkwg-4 Ettpg mt-3"
                  onClick={toggleShowAllCities}
                >
                  <span className="bwc__sc-ttnkwg-5 jhbnqL">
                    {showAllCities ? "Show Less" : "View All Cities"}
                  </span>
                </div>
              </div>

              {showAllCities && (
                <div className="all-cities mt-3">
                  <ul className="bwc__sc-ttnkwg-6 khSHCa">
                    {areas.map((area, index) => (
                      <li className="bwc__sc-ttnkwg-7 gtXMtL" key={index}>
                        <div
                          className="bwc__sc-ttnkwg-8 fsJkBY"
                          onClick={() => handleCityClick(area.toLowerCase())}
                        >
                       {capitalizeFirstLetter(area)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
