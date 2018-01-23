import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './index.css';
import Taxi from './scenes/Taxi';
import Bus from './scenes/Bus';
import Bicycle from './scenes/Bicycle';
import style from './app.scss';

const App = () => (
  <BrowserRouter>
    <div className={style.content}>
      <div className={style.nav}>
        <NavLink to="taxi" key="taxi" className={style.navTitle}>Taxi</NavLink>
        <NavLink to="bus" key="bus" className={style.navTitle}>Bus</NavLink>
        <NavLink to="bicycle" key="bicycle" className={style.navTitle}>Bicycle</NavLink>
      </div>
      <div>
        <Route exact path="/" component={Bicycle} />
        <Route exact path="/taxi" component={Taxi} />
        <Route exact path="/bus" component={Bus} />
        <Route exact path="/bicycle" component={Bicycle} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
