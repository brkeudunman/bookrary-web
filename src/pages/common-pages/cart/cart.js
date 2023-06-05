import React from "react";
import { Button, Col, message, Row, Steps, theme } from "antd";
import {
  ShoppingCartOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
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
    <div className="px-12 pt-9">
      <Row align={"middle"} justify={"center"}>
        <Col span={24} md={12} lg={12} xl={8}>
          <Steps current={current} items={items} />
        </Col>
      </Row>

      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button className="bg-blue-500" type="primary" onClick={() => next()}>
            Next
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
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
