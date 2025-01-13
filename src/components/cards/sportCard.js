import React, { useContext } from "react";
import Styles from "./card.module.css";
import { Context } from "../cartcontext/context";
const SportCard = () => {
  const { products, handleAddToCart, handleRemoveFromCart, clearFromCart } =
    useContext(Context);
  return (
    <div className={Styles.parent}>
      <h1>lets WEAR</h1>

      <div className={Styles.parentproduct}>
        {products.map((product) => (
          <div key={product.id} className={Styles.contain}>
            <img
              src={product.image}
              className={Styles.productimage}
              alt={product.name}
            />
            <div className={Styles.desc}>
              <h6>{product.title}</h6>
              <p>{product.description}</p>
            </div>
            <div className={Styles.cardBtnParent}>
              <p>price is :${product.price}</p>

              <button onClick={() => handleAddToCart(product)}>
                add to cart
              </button>
              <button onClick={() => handleRemoveFromCart(product)}>
                remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SportCard;
