import React from "react";
import CartItem from "../../../../common/components/cart/cartItem";

const CartItemList = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-[#ECF9FF] flex flex-col rounded-md">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartItemList;
