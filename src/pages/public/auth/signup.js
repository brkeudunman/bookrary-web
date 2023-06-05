import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountRecomendationView from "../../../common/view/accountRecommendation";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const SignUp = () => {
  const [ico, setIco] = useState(<ArrowDownOutlined />);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const scrollBehaviour = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;

    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIco(<ArrowDownOutlined />);
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIco(<ArrowUpOutlined />);
    }
  };
  return (
    <div className="md:flex mx-10 md:mx-20 mt-20 items-center ">
      <div className="flex-1 text-center md:text-start ">
        <span>
          <h4 className="text-[#3BC3FF] text-6xl md:text-8xl mb-0.5">
            Sign Up
          </h4>
          <h6 className="text-sm text-[#3BC3FF]">
            Already a member? No problem. Log In{" "}
            <Link className="font-bold" to={"/login"} href="#">
              here.
            </Link>
          </h6>
        </span>

        <Form className="md:w-4/5 mt-8" onFinish={onFinish}>
          <Form.Item name={"name"}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name={"surname"}>
            <Input placeholder="Surname" />
          </Form.Item>
          <Form.Item name={"e-mail"}>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <span>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full bg-[#3BC3FF]"
              >
                Sign Up
              </Button>
              <span className="text-xs font-light text-[#7AD6FF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </span>
          </Form.Item>
        </Form>
      </div>
      <div className="md:mt-0 mt-20 md:flex md:flex-1 md:justify-center">
        <AccountRecomendationView
          description={"asdsadas"}
          title={"asasdsads"}
        />
      </div>
      <div className="md:hidden rounded-full bg-blue-500 block fixed bottom-4 right-4">
        <Button
          shape="circle"
          type="primary"
          size="large"
          onClick={scrollBehaviour}
        >
          <span className="flex justify-center items-center">{ico}</span>
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
