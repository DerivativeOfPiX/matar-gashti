import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InteractiveArt from './tabs/interactive_art'
import Home from './tabs/home'
import SoundScape from "./tabs/soundscape"
import CitySights from "./tabs/citysights"
import Reflections from "./tabs/reflections"
import logo from './images/site-logo.png'
import headerlogo from './images/logo-header.png'

export default function App() {
  const [visiblity, setVisibility] = useState(false)
  const [proceed, setProceed] = useState(false)

  document.body.style.overflow = "hidden"
  if(proceed){
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div className={proceed ? "invisible" : "visible"}>
          <div className={visiblity ? "App-hover position-absolute w-100 h-100 m-auto" : "App position-absolute w-100 h-100 m-auto"}>
            <img onClick={() => setProceed(true)} src={logo} onMouseEnter={() => setVisibility(true)} alt="" className="p-3 w-50 logo"></img>
            <div  onMouseLeave={() => setVisibility(false)} className={visiblity ? 'visible' : 'invisible'}>
              <div className="t-box d-flex flex-column justify-content-center">
                <p className="p-3 text-white w-50">
                Behind this screen sits a mattargasht, mapping her personal wanders in Karachi. This website is a short attempt at re-evaluating, and re-morphing the survivable glimpses of Karachi. By no means is it unpacking to glorify the state, rather it is a narrowed look at the city- a city that we have all somehow managed to survive in and found unruly ways to meditate in. Click on the mattargashti logo to begin.
                </p>
              </div>
            </div>
          </div>
      </div>
      <div className="z-1">
        <Router>
          <div>
            <nav className="px-3 py-4 pt-sm-3 navbar navbar-expand-lg navbar-dark bg-black">
              <img className="py-3 w-15 h-15 img-fluid" src={headerlogo} alt="header logo"></img>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Ghar Chalo</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/multilayer">Interactive Art</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sound">Sounds of the City</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/video">Liminally Karachi</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/reflections">Written City</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Switch>
            <Route path="/multilayer">
              <InteractiveArt />
            </Route>
            <Route path="/sound">
              <SoundScape />
            </Route>
            <Route path="/video">
              <CitySights />
            </Route>
            <Route path="/reflections">
              <Reflections />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}