

export default function Start() {
  return (
    <section className="section cta">
    <marquee data-behavio="" direction="left">
      <p className="mb-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </marquee>
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          {/* <div data-aos="fade-down" data-aos-duration={1800}> */}
            <div className="cta-heading">
              Today Offer{" "}
              <span className="mb-3">
                <span className="counter_value" data-target={37}>
                  0
                </span>
                <span>% Off</span>
              </span>
              !
            </div>
            <p>
              Now that weve aligned the details, its time to get things mapped
              out and organized. Now that weve aligned the details.
            </p>
            {/* <p class="fs-18">Limited signup only. Order today before the discount period end.</p> */}
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
  
  )
}
