import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/carthelper";
import Payment from './Payment'

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div className="container w-100">
        <h2>This section is to load products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            className="col-12 w-50 mx-auto border bg-light mt-5"
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2><Payment  products={products} setReload={setReload} /></h2>

      </div>
    );
  };

  return (
    <Base >
      <div className="container row mx-auto my-5 bg-light text-center p-5">
        <div className="col-6">{products.length==0?(<h3>No Products in your cart</h3>)  :loadAllProducts(products)}</div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
