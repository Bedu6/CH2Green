import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Save from './Users/Save';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <div className='container'>
              <Route exact path='/' component={Users} />
              <Route exact path='/add' component={Save} />
              <Route exact path='/edit/:id' component={Save}  />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
