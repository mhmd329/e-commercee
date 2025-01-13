import React, { useContext, useState } from "react";
import Styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../cartcontext/context";

export const SideCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantity, cartItems, handleRemoveFromCart, BuyCart } =
    useContext(Context);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <div>
      {/* زر فتح السلة */}
      <button className={Styles.electric} onClick={openCart}>
        <FontAwesomeIcon icon={faBolt} />
        <span className={Styles.countNumber}>{totalQuantity}</span>
      </button>

      {/* محتوى السلة */}
      <div className={`${Styles.overlay} ${isOpen ? Styles.open : ""}`}>
        <div className={Styles.cartHeader}>
          <h2>Your Cart</h2>
          <button className={Styles.closeButton} onClick={closeCart}>
            Close
          </button>
        </div>
        <div className={Styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={Styles.cartItem}>
                <div>
                  <p>{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                </div>
                <div className={Styles.parentcartimg}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={Styles.imgCart}
                  />

                
                  <button onClick={() => handleRemoveFromCart(item)}>x</button>
                 
                </div>  
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      <button onClick={()=>BuyCart(cartItems)}>buy all cart</button>
      </div>
    </div>
  );
};
