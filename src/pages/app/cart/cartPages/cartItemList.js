import React from "react";
import CartItem from "../../../../common/components/cart/cartItem";
import {
  useCart,
  useDispatchCart,
} from "../../../../common/components/cart/cartProvider";

const CartItemList = () => {
  const items = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    console.log(index,"indeximben")
    dispatch({ type: "REMOVE", index: index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <div className="bg-[#ECF9FF]  justify-between w-full">
      <div className="flex flex-col flex-wrap rounded-md md:p-6 p-2 gap-y-4">
        {items.map((item, index) => (
          <CartItem
            handleRemove={() => handleRemove(item.data.id)}
            key={item.data.id}
            bookData={item}
            index={item.data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
