import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="count-container">
        <h1 className="count-head">
          The Button has been clicked <br />
          <span className="count-value">{count}</span> times
        </h1>
        <p className="count-des">Click the button to increase the count!</p>
        <button
          className="button"
          type="button"
          onClick={this.onIncrementButton}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
