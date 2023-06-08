import React from "react";
import CartItem from "../../../../common/components/cart/cartItem";

const CartItemList = () => {
  return (
    <div className="bg-[#ECF9FF]  justify-between w-full">
      <div className="flex flex-col rounded-md">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartItemList;
