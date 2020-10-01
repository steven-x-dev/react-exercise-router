import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='nav-bar-wrapper'>
            <div className='nav-bar'>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink to='/products'>Products</NavLink>
              <NavLink to='/my-profile'>My Profile</NavLink>
              <NavLink to='/about-us'>About Us</NavLink>
            </div>
          </div>
          <main>
            <div className='content-wrapper'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/products' component={Products} />
                <Route path='/my-profile' component={MyProfile} />
                <Route path='/about-us' component={AboutUs} />
              </Switch>
            </div>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
