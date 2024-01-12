

export default function SignUp() {
  return (
   <>
    <div className="vh-100 bg-account-pages">
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center">
          <a href="javascript:void(0)" className="d-block auth-logo">
            <img
              src="images/logo-dark.png"
              alt=""
              height={24}
              className="logo logo-dark"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="p-4">
          <div className="card overflow-hidden mt-2">
            <div className="text-center bg-primary position-relative">
              <div className="img-overlay" />
              <div className="position-relative pt-4 py-5 mb-1">
                <h5 className="text-white">Welcome!</h5>
                <p className="text-white-50 mb-0 fs-14">
                  Sign up For a New Account.
                </p>
              </div>
            </div>
            <div className="card-body position-relative">
              <div className="p-4 mt-n5 bg-white card rounded pb-0">
                <form>
                  <div className="mb-3">
                    <label className="fs-14 mb-2" htmlFor="first name">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="fs-14 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="fs-14 mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="auth-remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="auth-remember-check"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-sm-end">
                        <a href="recoverpw.html" className="text-muted fs-13">
                          <i className="mdi mdi-lock me-1" /> Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary w-100" type="submit">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <div className="text-center plan-line">or sign up with</div>
              </div>
            </div>
            <div className="row justify-content-center text-center my-3">
              <div className="col-lg-6">
                <ul className="list-unstyled btn-social-icon mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center text-white-50">
            <p>
              Have account already?{" "}
              <a href="login.html" className="fw-bold text-white">
                {" "}
                Sign in
              </a>{" "}
            </p>
            <p>
              © Oxhen. Crafted with <i className="mdi mdi-heart text-danger" /> by
              Themesdesign
            </p>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
    {/* end row */}
  </div>
  </div>
  </>
  )
}
