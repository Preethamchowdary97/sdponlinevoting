import React, { Component } from 'react'

class Greet extends Component {
  render() {
    return (
      <div><center><h1>welcome {this.props.name} with id{this.props.id}</h1></center></div>
    )
  }
}

export default Greet