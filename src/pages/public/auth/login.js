import { Button, Checkbox, Form, Input, notification } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AccountRecomendationView from "../../../common/view/accountRecommendation";
import { useLogin } from "./../../../hooks/auth";
import { ScrollButton } from "../../../common/components/button/scrollButton";

const description =
  "Don't worry you can create your account in seconds with us! After you join us you can browse, buy, and sell books. Have fun already!";

const LogIn = () => {
  const onSuccess = () => {
    notification.success({
      message: "Success!",
      description: "You have successfully logged in!",
    });
  };

  const { mutate: login } = useLogin(onSuccess);

  const onFinish = (values) => {
    login(values);
  };

  return (
    <div className="md:flex mx-10 md:mx-20 mt-20 items-center ">
      <div className="flex-1 text-center md:text-start ">
        <span>
          <h4 className="text-[#3BC3FF] text-6xl md:text-8xl mb-0.5">Log In</h4>
          <h6 className="text-sm text-[#3BC3FF]">
            No account? No problem. Sign Up{" "}
            <Link className="font-bold" to={"/sign-up"} href="#">
              here.
            </Link>
          </h6>
        </span>

        <Form className="md:w-4/5 mt-8" onFinish={onFinish}>
          <LoginForm />
        </Form>
      </div>
      <div className="md:mt-0 mt-20 md:flex md:flex-1 md:justify-center">
        <AccountRecomendationView
          description={description}
          title={"Welcome Back!"}
        />
      </div>
      <ScrollButton />
    </div>
  );
};

export default LogIn;

const LoginForm = () => {
  return (
    <>
      <Form.Item
        rules={[
          {
            type: "email",
            message: "Input should be a email!",
          },
          {
            message: "Email should be given!",
            required: true,
          },
        ]}
        name={"email"}
      >
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            message: "Password should be given!",
            required: true,
          },
        ]}
        name={"password"}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="text-slate-400">Remember me</Checkbox>
        </Form.Item>
        <span>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full bg-[#3BC3FF]"
          >
            Log In
          </Button>
          <h6 className="text-[#3BC3FF] mt-4 text-xl mb-0.5">
            Forgot Password?
          </h6>
          <h6 className="text-sm text-[#3BC3FF]">
            Update your password{" "}
            <Link className="font-bold" to={""} href="#">
              here.
            </Link>
          </h6>
        </span>
      </Form.Item>
    </>
  );
};
