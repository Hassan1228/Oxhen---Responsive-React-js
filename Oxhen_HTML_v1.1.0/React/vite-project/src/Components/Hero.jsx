

export default function Hero() {
  return (
    <div className="overflow-hidden-x">
    {/* Start Home */}
    <section className="section home home-1" id="home">
      <div className="bg-overlay" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="home-heading">
              <h1 className="mb-3 text-white">
                Start your Successful Business With{" "}
                <span
                  className="typewrite text-primary d-none d-sm-inline-block"
                  data-period={2000}
                  data-type='[ "Oxhen" ]'
                >
                  <span className="wrap" />{" "}
                </span>
              </h1>
            </div>
            <p className="text-white-50 fs-20">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
            <div className="home-btn hstack gap-2 flex-column d-sm-block">
              <a className="btn btn-white me-1" href="javascript:void(0)">
                Request Free Demo
              </a>
              <a
                className="modal-btn"
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target=".watchvideomodal"
              >
                <span className="avatar-sm">
                  <span className="avatar-title rounded-circle btn-icon">
                    <i className="mdi mdi-play" />
                  </span>
                </span>
              </a>
              {/* Modal */}
              <div
                className="modal fade bd-example-modal-lg watchvideomodal"
                data-keyboard="false"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
                  <div className="modal-content home-modal p-1">
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn-close btn-close-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <video
                      id="VisaChipCardVideo"
                      className="video-box"
                      controls=""
                    >
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />
                      {/*Browser does not support <video> tag */}
                    </video>
                  </div>
                </div>
              </div>
              {/* END MODAL */}
            </div>
          </div>
          {/* end col*/}
        </div>
        {/* end row*/}
      </div>
      {/*end container*/}
    </section>
    {/* End Home */}
  </div>
  
  )
}
