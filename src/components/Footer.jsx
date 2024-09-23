import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
    <footer className="site-footer">
  <div className="site-footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <h2 className="text-white mb-lg-0">Sport Hub</h2>
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
          <ul className="social-icon d-flex justify-content-lg-end">
            <li className="social-icon-item">
            <Link target="_blank" to="https://www.linkedin.com/company/85666328/admin/dashboard/" className="social-icon-link">
                <span className="bi-linkedin" />
              </Link>
            </li>
            <li className="social-icon-item">
            <Link target="_blank" to="https://www.facebook.com/people/Blockverse-Infotech-Solutions/100087563513249/" className="social-icon-link">
                <span className="bi-facebook" />
              </Link>
            </li>
            <li className="social-icon-item">
            <Link target="_blank" to="https://www.instagram.com/blockverseinfotech/?igsh=YXpldTV4Y2l1MzBo" className="social-icon-link">
                <span className="bi-instagram" />
              </Link>
            </li>
            <li className="social-icon-item">
              <a href="#" className="social-icon-link">
                <span className="bi-youtube" />
              </a>
            </li>
            <li className="social-icon-item">
              <a href="#" className="social-icon-link">
                <span className="bi-pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12 mb-4 pb-2">
        <h5 className="site-footer-title mb-3">Links</h5>
        <ul className="site-footer-links">
          <li className="site-footer-link-item">
            <a href="#section_1" className="site-footer-link">
              Home
            </a>
          </li>
          <li className="site-footer-link-item">
            <a href="#section_2" className="site-footer-link">
              Game
            </a>
          </li>
          <li className="site-footer-link-item">
            <a href="#section_3" className="site-footer-link">
              Academies
            </a>
          </li>
          <li className="site-footer-link-item">
            <a href="#section_4" className="site-footer-link">
              Feature
            </a>
          </li>
          <li className="site-footer-link-item">
            <a href="#section_5" className="site-footer-link">
              Event
            </a>
          </li>
          <li className="site-footer-link-item">
            <a href="#section_6" className="site-footer-link">
              Latest News
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
        <h5 className="site-footer-title mb-3">Have a question?</h5>
        <p className="text-white d-flex mb-1 justify-content-center">
          <a href="tel: 090-080-0760" className="site-footer-link">
            07947431585
          </a>
        </p>
        <p className="text-white d-flex justify-content-center">
          <a href="https://blockverse.co.in/" className="site-footer-link">
          https://blockverse.co.in/
          </a>
        </p>
      </div>
      <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
        <h5 className="site-footer-title mb-3">Location</h5>
        <p className="text-white d-flex mt-3 mb-2">
        Centre Point Tower, 2nd Floor, Center Point Tower, Ajmer Road, Jaipur, Vaishali Nagar, Jaipur - 302021 (RJ 14)
        </p>
        <a className="link-fx-1 color-contrast-higher mt-3" href="#">
          <span>Our Maps</span>
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
        </a>
      </div>
    </div>
  </div>
  <div className="site-footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-12 mt-5">
          <p className="copyright-text">
            Copyright © 2024 Sport Hub Company
          </p>
          <p className="copyright-text">
            Distributed by: <a href="https://blockverse.co.in/">Blockvares</a>
          </p>
        </div>
        <div className="col-lg-8 col-12 mt-lg-5">
          <ul className="site-footer-links">
            <li className="site-footer-link-item">
              <a href="#" className="site-footer-link">
                Terms &amp; Conditions
              </a>
            </li>
            <li className="site-footer-link-item">
              <a href="#" className="site-footer-link">
                Privacy Policy
              </a>
            </li>
            <li className="site-footer-link-item">
              <a href="#" className="site-footer-link">
                Your Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
