import {
  CartItemContainer,
  Image,
  ItemDetail,
  Name,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
