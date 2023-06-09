import { Form, Input } from "antd";
import React from "react";
import PaymentMethod from "../../../../assets/paymentmethod.png";
import CardFront from "../../../../assets/credit-card-front.png";
import CardBack from "../../../../assets/credit-card-back 1.png";

const Payment = () => {
  return (
    <div className="bg-[#ECF9FF] flex flex-col justify-center items-center rounded-md leading-normal">
      <div className="bg-white rounded-md flex flex-col items-start my-14 mx-10 px-12">
        <h1 className="text-black font-bold">Enter the Payment Details</h1>
        <div className="border-4 rounded-lg p-10 mb-12">
          <img
            style={{
              bottom: "0",
              right: "0",
              zIndex: "1",
            }}
            src={CardBack}
            alt=""
          />
          <img
            style={{
              bottom: "30px",
              left: "250px",
              zIndex: "2",
            }}
            src={CardFront}
            alt=""
          />
        </div>
        <Form layout="vertical">
          <div className="flex gap-4 justify-around">
            <Form.Item label="Name">
              <Input className="bg-[#D9D9D9]" />
            </Form.Item>
            <Form.Item label="Surname">
              <Input className="bg-[#D9D9D9]" />
            </Form.Item>
          </div>
          <Form.Item label="Card Number">
            <Input className="bg-[#D9D9D9]" />
            <img src={PaymentMethod} alt="" width={"257px"} height={"38px"} />
          </Form.Item>
          <div className="flex gap-4 justify-around">
            <Form.Item label={<div className="flex flex-wrap">Expire Date</div>}>
              <Input className="bg-[#D9D9D9]" />
            </Form.Item>
            <Form.Item label="CCV">
              <Input className="bg-[#D9D9D9]" />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Payment;
