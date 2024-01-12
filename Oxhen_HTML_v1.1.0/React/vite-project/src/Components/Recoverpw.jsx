

export default function Recoverpw() {
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
                <h5 className="text-white">Reset Password</h5>
                <p className="text-white-50 mb-0 fs-14">
                  Re-Password with Oxhen.
                </p>
              </div>
            </div>
            <div className="card-body position-relative">
              <div className="p-4 mt-n5 bg-white card rounded pb-0">
                <div
                  className="alert alert-success text-center mb-4"
                  role="alert"
                >
                  <p className="fs-14 mb-0">
                    Enter your Email and instructions will be sent to you!
                  </p>
                </div>
                <form>
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
                  <div className="mt-4">
                    <button className="btn btn-primary w-100" type="submit">
                      Reset
                    </button>
                  </div>
                  <div className="mt-4 mb-2 text-center">
                    <p className="mb-0 fs-14">
                      Remember It ?{" "}
                      <a href="login.html" className="text-danger">
                        Login
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            {/* card-body end */}
          </div>
          {/* card-body end */}
          <div className="mt-5 text-center text-white-50">
            <p>
              Remember It ?{" "}
              <a href="login.html" className="fw-bold text-white">
                {" "}
                Go to Login
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
