

export default function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky" id="navbar">
            <div className="container">
        
                <a className="navbar-brand text-uppercase" href="index-1.html">
                    <img className="logo-light" src="images/logo-light.png" alt="" height="25"/>
                    <img className="logo-dark" src="images/logo-dark.png" alt="" height="25"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="mdi mdi-menu"></span>
              
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto" id="navbar-navlist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#review">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mb-3 mb-lg-0" href="#contact">Contact</a>
                        </li>
                    </ul>
             
                    <button type="button" className="btn btn-primary nav-btn" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                        Sign Up
                    </button>
            
                </div>
            </div>
            
        </nav>
  
</>
  )
}
