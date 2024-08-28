import login from "../assets/Academies1.jpg";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import logo from "../assets/favicon.ico";
function Login() {
  return (
    <>
      <section className="text-center py-0">
        <div
          className="bg-holder overlay overlay-2"
          style={{ backgroundImage: `url(${login})` }}
        />
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-md-8 col-lg-5 mx-auto" data-zanim-timeline="{}">
              <div
                className="mb-5"
                data-zanim-xs='{"delay":0,"duration":1}'
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div
                className="login_card"
                data-zanim-xs='{"delay":0.1,"duration":1}'
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                <div className="card-body p-md-5">
                  <h4 className="text-uppercase fs-0 fs-md-1">
                    login with Sport Hub
                  </h4>
                  <form className="text-start mt-4">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="input-group">
                          <div className="input-group-text bg-100">
                            <span>
                              <CiUser />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Email or username"
                            aria-label="Text input with dropdown button"
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-2 mt-sm-4">
                        <div className="input-group">
                          <div className="input-group-text bg-100">
                            <span>
                              <RiLockPasswordFill />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            type="Password"
                            placeholder="Password"
                            aria-label="Text input with dropdown button"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mt-3">
                      <div className="col-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="rememberMe"
                            type="checkbox"
                            defaultValue
                          />
                          <label
                            className="form-check-label text-500"
                            htmlFor="rememberMe"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-6 mt-2 mt-sm-3">
                        <button
                          className="btn btn-primary border-0 w-100"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
