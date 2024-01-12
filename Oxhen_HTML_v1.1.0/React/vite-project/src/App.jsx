import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Components/Contact'
import Cta from './Components/Cta'
import Down from './Components/down'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Modal from './Components/Modal'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Reviews from './Components/Reviews'
import Start from './Components/Start'
import Team from './Components/Team'
import SignUp from './Components/SignUp'

function App() {


  return (
    
    <>
    <Router>
   
     <div>
  <Navbar/> 
  <Modal/>
  <Hero/>
  <Down/>
  <Feature/>
  <Cta/>
  <Reviews/>
  <Pricing/>
  <Start/>
  <Team />
  <Contact/>
  <Footer/>
  </div>
  <Switch>
        <Route path="/"  />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
  </Router>
    </>
  )
}

export default App
