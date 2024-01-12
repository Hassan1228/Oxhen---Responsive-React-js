

export default function Reviews() {
  return (
<section className="section reviews" id="review">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="text-center mb-5">
          <h2 className="heading">What they say about us honest reviews</h2>
          <p className="text-muted fs-17">
            Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
            mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
            vulputate.
          </p>
        </div>
      </div>
      {/* end col*/}
      <div className="col-lg-8">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators mb-0">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className=""
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
              className=""
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
              className="active"
              aria-current="true"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="card bg-transparent reviews-box h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card reviews-card">
                        <div className="card-body text-center">
                          <img
                            className="img-fluid"
                            src="src\assets\images\user\user1.png"
                            alt=""
                          />
                          <div className="mt-3">
                            <h6 className="mb-0">Brandon Carney</h6>
                            <p className="text-muted mb-0 fs-14">
                              Vice president
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5 className="reviews-heading">Client Reviews</h5>
                      <div className="d-flex align-items-top">
                        <div className="flex-shrink-0">
                          <img
                            className="reviews-quote-1"
                            src="src\assets\images\quote.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-2 mt-2">
                          <p className="text-muted fs-14 mt-xl-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="card bg-transparent reviews-box h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card reviews-card">
                        <div className="card-body text-center">
                          <img
                            className="img-fluid"
                            src="src\assets\images\user\user2.png"
                            alt=""
                          />
                          <div className="mt-3">
                            <h6 className="mb-0">Brandon Carney</h6>
                            <p className="text-muted mb-0 fs-14">
                              Vice president
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5 className="reviews-heading">Client Reviews</h5>
                      <div className="d-flex align-items-top">
                        <div className="flex-shrink-0">
                          <img
                            className="reviews-quote-1"
                            src="src\assets\images\quote.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-2 mt-2">
                          <p className="text-muted fs-14 mt-xl-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-transparent reviews-box h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card reviews-card">
                        <div className="card-body text-center">
                          <img
                            className="img-fluid"
                            src="src\assets\images\user\user.png"
                            alt=""
                          />
                          <div className="mt-3">
                            <h6 className="mb-0">Brandon Carney</h6>
                            <p className="text-muted mb-0 fs-14">
                              Vice president
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5 className="reviews-heading">Client Reviews</h5>
                      <div className="d-flex align-items-top">
                        <div className="flex-shrink-0">
                          <img
                            className="reviews-quote-1"
                            src="src\assets\images\quote.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-2 mt-2">
                          <p className="text-muted fs-14 mt-xl-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end col*/}
    </div>
    {/* End row*/}
  </div>
  {/* end container*/}
</section>

  )
}
