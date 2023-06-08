import { React, useState } from "react";
import { Button, Col, message, Row, Steps, theme } from "antd";
import {
  ShoppingCartOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Payment from "./cartPages/payment";
import Result from "./cartPages/result";
import CartItemList from "./cartPages/cartItemList";

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

const Cart = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));
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

  return (
    <div className="px-12 pt-9 bg-white">
      <Row align={"middle"} justify={"center"}>
        <Col span={24} md={12} lg={12} xl={8}>
          <Steps current={current} items={items} />
        </Col>
      </Row>
      <Row align={"top"} justify={"center"}>
        <Col span={18} sm={12} md={18} xs={12}>
          <div style={contentStyle}>{steps[current].content}</div>
        </Col>

        <Col span={6}>
          <div className="mt-6 ml-4 flex flex-col justify-center">
            <div className="bg-[#DBF4FF] flex flex-col justify-center rounded-md text-lg">
              <h3 className="text-center m-2">Cart Summary</h3>
              <div className="bg-[#F7FCFF] rounded-md py-2 px-6 m-4">
                <h4>Base Price</h4>
                <h4>YYY TL</h4>
                <h4>Taxes</h4>
                <h4>XXX TL</h4>
                <div className="text-xl font-semibold">
                  <h4>Total Price</h4>
                  <h4>XXXXX TL</h4>
                </div>
              </div>
              <div className="m-4 flex flex-col">
                {current === steps.length - 3 && (
                  <Button
                    className="bg-[#7AD6FF] text-white flex-1"
                    size="large"
                    type="primary"
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
                    onClick={() => next()}
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
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
