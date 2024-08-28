import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import axios from "axios";
import { FaSearchLocation } from "react-icons/fa";
import Typed from "typed.js";
import { setSelectedCity } from "../redux/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import Bhilwara from "../assets/Bhilwara.png";
import jaipur from "../assets/jaipur.png";
import Tonk from "../assets/Tonk.png";
import Ajmer from "../assets/Ajmer.png";
import Hanumangarh from "../assets/Hanumangarh.png";
import Rajsamand from "../assets/Rajsamand.png";
import Sambhar from "../assets/Sambhar.png";
import Udaipur from "../assets/Udaipur.png";
import Vijayanagar from "../assets/Vijayanagar.png";
import Sodala from "../assets/Sodala.png";
import logo from "../assets/newlogo.png";

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
      .get("http://192.168.1.9:7000/api/areas")
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

  // const handleDetectLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         axios
  //           .get(
  //             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  //           )
  //           .then((response) => {
  //             if (response.data && response.data.city) {
  //               const detectedCity = response.data.city.toLowerCase();
  //               setLocalSelectedArea(detectedCity);
  //               dispatch(setSelectedCity(detectedCity));
  //             } else {
  //               console.error("Unable to detect city:", response);
  //             }
  //           })
  //           .catch((error) => {
  //             console.error(
  //               "Error fetching data from reverse geocoding API:",
  //               error
  //             );
  //           });
  //       },
  //       (error) => {
  //         console.error("Geolocation error:", error);
  //         alert(
  //           "Unable to detect your location. Please enable location services and try again."
  //         );
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // };

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
    bansur: Vijayanagar,
    jaipurr: Sodala,
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
            <img src={logo} className="" style={{width:'84px'}}/>
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
                  Academies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  About
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

            <a href="http://localhost:3005/" className="btn custom-btn d-lg-block d-none me-3">
              Login
            </a>
            <a href="http://localhost:3005/register" className="btn custom-btn d-lg-block d-none">
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
            style={{
              background: "#fffaf8",
              borderColor: "#ee5007,",
              borderWidth: "4px",
              borderStyle: "double",
              borderImageSlice: "1",
              borderImageSource:
                "linear-gradient(to bottom, #006666, #ee5007 50%, #006666 50%, #ee5007 100%)",
            }}
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
              <div className="input-group  mx-auto d-flex">
                <select
                  className="form-select p-2"
                  value={localSelectedArea}
                  onChange={handleAreaChange}
                  style={{ background: "#edac8e30", borderColor: "#ee5007" }}
                >
                  <option value="" disabled>
                    Select Area
                  </option>
                  {areas.length > 0 ? (
                    areas.map((area, index) => (
                      <option key={index} value={area}>
                        {area}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading areas...</option>
                  )}
                </select>
                <span
                  id="search-icon-1"
                  className="input-group-text p-3"
                  style={{ background: "#edac8e30", borderColor: "#ee5007" }}
                >
                  <FaSearchLocation style={{ color: "#ee5007" }} />
                </span>
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
        <span className="bwc__sc-ttnkwg-16 dizuyr">{city}</span>
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
                          {area}
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
