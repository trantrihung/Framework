import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'hung'
    }
  }
  
  themGioHang = (name) => {
    console.log(name)
    // this.setState({
    //   name,
    // })
  }
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={() => this.themGioHang('hehe nhe')}>Click me</button>
      </div>
    )
  }
}
