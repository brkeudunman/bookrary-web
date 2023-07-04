import { Button, Form, Input, Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AccountRecomendationView from "../../../common/view/accountRecommendation";
import { useRegister } from "../../../hooks/auth";
import { Option } from "antd/es/mentions";
import { ScrollButton } from "../../../common/components/button/scrollButton";

const description =
  "Don't worry you can create your account in seconds with us! After you join us you can browse, buy, and sell books. Have fun already!";

const SignUp = () => {
  const { mutate } = useRegister();
  const onFinish = (values) => {
    mutate(values);
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
          <SignUpForm />
        </Form>
      </div>
      <div className="md:mt-0 mt-20 md:flex md:flex-1 md:justify-center">
        <AccountRecomendationView
          description={description}
          title={"Don't Have An Account?"}
        />
      </div>
      <ScrollButton />
    </div>
  );
};

export default SignUp;

const SignUpForm = () => {
  const options = [
    {
      value: 1,
      label: "Izmir Yüksek Teknoloji Enstitüsü Kütüphane",
    },
  ];

  const prefixSelector = (
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="90">+90</Option>
    </Select>
  );

  return (
    <>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Name is required",
          },
        ]}
        name={"firstName"}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Surname is required",
          },
        ]}
        name={"lastName"}
      >
        <Input placeholder="Surname" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Email is required",
          },
        ]}
        name={"email"}
      >
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          placeholder="Phone Number"
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Password is required",
          },
        ]}
        name={"password"}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="passwordAgain"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            message: "Library should be selected!",
            required: true,
          },
        ]}
        name={"libraryId"}
      >
        <Select
          showSearch
          placeholder="Select a Library"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={options}
        />
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
        </span>
      </Form.Item>
    </>
  );
};
