import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Save from './Users/Save';
import Deps from './Dependents';
import saveDeps from './Dependents/saveDeps';



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
              <Route exact path='/deps/:id' component={Deps}  />
              <Route exact path='/add_dep/:id' component={saveDeps}  />
              <Route exact path='/edit_dep/:id' component={saveDeps}  />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
