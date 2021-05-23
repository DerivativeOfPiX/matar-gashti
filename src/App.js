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

export default function App() {
  const [visiblity, setVisibility] = useState(false)
  const [proceed, setProceed] = useState(false)

  return (
    <div>
      <div className={proceed ? "invisible" : "visible"}>
        <div className="App position-absolute w-100 h-100 m-auto">
          <h1 onMouseEnter={() => setVisibility(true)} className="p-3 text-white text-center text-lg font-weight-bold">مٹر گشتی</h1>
          <div onMouseLeave={() => setVisibility(false)} className={visiblity ? 'visible' : 'invisible'}>
            <p className="t-box text-white w-50">
              Lorem ipsum manifesto text, sample text to fill up<br /> later only used for sizing purposes.
              Yep.
              <button onClick={() => setProceed(true)}>Let's go !</button>
            </p>
          </div>
        </div>
      </div>
      <div className="z-1">
        <Router>
          <div>
            <nav className="px-3 pt-sm-3 navbar navbar-expand-lg navbar-dark bg-black">
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