import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       img: './images/1.png'
    }
  }

  handleChange = (btn) => {
    let imgSource = '';
    switch(btn){
      case 'btnXanh': {
        imgSource = './images/1.png';
      };break
      case 'btnDo': {
        imgSource = './images/2.png';
      };break;
    }
    console.log(imgSource);
    this.setState({
      img: imgSource,
    })
  }
  
  render() {
    return (
      <div>
        <img src={this.state.img} alt="hinh anh" width="200"/>
        <div>
          <button className="btn btn-success" onClick={() => {this.handleChange('btnXanh')}}>Giay Xanh</button>
          <button className="btn btn-danger" onClick={() => {this.handleChange('btnDo')}}>Giay Do</button>
        </div>
      </div>
    )
  }
}
