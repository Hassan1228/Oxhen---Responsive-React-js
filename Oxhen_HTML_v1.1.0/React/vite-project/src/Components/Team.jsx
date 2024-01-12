import  { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    // Initialize particlesJS after the component has mounted
    particlesJS('particles-js', /* your particles.js configuration object here */);
  }, []);

  return (
    <section className="section team" style={{ zIndex: 1 }}>
 
 <div id="particles-js" style={{ zIndex: -1 }}></div>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="text-center mb-5">
            <h2 className="heading">Team</h2>
            <p className="text-muted fs-17">
              Build responsive, mobile-first projects on the web with the worlds
              most popular front-end component library.
            </p>
          </div>
        </div>
        {/* end col*/}
      </div>
      {/* end row */}
      <div className="row gy-4">
        <div className="col-lg-3 col-sm-6">
          <div className="team-card">
            <div className="team-card-img">
              <img className="img-fluid" src="src\assets\images\user\user.png" alt="image" />
              <div className="team-social-icons">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card-text-2">
              <h5 className="fw-bold mb-0">Bao Pan</h5>
              <p className="mb-0 fs-13 text-muted">Back End Developer</p>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card">
            <div className="team-card-img">
              <img
                className="img-fluid"
                src="src\assets\images\user\user1.png"
                alt="image"
              />
              <div className="team-social-icons">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card-text-2">
              <h5 className="fw-bold mb-0">Ines Durr</h5>
              <p className="mb-0 fs-13 text-muted">Front End Developer</p>
            </div>
          </div>
        </div>
        {/* End col */}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card">
            <div className="team-card-img">
              <img
                className="img-fluid"
                src="src\assets\images\user\user2.png"
                alt="image"
              />
              <div className="team-social-icons">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card-text-2">
              <h5 className="fw-bold mb-0">Stephan Vogt</h5>
              <p className="mb-0 fs-13 text-muted">Bid Manager</p>
            </div>
          </div>
        </div>
        {/* End col */}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card">
            <div className="team-card-img">
              <img
                className="img-fluid"
                src="src\assets\images\user\user3.png"
                alt="image"
              />
              <div className="team-social-icons">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" target="">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card-text-2">
              <h5 className="fw-bold mb-0">Cong Chia</h5>
              <p className="mb-0 fs-13 text-muted">Team Lead</p>
            </div>
          </div>
        </div>{" "}
        {/* End col*/}
      </div>
      {/* end row*/}
    </div>
    {/* end cotainer*/}
  </section>
  
  )
}
