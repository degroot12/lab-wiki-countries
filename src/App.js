import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              <CountriesList countries={countries}/>
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path='/countries/:countryCode' render={props => <CountryDetails {...props} countries={countries}/>}/>
            </Switch>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;