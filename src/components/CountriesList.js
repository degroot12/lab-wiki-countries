import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {

  render() {
      const{countries} = this.props
    return (
      <div>
        {countries.map(country => {
      return (
        <Link key={country.cca3} className="list-group-item" to={'/countries/'+ country.cca3}>
          {country.flag} {country.name.common}
        </Link>
      )
    })}
      </div>
    );
  }
}

export default CountriesList;