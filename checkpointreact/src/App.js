import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/Layout/Header'
import index from './components/Users/index'
import Details from './components/Users/Details'
import Add from './components/Users/Add'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'component={index} />
            <Route exact path='/user/:id'component={Details} />
            <Route exact path='/add'component={Add} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
