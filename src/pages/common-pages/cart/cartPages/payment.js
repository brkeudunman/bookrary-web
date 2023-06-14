import { Form, Input } from "antd";
import React from "react";
import PaymentMethod from "../../../../assets/paymentmethod.png";
import CardFront from "../../../../assets/credit-card-front.png";
import CardBack from "../../../../assets/credit-card-back 1.png";

const Payment = () => {
  return (
    <div className="bg-[#ECF9FF] flex justify-center items-center rounded-md leading-normal py-12">
      <div className="bg-white basis-2/3 rounded-md flex flex-col  md:p-5 p-2 w-full">
        <h1 className="text-black font-bold text-lg md:text-xl">
          Enter the Payment Details
        </h1>
        <div className="border-4 rounded-lg p-10 flex lg:justify-start  xl:justify-center ">
          <div>
            <img className="relative lg:block hidden" src={CardBack} alt="" />
            <img
              className="relative lg:block hidden bottom-10 left-1/4"
              src={CardFront}
              alt=""
            />
          </div>
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
            <Form.Item
              label={<div className="flex flex-wrap">Expire Date</div>}
            >
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
