
export default function Feature() {
  return (
    <section className="section feature" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mb-4">
              <h2 className="heading">Template Features</h2>
              <p className="text-muted fs-17">
                Ut enim ad minima veniam quis nostrum exercitationem ullam
                corporis suscipit laboriosam nisi commodi consequatur.
              </p>
            </div>
          </div>
          {/* end col*/}
        </div>
        {/* end row*/}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 mt-sm-4">
            {/* <div data-aos="fade-right" data-aos-duration={1800}> */}
            <div className="feature-card p-3 py-sm-4 rounded d-flex">
              <div className="flex-shrink-0">
                <i className="mdi mdi-responsive text-primary float-start me-3 h2" />
              </div>
              <div className="flex-grow-1 ms-2">
                <div className="content">
                  <h5 className="title">Fully Responsive</h5>
                  <p className="text-muted">
                    One disadvantage of Lorum Ipsum is that in certain letters
                    which is said more than.
                  </p>
                  <a href="#" className="text-dark">
                    Read More <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* end col */}
          <div className="col-lg-4 col-md-7 mt-sm-4">
            <div className="feature-card p-3 py-sm-4 rounded">
              <i className="mdi mdi-layers-triple-outline text-primary float-start me-3 h2" />
              <div className="content d-block overflow-hidden">
                <h5 className="title">Fresh Layouts</h5>
                <p className="text-muted mt-2">
                  The most well-known dummy text is the orem, which well-known
                  is said which is said.
                </p>
                <a href="#" className="text-dark">
                  Read More <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          {/* end col */}
          <div className="col-lg-4 col-md-7 mt-sm-4">
            {/* <div data-aos="fade-left" data-aos-duration={1800}> */}
            <div className="feature-card p-3 py-sm-4 rounded">
              <i className="mdi mdi-clipboard-flow-outline text-primary float-start me-3 h2" />
              <div className="content d-block overflow-hidden">
                <h5 className="title">Modern Workflow</h5>
                <p className="text-muted mt-2">
                  Moreover, in Latin only words at the beginning of sentences
                  which is said are capitalized.
                </p>
                <a href="#" className="text-dark">
                  Read More <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        {/* </div> */}
        {/* end row */}
        <div className="row my-sm-5 py-5 align-items-center justify-content-between">
          <div className="col-lg-6">
            {/* <div data-aos="fade-right" data-aos-duration={1800}> */}
            <div className="card bg-transparent border-0 mb-3 mb-lg-0">
              <img
                src="src\assets\images\feature1.png"
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
            {/* </div> */}
          </div>
          {/* end col */}
          <div className="col-lg-5">
            {/* <div data-aos="fade-left" data-aos-duration={1800}> */}
            <h3 className="feature-heading mb-2">Marketing</h3>
            <p className="text-muted">
              Now that wee aligned the details, its time to get things mapped
              out and organized. Now that wee aligned the details.
            </p>
            <ul className="feature-list">
              <li>
                <i className="mdi mdi-checkbox-marked-circle-outline text-primary" />
                Advertising for a trade magazine
              </li>
              <li>
                <i className="mdi mdi-checkbox-marked-circle-outline text-primary" />
                Designing marketing materials
              </li>
              <li>
                <i className="mdi mdi-checkbox-marked-circle-outline text-primary" />
                Update website content
              </li>
            </ul>
            <a className="btn btn-primary" href="#">
              Learn more
            </a>
            {/* </div> */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            {/* <div data-aos="fade-right" data-aos-duration={1800}> */}
            <h3 className="feature-heading">We aim to help busy peoples</h3>
            <p className="text-muted">
              Lorem text is also used to demonstrate the appearance of different
              typefaces and layouts.
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <a
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div>
                      <p className="mb-0">Flexible access to facilities.</p>
                      <p className="mb-0 fs-13 text-muted">
                        Our new key fobs make it so easy!
                      </p>
                    </div>
                  </a>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="fs-14 text-muted mb-1">
                      Lorem text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical.
                    </p>
                    <a href="#">
                      Check it out <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <a
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div>
                      <p className="mb-0">Snacks, drinks, coffee, and more.</p>
                      <p className="mb-0 fs-13 text-muted">
                        Keep your engine going with free food and drinks.
                      </p>
                    </div>
                  </a>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="fs-14 text-muted mb-0">
                      Lorem text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical.
                    </p>
                    <a
                      href="#"
                      className="fs-14 text-decoration-none"
                    >
                      Check it out <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <a
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div>
                      <p className="mb-0">On site tech support</p>
                      <p className="mb-0 fs-13 text-muted">
                        Connectivity, power, and IT issues solved in no time.
                      </p>
                    </div>
                  </a>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="fs-14 text-muted mb-0">
                      Lorem text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical.
                    </p>
                    <a
                      href="#"
                      className="fs-14 text-decoration-none"
                    >
                      Check it out <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* end col */}
          <div className="col-lg-6">
            {/* <div data-aos="fade-left" data-aos-duration={1800}> */}
            <div className="card bg-transparent border-0">
              <img
                src="src\assets\images\feature2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* </div> */}
          </div>
          {/* end col */}
        </div>
        {/* end row*/}
      </div>
      {/* end container */}
    </section>
  );
}
