import { React, useState, useEffect } from "react";
import { Button, Col, message, Row, Steps, theme } from "antd";
import {
  ShoppingCartOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Payment from "./cartPages/payment";
import Result from "./cartPages/resultPage";
import CartItemList from "./cartPages/cartItemList";
import getToken from "../../../util/get-token";
import {
  useCart,
  useDispatchCart,
} from "../../../common/components/cart/cartProvider";

const steps = [
  {
    title: "Cart",
    content: <CartItemList />,
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "Payment",
    content: <Payment />,
    icon: <CreditCardOutlined />,
  },
  {
    title: "Result",
    content: <Result />,
    icon: <CheckCircleOutlined />,
  },
];

const CartManagementPanel = ({ onFinish, totalPrice, setCurrent, current }) => {
  const userToken = getToken();
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div
      className={`flex flex-col justify-center ${current === 2 && `hidden`}`}
    >
      <div className="bg-[#DBF4FF] flex flex-col justify-center text-lg rounded-md border p-3 gap-4 md:mt-4">
        <h3 className="text-center ">Cart Summary</h3>
        <div className="bg-[#F7FCFF] rounded-md py-2 px-6 ">
          <h4>Base Price</h4>
          <h4>{totalPrice} TL</h4>
          <h4>Taxes</h4>
          <h4>0 TL</h4>
          <div className="text-xl font-semibold">
            <h4>Total Price</h4>
            <h4>{totalPrice} TL</h4>
          </div>
        </div>
        <div className="flex flex-col">
          {current === steps.length - 3 && (
            <Button
              className="bg-[#7AD6FF] text-white flex-1"
              size="large"
              type="primary"
              disabled={!userToken || !totalPrice}
              onClick={() => next()}
            >
              Submit Cart
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button
              className="bg-[#7AD6FF] text-white flex-1"
              size="large"
              type="primary"
              onClick={onFinish}
              htmlType="submit"
            >
              Submit Order
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              className="bg-[#7AD6FF] text-white flex-1 mt-1"
              size="large"
              type="primary"
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const CartPage = ({ currentPage }) => {
  const { token } = theme.useToken();

  const contentStyle = {
    lineHeight: "120px",
    lineWidth: "60px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `2px solid ${token.colorBorder}`,
    marginTop: 16,
  };

  return <div style={contentStyle}>{steps[currentPage].content}</div>;
};

const Cart = () => {
  const [current, setCurrent] = useState(0);
  const items = useCart();
  const dispatch = useDispatchCart();
  var totalPrice = 0;

  items.map((item) => {
    return (totalPrice = totalPrice + item.data.price);
  });

  const onSuccessOrder = () => {
    message.success("Order is success!", 2);
    setCurrent(current + 1);
    dispatch({ type: "CLEAR" });
  };

  const stepItems = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  return (
    <div className="px-12 pt-9 bg-white h-screen">
      <Row align={"middle"} justify={"center"}>
        <Col span={24} md={12} lg={12} xl={8}>
          <Steps current={current} items={stepItems} />
        </Col>
      </Row>
      <Row align={"top"} justify={"center"} gutter={[24, 12]}>
        <Col span={24} md={20} lg={current !== 2 ? 17 : 24}>
          <CartPage onSuccessOrder={onSuccessOrder} currentPage={current} />
        </Col>

        <Col span={24} md={20} lg={6} xl={6}>
          <CartManagementPanel
            totalPrice={totalPrice}
            current={current}
            setCurrent={setCurrent}
            onFinish={onSuccessOrder}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
