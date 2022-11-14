import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const CartHandler = (products) => {
    console.log("Cart Successfully added!", products);
    const totalCart = [...cart, products];
    setCart(totalCart);
  };

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 class="container">
        total added : <i class="fa-solid fa-cart-plus"></i>
        <span className="text-muted">({cart.length})</span>
      </h2>
      {<Product name={products} CartHandler={CartHandler}></Product>}
    </div>
  );
}
