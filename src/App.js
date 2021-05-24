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

export default function App() {
  const [visiblity, setVisibility] = useState(false)
  const [proceed, setProceed] = useState(false)

  return (
    <div>
      <div className={proceed ? "invisible" : "visible"}>
        <div className={visiblity ? "App-hover" : "App"}>
          <div className="position-absolute w-100 h-100 m-auto">
            <img src={logo} onMouseEnter={() => setVisibility(true)} className="p-3 w-50 logo"></img>
            <div onMouseLeave={() => setVisibility(false)} className={visiblity ? 'visible' : 'invisible'}>
              <div className="t-box d-flex flex-column justify-content-center">
                <p className="p-3 text-white w-50">
                Behind this screen sits a mattargasht, mapping her personal wanders in Karachi. This website is a short attempt at re-evaluating, and re-morphing the survivable glimpses of Karachi. By no means is it unpacking to glorify the state, rather it is a narrowed look at the city- a city that we have all somehow managed to survive in and found unruly ways to meditate in.
                </p>
                <button className="btn btn-light w-25 py-2" onClick={() => setProceed(true)}>Tashreef Laiye</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-1">
        <Router>
          <div>
            <nav className="px-3 py-4 pt-sm-3 navbar navbar-expand-lg navbar-dark bg-black">
              <h1 className="h1 text-white font-weight-bold" href="#">مٹر گشتی</h1>
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
                    <Link className="nav-link" to="/video">City Sights</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/reflections">Reflections</Link>
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