import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'

export default class GioHang extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    )
  }
}
