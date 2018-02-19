import React from 'react'

import './Friends.css'

class Friends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statusFriend1: 'Friend',
      statusFriend2: 'Friend'
    }
  }

  toggleStatusFriend(friend) {
    if (friend === 'friend1') {
      if (this.state.statusFriend1 === 'Friend') {
        this.setState({
          statusFriend1: 'Not Friend'
        })
      } else {
        this.setState({
          statusFriend1: 'Friend'
        })
      }
    } else {
      if (this.state.statusFriend2 === 'Friend') {
        this.setState({
          statusFriend2: 'Not Friend'
        })
      } else {
        this.setState({
          statusFriend2: 'Friend'
        })
      }
    }
  }

  render() {
    return (
      <div className="Row">
        <h1>{this.props.name}s friends:</h1>
        <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>
            1. {this.props.friend1}. Status: {this.state.statusFriend1}
            <button onClick={() => this.toggleStatusFriend('friend1')}>
              Go
            </button>
          </li>
          <li>
            2. {this.props.friend2}. Status: {this.state.statusFriend2}
            <button onClick={() => this.toggleStatusFriend('friend2')}>
              Go
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Friends
