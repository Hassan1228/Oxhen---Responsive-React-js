
export default function Footer() {
  return (
    <>
  <footer className="section footer">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-10 text-center">
          <a href="javascript:void(0)">
            <img src="images/logo-light.png" height={24} alt="" />
          </a>
          <p className="mx-auto mt-sm-4">
            Obviously Im a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
          <ul className="list-unstyled mb-0 mt-4 social-icon">
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
                <i className="mdi mdi-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void(0)">
                <i className="mdi mdi-vimeo" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void(0)">
                <i className="mdi mdi-google-plus" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void(0)">
                <i className="mdi mdi-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="text-center mt-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item mx-lg-3 m-2">
                <a className="text-white" href="javascript:void(0)">
                  Home
                </a>
              </li>
              <li className="list-inline-item mx-lg-3 m-2">
                <a className="text-white" href="javascript:void(0)">
                  About us
                </a>
              </li>
              <li className="list-inline-item mx-lg-3 m-2">
                <a className="text-white" href="javascript:void(0)">
                  Order
                </a>
              </li>
              <li className="list-inline-item mx-lg-3 m-2">
                <a className="text-white" href="javascript:void(0)">
                  Member
                </a>
              </li>
              <li className="list-inline-item mx-lg-3 m-2">
                <a className="text-white" href="javascript:void(0)">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end col*/}
      </div>
      {/* end row*/}
    </div>
    {/*end container*/}
  </footer>
  {/* END FOOTER */}
  {/* FOOTER-ALT */}
  <div className="footer-alt pt-3 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <p className="mb-0 text-white fs-15">
              © Oxhen. Design by
              <i className="mdi mdi-heart text-danger" /> Themesdesign
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END FOOTER-ALT */}
</>

  )
}
