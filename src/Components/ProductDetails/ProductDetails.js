import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  let { key } = useParams();

  let [productss, setProducts] = useState({});

  let [count, setCount] = useState(0);

  const increaseHandler = () => {
    if (count >= 0) {
      count = count + 1;
    }
    setCount(count);
  };
  const decreaseHandler = () => {
    if (count > 0) {
      count = count - 1;
    }
    setCount(count);
  };

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${key}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [key]);

  return (
    <div className="bg-light m-auto">
      <div className="container ">
        <div className="p-4">
          <div className="row p-2">
            <div className="col-md-6 p-3 col-8  bg-white">
              <img
                src={productss.image}
                className="img-fluid w-100"
                alt="img"
              />
            </div>

            <div className="col-md-6 p-3 col-12 bg-white">
              <h2>{productss.title}</h2>
              <div className="d-flex align-items-center">
                <p className="text-warning py-2">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <p className="text-muted ">({450})</p>
              </div>
              <p className="text-danger fs-2">${productss.price}</p>
              <div className="d-flex align-items-center">
                <p className="me-4">Quantity </p>
                <div className="d-flex ">
                  <button
                    onClick={decreaseHandler}
                    type="button"
                    className="btn btn-light"
                  >
                    -
                  </button>
                  <input
                    type="number "
                    className="w-25 mx-3 form-control border-none "
                    value={count}
                  />
                  <button onClick={increaseHandler} className="btn btn-light">
                    +
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-primary fs-5 my-4 me-2 w-50 "
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-secondary fs-5 my-4 w-50"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 bg-white p-3">
            <h3>Product details of {productss.title}</h3>
            <p>{productss.description}</p>
          </div>
          <div className="mt-5 bg-white p-3">
            <h3>Rating and Review of {productss.title}</h3>
            <p className="fs-1">
              4/<span className="text-muted">5</span>
            </p>
            <p className="text-warning fs-3">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
