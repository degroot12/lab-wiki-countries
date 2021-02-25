import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CountryDetails extends Component {

  render() {
    //console.log('----props----',this.props)
    let countryCode = this.props.match.params.countryCode
    let singleCountry = this.props.countries.find(country => {
      return country.cca3 === countryCode
    })
    return (
      <div>
        <h1>{singleCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{singleCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{singleCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {singleCountry.borders? 
                      (singleCountry.borders.map(countryCode => {
                        return (
                        <li><Link to={'/countries/'+ countryCode}>{this.props.countries.find(country => country.cca3 === countryCode).name.common}</Link></li>
                        )
                      })):
                      ("")}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    );
  }
}

export default CountryDetails;