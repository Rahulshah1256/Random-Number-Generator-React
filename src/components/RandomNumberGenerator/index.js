import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button
          type="button"
          className="generate-button"
          onClick={this.onGenerateRandomNumber}
        >
          Generate
        </button>
        <p className="random-number">{randomNumber}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
