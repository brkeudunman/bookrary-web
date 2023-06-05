import { Form, Input } from "antd";
import React from "react";

const Payment = () => {
  return (
    <div className="bg-[#ECF9FF] flex flex-col rounded-md">
      <div className="bg-white rounded-md flex flex-col items-start my-14 mx-10 px-12">
        <h1>Enter the Payment Details</h1>
        <div className="border-solid rounded-md">
          <img src="" alt="" />
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
          </Form.Item>
          <div className="flex justify-around">
            <Form.Item label="Expire Date">
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
