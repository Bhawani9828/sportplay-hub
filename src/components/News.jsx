import React from 'react'
import newimg1 from '../assets/img_1.jpg'
import newimg2 from '../assets/img_2.jpg'
import newimg3 from '../assets/img_3.jpg'

function News() {
  return (
  <>
  <section className="artists-section section-padding" id="section_6">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-12 text-center">
        <h2 className="text-primary">Latest News</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="post-entry">
          <div className="image">
            <img src={newimg1} alt="Image" className="img-fluid" />
          </div>
          <div className="text p-4">
            <h2 className="h5 text-orange"><a href="#">RealMad vs Striker Who Will Win?</a></h2>
            <span className="text-uppercase date d-block mb-3"><small>By Colorlib • Sep 25, 2018</small></span>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat beatae doloremque, ex corrupti perspiciatis.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="post-entry">
          <div className="image">
            <img src={newimg2} alt="Image" className="img-fluid" />
          </div>
          <div className="text p-4">
            <h2 className="h5 text-black"><a href="#">RealMad vs Striker Who Will Win?</a></h2>
            <span className="text-uppercase date d-block mb-3"><small>By Colorlib • Sep 25, 2018</small></span>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat beatae doloremque, ex corrupti perspiciatis.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="post-entry">
          <div className="image">
            <img src={newimg3} alt="Image" className="img-fluid" />
          </div>
          <div className="text p-4">
            <h2 className="h5 text-black"><a href="#">RealMad vs Striker Who Will Win?</a></h2>
            <span className="text-uppercase date d-block mb-3"><small>By Colorlib • Sep 25, 2018</small></span>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat beatae doloremque, ex corrupti perspiciatis.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default News
