import{ Component } from 'react'

export default class Cta extends Component {
  render() {
    return (
        <>
        {/* Start cta */}
        <section className="section cta">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                {/* <div data-aos="fade-down" data-aos-duration={1800}> */}
                  <h3 className="fw-bold">Stay Connected</h3>
                  <p>
                    Now that weve aligned the details, its time to get things mapped
                    out and organized. Now that weve aligned the details.
                  </p>
                  <a className="btn btn-primary" href="javascript:void(0)">
                    Learn More
                  </a>
                {/* </div> */}
              </div>
              {/* end col*/}
            </div>
            {/* end row*/}
          </div>
          {/* end container*/}
        </section>
        {/* End cta */}
      </>
      
    )
  }
}
