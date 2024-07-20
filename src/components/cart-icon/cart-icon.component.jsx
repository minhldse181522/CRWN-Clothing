import "./cart-icon.styles.scss";
import shoppingBagSvg from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsOpenCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsOpenCart}>
      <img
        src={shoppingBagSvg}
        alt="Shopping Bag Icon"
        className="shopping-icon"
      />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
