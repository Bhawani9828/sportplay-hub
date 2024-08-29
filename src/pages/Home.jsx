import { Link } from "react-router-dom";
import feature from "../assets/Featured-1.jpg";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import axios from "axios";
import moment from "moment";
import FeaturedAcademies from "../components/FeaturedAcademies";
import News from "../components/News";
import GameCard from "../components/GameCard";
import { ToastContainer } from 'react-toastify';
function Home() {
  const [events, setEvents] = useState([]);
  const [selectedEventType, setSelectedEventType] = useState("district");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Fetch events data from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.9:7000/api/all-events/district"
        );
        console.log(response.data); // Log the response to check the structure
        setEvents(response.data.events); // Access the 'events' array from the response
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = Array.isArray(events)
    ? events.filter((event) => event.eventType === selectedEventType)
    : [];

  const options = [
    { value: "district", label: "district" },
    { value: "state", label: "state" },
    { value: "national", label: "national" },
  ];

  const handleOptionClick = (value) => {
    setSelectedEventType(value);
    setIsOpen(false);
  };
  return (
    <>
     <ToastContainer />
      <section className="hero-section" id="section_1">
        <div className="section-overlay" />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <small className="text-white">Top Sports Training</small>
              <h1 className="text-white mb-5">
                Find Top Sports Training Near You!
              </h1>
              {/* <Link className="btn custom-btn smoothscroll" href="#section_2">
                Lets begin
              </Link> */}
            </div>
            <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
              <div className="date-wrap">
                <h5 className="text-white">
                  <i className="custom-icon bi-clock me-2" />
                  15 - 24<sup>th</sup>, Aug 2024
                </h5>
              </div>
              <div className="location-wrap mx-auto py-3 py-lg-0">
                <h5 className="text-white">
                  <i className="custom-icon bi-geo-alt me-2" />
                  National Center, Rajasthan State
                </h5>
              </div>
              <div className="social-share">
                <ul className="social-icon d-flex align-items-center justify-content-center">
                  <span className="text-white me-3">Share:</span>
                  <li className="social-icon-item">
                    <Link to="/" className="social-icon-link">
                      <span className="bi-facebook" />
                    </Link>
                  </li>
                  <li className="social-icon-item">
                    <Link to="/" className="social-icon-link">
                      <span className="bi-twitter" />
                    </Link>
                  </li>
                  <li className="social-icon-item">
                    <Link to="/" className="social-icon-link">
                      <span className="bi-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster={feature}>
            <source src="/video/pexels-2022396.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <GameCard/>

    
          <Slider />
    

         

      {/* <section className="about-section section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info">
                <h2 className="text-white mb-4">About Sports Hub</h2>
                <p className="text-white">
                  Festava Live is free CSS template provided by TemplateMo
                  website. This layout is built on Bootstrap v5.2.2 CSS library.
                  You are free to use this template for your commercial website.
                </p>
                <h6 className="text-white mt-4">Once in Lifetime Experience</h6>
                <p className="text-white">
                  You are not allowed to redistribute the template ZIP file on
                  any other website without a permission.
                </p>
                <h6 className="text-white mt-4">Whole Night Party</h6>
                <p className="text-white">
                  Please tell your friends about our website. Thank you.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img
                  src="images/pexels-alexander-suhorucov-6457579.jpg"
                  className="about-image img-fluid"
                />
                <div className="about-text-info d-flex">
                  <div className="d-flex">
                    <i className="about-text-icon bi-person" />
                  </div>
                  <div className="ms-4">
                    <h3>a happy moment</h3>
                    <p className="mb-0">
                      your amazing festival experience with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <FeaturedAcademies />

      

      

      <section className="schedule-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-white mb-4">Event Schedule</h2>
              <div>
                <div
                  className="custom-select"
                  style={{
                    background: "white",
                    borderRadius: "12px 12px 0 0",
                    position: "relative",
                  }}
                >
                  <div
                    className="selected-option"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                      borderRadius: "12px 12px 0 0",
                      border: "none",
                      padding: "0.375rem 0.75rem",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {selectedEventType}{" "}
                    <TbHandClick className="text-orange" fontSize={22} />
                  </div>
                  {isOpen && (
                    <div
                      className="options"
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: "0 0 12px 12px",
                        width: "100%",
                      }}
                    >
                      {options.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => handleOptionClick(option.value)}
                          style={{
                            padding: "0.375rem 0.75rem",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          {option.label}
                          <TbHandClick />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="table-responsive">
                <table className="schedule-table table table-dark rounded-0">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Sunday</th>
                      <th scope="col">Monday</th>
                      <th scope="col">Tuesday</th>
                      <th scope="col">Wednesday</th>
                      <th scope="col">Thursday</th>
                      <th scope="col">Friday</th>
                      <th scope="col">Saturday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.length > 0 ? (
                      filteredEvents.map((event, i) => {
                        const eventDate = moment(event.eventDate, "DD-MM-YYYY");
                        const dayOfWeek = eventDate.format("dddd");

                        return (
                          <tr key={i}>
                            <th scope="row">{event.eventDate}</th>

                            {/* Sunday */}
                            {dayOfWeek === "Sunday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}

                            {/* Monday */}
                            {dayOfWeek === "Monday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}

                            {/* Tuesday */}
                            {dayOfWeek === "Tuesday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}

                            {/* Wednesday */}
                            {dayOfWeek === "Wednesday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}

                            {/* Thursday */}
                            {dayOfWeek === "Thursday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}

                            {/* Friday */}
                            {dayOfWeek === "Friday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="text-white">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}

                            {/* Saturday */}
                            {dayOfWeek === "Saturday" ? (
                              <td
                                className="table-background-image-wrap"
                                style={{
                                  backgroundImage: `url(http://192.168.1.9:7000${event.photo})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position:'relative'
                                }}
                              >
                                <div className="overlay-5"></div>
                                <h3>{event.eventCities.join(", ")}</h3>
                                <h6 className="text-white">
                                  {event.eventName}
                                </h6>
                                <p className="mb-2">{event.eventTime}</p>
                                <p>{event.eventSport}</p>
                                <p>{event.eventType}</p>
                                <div className="section-overlay" />
                              </td>
                            ) : (
                              <td></td>
                            )}
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="8">No events available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <News/>

      {/* <section
        className="pricing-section section-padding section-bg"
        id="section_5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="text-center mb-4">Plans, you love</h2>
            </div>
            <div className="col-lg-6 col-12">
              <div className="pricing-thumb">
                <div className="d-flex">
                  <div>
                    <h3>
                      <small>Early Bird</small> $120
                    </h3>
                    <p>Including good things:</p>
                  </div>
                  <p className="pricing-tag ms-auto">
                    Save up to <span>50%</span>
                  </p>
                </div>
                <ul className="pricing-list mt-3">
                  <li className="pricing-list-item">
                    platform for potential customers
                  </li>
                  <li className="pricing-list-item">digital experience</li>
                  <li className="pricing-list-item">high-quality sound</li>
                  <li className="pricing-list-item">standard content</li>
                </ul>
                <Link
                  className="link-fx-1 color-contrast-higher mt-4"
                  to="/ticket"
                >
                  <span>Buy Ticket</span>
                  <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={16} cy={16} r="15.5" />
                      <line x1={10} y1={18} x2={16} y2={12} />
                      <line x1={16} y1={12} x2={22} y2={18} />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
              <div className="pricing-thumb">
                <div className="d-flex">
                  <div>
                    <h3>
                      <small>Standard</small> $240
                    </h3>
                    <p>What makes a premium festava?</p>
                  </div>
                </div>
                <ul className="pricing-list mt-3">
                  <li className="pricing-list-item">
                    platform for potential customers
                  </li>
                  <li className="pricing-list-item">digital experience</li>
                  <li className="pricing-list-item">high-quality sound</li>
                  <li className="pricing-list-item">premium content</li>
                  <li className="pricing-list-item">live chat support</li>
                </ul>
                <Link
                  className="link-fx-1 color-contrast-higher mt-4"
                  to="/ticket"
                >
                  <span>Buy Ticket</span>
                  <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={16} cy={16} r="15.5" />
                      <line x1={10} y1={18} x2={16} y2={12} />
                      <line x1={16} y1={12} x2={22} y2={18} />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* 
      <section className="contact-section section-padding" id="section_6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="text-center mb-4">Interested? Let s talk</h2>
              <nav className="d-flex justify-content-center">
                <div
                  className="nav nav-tabs align-items-baseline justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-ContactForm-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ContactForm"
                    type="button"
                    role="tab"
                    aria-controls="nav-ContactForm"
                    aria-selected="false"
                  >
                    <h5>Contact Form</h5>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-ContactMap-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ContactMap"
                    type="button"
                    role="tab"
                    aria-controls="nav-ContactMap"
                    aria-selected="false"
                  >
                    <h5>Google Maps</h5>
                  </button>
                </div>
              </nav>
              <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-ContactForm"
                  role="tabpanel"
                  aria-labelledby="nav-ContactForm-tab"
                >
                  <form
                    className="custom-form contact-form mb-5 mb-lg-0"
                    action="#"
                    method="post"
                    role="form"
                  >
                    <div className="contact-form-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="text"
                            name="contact-name"
                            id="contact-name"
                            className="form-control"
                            placeholder="Full name"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="email"
                            name="contact-email"
                            id="contact-email"
                            pattern="[^ @]*@[^ @]*"
                            className="form-control"
                            placeholder="Email address"
                            required=""
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        name="contact-company"
                        id="contact-company"
                        className="form-control"
                        placeholder="Company"
                        required=""
                      />
                      <textarea
                        name="contact-message"
                        rows={3}
                        className="form-control"
                        id="contact-message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <div className="col-lg-4 col-md-10 col-8 mx-auto">
                        <button type="submit" className="form-control">
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-ContactMap"
                  role="tabpanel"
                  aria-labelledby="nav-ContactMap-tab"
                >
                  <iframe
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
