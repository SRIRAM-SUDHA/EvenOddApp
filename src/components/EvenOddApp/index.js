import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  increaseNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + Math.floor(Math.random() * 99) + 1,
    }))
  }

  render() {
    const {number} = this.state

    return (
      <div className="bgContainer">
        <div className="countContainer">
          <h1 className="countHeading">Count {number}</h1>
          <p className="countDescription">
            {number % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
          </p>
          <button
            className="button"
            type="button"
            onClick={this.increaseNumber}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
