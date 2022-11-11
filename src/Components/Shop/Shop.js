import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Product from '../Product/Product'
import './Shop.css'

export default function Shop() {
      const [products, setProducts] = useState([])

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
       fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data) )
  },[])
  return (
      <div>
          {
            <Product name = {products} ></Product>
          }
      </div>
  )
}
