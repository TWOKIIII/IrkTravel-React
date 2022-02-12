import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Baikalpage from './views/baikalpage'
import Skalapage from './views/skalapage'
import AboutMepage from './views/about-mepage'
import Choosepage from './views/choosepage'
import Irkutskpage from './views/irkutskpage'
import Olkhonpage from './views/olkhonpage'
import Home from './views/home'
import KBJDpage from './views/k-b-j-dpage'
import Myzeipage from './views/myzeipage'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Baikalpage} path="/baikalpage" />
        <Route exact component={Skalapage} path="/skalapage" />
        <Route exact component={AboutMepage} path="/about-mepage" />
        <Route exact component={Choosepage} path="/choosepage" />
        <Route exact component={Irkutskpage} path="/irkutskpage" />
        <Route exact component={Olkhonpage} path="/olkhonpage" />
        <Route exact component={Home} path="/" />
        <Route exact component={KBJDpage} path="/k-b-j-dpage" />
        <Route exact component={Myzeipage} path="/myzeipage" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
