import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryName: countryAndCapitalsList[0].country,
  }

  onChangeCapital = event => {
    const selectedCapital = event.target.value
    const selectedCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === selectedCapital,
    )
    this.setState({countryName: selectedCountry[0].country})
  }

  render() {
    const {countryName} = this.state

    return (
      <div className="background">
        <div className="card-background">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capitals-box">
            <select className="drop-down-list" onChange={this.onChangeCapital}>
              <option value="NEW_DELHI" selected>
                New Delhi
              </option>
              <option value="LONDON">London</option>
              <option value="PARIS">Paris</option>
              <option value="KATHMANDU">Kathmandu</option>
              <option value="HELSINKI">Helsinki</option>
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h1 className="country-name">{countryName}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
