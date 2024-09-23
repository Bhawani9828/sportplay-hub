import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AcademyDetail() {
  const { id } = useParams(); 
  const [academy, setAcademy] = useState(null);
  const [relatedAcademies, setRelatedAcademies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    studentName: '',
    studentPhone: '',
    studentEmail: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    setIsLoggedIn(!!token);

    // Fetch academy details
    axios.get(`https://vclottery.in/sportshub/api/details/${id}`)
      .then(response => {
        if (response.data && response.data.details) {
          setAcademy(response.data.details);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching academy details:', error);
      })
      .finally(() => {
        setLoading(false); // Stop loading after data is fetched
      });

    // Fetch related academies
    axios.get(`https://vclottery.in/sportshub/api/related-academies/${id}`)
      .then(response => {
        if (response.data && response.data.relatedAcademies) {
          setRelatedAcademies(response.data.relatedAcademies);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching related academies:', error);
      });
  }, [id]);

  const handleRegister = () => {
    console.log('handleRegister called, isLoggedIn:', isLoggedIn);
    if (isLoggedIn) {
      axios.post(`https://vclottery.in/sportshub/api/register/${id}`, studentDetails)
        .then(response => {
          if (response.data && response.data.success) {
            alert('Registration successful!');
          } else {
            alert('Registration failed.'); 
            setShowModal(true);
          }
        })
        .catch(error => {
          console.error('Error registering student:', error);
        });
    } else {
      console.log('Setting showModal to true');
      setShowModal(true);
      console.log('showModal set to:', true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleModalSubmit = () => {
    axios.post(`https://vclottery.in/sportshub/api/register/${id}`, studentDetails)
      .then(response => {
        if (response.data && response.data.success) {
          alert('Registration successful!');
          setShowModal(false);
        } else {
          alert('Registration failed.');
        }
      })
      .catch(error => {
        console.error('Error registering student:', error);
      });
  };

  if (loading) return <div>Loading...</div>;

  if (!academy) return <div>No details available for this academy.</div>;

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Academy Details</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-dark">Academy Details</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid py-5 mt-5">
        <div className="container mb-5 py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-12">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                  <div id="carouselMDExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner mb-5 shadow-1-strong rounded-3">
                      {academy.photos.map((photo, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img
                            src={`https://vclottery.in/sportshub${photo}`}
                            className="d-block w-100"
                            alt={`Slide ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselMDExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselMDExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    <div className="carousel-indicators" style={{ marginBottom: '-20px' }}>
                      {academy.photos.map((photo, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carouselMDExample"
                          data-bs-slide-to={index}
                          className={index === 0 ? 'active' : ''}
                          aria-current={index === 0 ? 'true' : 'false'}
                          aria-label={`Slide ${index + 1}`}
                          style={{ width: '100px' }}
                        >
                          <img
                            src={`https://vclottery.in/sportshub${photo}`}
                            className="d-block w-100 shadow-1-strong rounded"
                            alt={`Thumbnail ${index + 1}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 text-start">
                  <h2 className="fw-bold mb-3 text-primary">{academy.academyName}</h2>
                  <h6 className="mb-3">Coach: {academy.coachName}</h6>
                  <h6 className="mb-3">Fees: {academy.fees}</h6>
                  <h6 className="mb-3">Sports: {academy.sports.join(', ')}</h6>
                  <h6 className="mb-3">Address: {academy.address}</h6>
                  <h6 className="mb-3">Batch Timings: {academy.batchTimings.join(', ')}</h6>
                  <p className="mb-4">{academy.description || "No description available."}</p>
                  <div>
                  <button onClick={handleRegister} className="btn btn-primary border border-secondary rounded-pill px-4 py-2 mb-4 text-white">
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Book Now
                  </button>
                  <button onClick={handleRegister}  className="btn btn-primary ms-2 border border-secondary rounded-pill px-4 py-2 mb-4 text-white">
                    <i className="fa fa-shopping-bag ms-2 text-primary" /> Connect Coach
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <section className='section-padding'>
          <div className="product__details__tab mt-5">
  <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="previews-tab" data-bs-toggle="tab" href="#previews" role="tab" aria-controls="previews" aria-selected="false">Customer Previews</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="additional-info-tab" data-bs-toggle="tab" href="#additional-info" role="tab" aria-controls="additional-info" aria-selected="false">Additional Information</a>
    </li>
  </ul>
  <div className="tab-content">
    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
      <div className="product__details__tab__content">
        <h5>Details</h5>
        <p className="note">{academy.details}</p>
        <div className="product__details__tab__content__item">
          <h5>Academy Information</h5>
          <p>{academy.acadmeyInfo}</p>
        </div>
        <div className="product__details__tab__content__item">
          <h5>Coach Information</h5>
          <p>{academy.coachInfo}</p>
        </div>
      </div>
    </div>
    <div className="tab-pane fade" id="previews" role="tabpanel" aria-labelledby="previews-tab">
      <div className="product__details__tab__content">
        <h5>Products Information</h5>
        <p>Customer preview content goes here.</p>
      </div>
    </div>
    <div className="tab-pane fade" id="additional-info" role="tabpanel" aria-labelledby="additional-info-tab">
      <div className="product__details__tab__content">
        <p className="note">Additional information content goes here.</p>
        <div className="product__details__tab__content__item">
          <h5>Material Used</h5>
          <p>Material description goes here.</p>
        </div>
      </div>
    </div>
  </div>
</div>
          </section>
    


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
                  {/* You can easily copy the embed code from Google Maps -> Share -> Embed a map // */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Related Academies Section */}
          <section className="related spad " style={{marginTop:'130px'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 pb-5">
                  <h3 className="related-title">Related Academies</h3>
                </div>
              </div>
              <div className="row">
                {relatedAcademies.length > 0 ? relatedAcademies.map((relatedAcademy) => (
                  <div key={relatedAcademy.id} className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        style={{ backgroundImage: `url(https://vclottery.in/sportshub${relatedAcademy.photo})` }}
                      >
                        <ul className="product__hover">
                          <li>
                            <a href={`/academy-details/${relatedAcademy.id}`}>
                              <img src="img/icon/search.png" alt="View" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>{relatedAcademy.academyName}</h6>
                        <a href={`/academy-details/${relatedAcademy.id}`} className="add-cart">
                          View Details
                        </a>
                        <div className="rating">
                          {[...Array(relatedAcademy.rating)].map((_, i) => (
                            <i key={i} className="fa fa-star" />
                          ))}
                          {[...Array(5 - relatedAcademy.rating)].map((_, i) => (
                            <i key={i} className="fa fa-star-o" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-lg-12">
                    <p>No related academies found.</p>
                  </div>
                )}
              </div>
            </div>
          </section>


        </div>
      </div>

      {/* Registration Modal */}
      {console.log('showModal:', showModal)}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3 text-start">
                    <label htmlFor="studentName " className="form-label ">Name</label>
                    <input type="text" className="form-control" id="studentName" name="studentName" value={studentDetails.studentName} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="studentPhone" className="form-label ">Phone</label>
                    <input type="text" className="form-control" id="studentPhone" name="studentPhone" value={studentDetails.studentPhone} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="studentEmail" className="form-label ">Email</label>
                    <input type="email" className="form-control" id="studentEmail" name="studentEmail" value={studentDetails.studentEmail} onChange={handleInputChange} />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    
    </>
  );
}

export default AcademyDetail;
