

export default function Contact() {
  return (
<>
  <section className="section contact" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center mb-5">
            <h2 className="heading">Contact Us</h2>
            <p className="text-muted mt-2 fs-17">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row align-items-center gy-3">
        <div className="col-lg-6">
          {/* <div data-aos="fade-right" data-aos-duration={1800}> */}
            <div className="card">
              <div className="card-body">
                <div className="map">
                  {" "}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
                    width="100%"
                    height={325}
                    style={{ border: 0 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
        {/*end col*/}
        <div className="col-lg-6">
          {/* <div data-aos="fade-left" data-aos-duration={1800}> */}
            <form
              method="post"
              onSubmit="return validateForm()"
              className="contact-form"
              name="myForm"
              id="myForm"
            >
              <span id="error-msg" />
              <div className="row rounded-3 py-3">
                <div className="col-lg-12">
                  <div className="position-relative mb-3">
                    <span className="input-group-text">
                      <i className="mdi mdi-account-outline" />
                    </span>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative mb-3">
                    <span className="input-group-text">
                      <i className="mdi mdi-email-outline" />
                    </span>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative mb-3">
                    <span className="input-group-text">
                      <i className="mdi mdi-file-document-outline" />
                    </span>
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative mb-3">
                    <span className="input-group-text align-items-start">
                      <i className="mdi mdi-comment-text-outline" />
                    </span>
                    <textarea
                      name="comments"
                      id="comments"
                      rows={4}
                      className="form-control"
                      placeholder="Enter your message*"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-end">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary"
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
              </div>
            </form>
            {/*end form*/}
          {/* </div> */}
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/*end container*/}
  </section>
  {/* End contect */}
</>

  )
}
