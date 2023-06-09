import React from "react";
import CartItem from "../../../../common/components/cart/cartItem";

const CartItemList = () => {
  return (
    <div className="bg-[#ECF9FF]  justify-between w-full">
      <div className="flex flex-col flex-wrap rounded-md md:p-6 p-2 gap-y-4">
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartItemList;
