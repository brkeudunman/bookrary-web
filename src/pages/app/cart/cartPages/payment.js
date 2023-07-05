import { Form, Input } from "antd";
import React, { useState } from "react";
import PaymentMethod from "../../../../assets/paymentmethod.png";
import CardFront from "../../../../assets/credit-card-front.png";
import CardBack from "../../../../assets/credit-card-back 1.png";
import { useForm } from "antd/es/form/Form";

const CardBanner = ({ show }) => {
  return (
    <div>
      <img
        className={`relative lg:block ${show ? "block" : "hidden"}`}
        src={CardBack}
        alt=""
      />
      <img
        className={`relative lg:block ${
          !show ? "block" : "hidden"
        } lg:bottom-10 lg:left-1/4`}
        src={CardFront}
        alt=""
      />
    </div>
  );
};

const Payment = (onFinish) => {
  const [show, setShow] = useState(0);
  const [form] = useForm();
  return (
    <div className="bg-[#ECF9FF] flex justify-center items-center rounded-md leading-normal py-10 md:py-12">
      <div className="bg-white basis-4/5 md:basis-2/3 rounded-md flex flex-col  md:p-5 p-2 w-full gap-y-4">
        <h1 className="text-black font-bold text-lg md:text-xl">
          Enter the Payment Details
        </h1>
        <div className="border-2 rounded-lg p-5 md:p-10 flex justify-center lg:justify-start  xl:justify-center">
          <CardBanner show={show} />
        </div>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item className="flex-1" required label="Cardholder Name">
            <Input onClick={() => setShow(0)} className="bg-[#fafafa]" />
          </Form.Item>

          <Form.Item required label="Card Number">
            <Input onClick={() => setShow(0)} className="bg-[#fafafa]" />
            <img src={PaymentMethod} alt="" width={"257px"} height={"38px"} />
          </Form.Item>

          <div className="flex flex-1 gap-4">
            <Form.Item
              required
              label={<div className="flex  flex-wrap">Expire Date</div>}
              rules={[
                {
                  required: true,
                  message: "Please enter the expiration date",
                },
                {
                  pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                  message: "Please enter a valid expiration date (MM/YY)",
                },
              ]}
            >
              <Input onClick={() => setShow(1)} className="bg-[#fafafa] " />
            </Form.Item>
            <Form.Item
            className=" self-end"
              required
              label="CCV"
              rules={[
                {
                  required: true,
                  message: "Please enter the CCV",
                },
                {
                  pattern: /^[0-9]{3,4}$/,
                  message: "Please enter a valid CCV",
                },
              ]}
            >
              <Input onClick={() => setShow(1)} className="bg-[#fafafa] " />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Payment;
