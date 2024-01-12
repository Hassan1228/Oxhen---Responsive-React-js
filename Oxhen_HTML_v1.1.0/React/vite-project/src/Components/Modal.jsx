

export default function Modal() {
  return (
<>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModalLong"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-close">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body p-5">
          <div className="text-center mb-5">
            <h4 className="modal-title" id="exampleModalLongTitle">
              Sing Up
            </h4>
            <p className="fs-14">
              Already Have an account?{" "}
              <a href="./Signin">Log in here</a>
            </p>
          </div>
          <div className="d-grid gap-3">
            <a
              className="btn btn-outline-dark btn-lg"
              href="javascript:void(0)"
            >
              <span className="d-flex justify-content-center align-items-center">
                <img
                  className="avatar avatar-xs me-2"
                  src="src\assets\images\google.jpg"
                  alt="Image Description"
                />
                Sign up with Google
              </span>
            </a>
            <a className="btn btn-primary btn-lg" href="/SignUp">
              Sign up with Email
            </a>
            <div className="text-center">
              <p className="mb-0 fs-13">
                By continuing you agree to our{" "}
                <a className="text-primary" href="javascript:void(0)">
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="modal-footer d-block text-center px-5 pb-5">
          <p className="footer-text mb-4">Trusted by the worlds best teams</p>
          <div className="mx-auto">
            <div className="row justify-content-between">
              <div className="col">
                <img className="img-fluid" src="src\assets\images\github.svg" alt="Logo" />
              </div>
              <div className="col">
                <img className="img-fluid" src="src\assets\images\gitlab.svg" alt="Logo" />
              </div>
              <div className="col">
                <img
                  className="img-fluid"
                  src="src\assets\images\linkedin.svg"
                  alt="Logo"
                />
              </div>
              <div className="col">
                <img
                  className="img-fluid"
                  src="images/instagram.svg"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
  </div>
  {/* end modal */}
</>

  )
}
