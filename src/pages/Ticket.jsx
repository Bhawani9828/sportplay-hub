function Ticket() {
  return (
    <section className="ticket-section section-padding">
      <div className="section-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-10 mx-auto">
            <form
              className="custom-form ticket-form mb-5 mb-lg-0"
              action="#"
              method="post"
              role="form"
            >
              <h2 className="text-center mb-4">Get started here</h2>
              <div className="ticket-form-body">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <input
                      type="text"
                      name="ticket-form-name"
                      id="ticket-form-name"
                      className="form-control"
                      placeholder="Full name"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <input
                      type="email"
                      name="ticket-form-email"
                      id="ticket-form-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email address"
                      required=""
                    />
                  </div>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  name="ticket-form-phone"
                  placeholder="Ph 085-456-7890"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required=""
                />
                <h6>Choose Ticket Type</h6>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-check form-control">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="TicketForm"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Eary bird $120
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-check form-check-radio form-control">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="TicketForm"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Standard $240
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  name="ticket-form-number"
                  id="ticket-form-number"
                  className="form-control"
                  placeholder="Number of Tickets"
                  required=""
                />
                <textarea
                  name="ticket-form-message"
                  rows={3}
                  className="form-control"
                  id="ticket-form-message"
                  placeholder="Additional Request"
                  defaultValue={""}
                />
                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                  <button type="submit" className="form-control">
                    Buy Ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
