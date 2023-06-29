import { Form, Input, Select } from "antd";
import React from "react";
import SubmitButton from "../../../common/components/button/submit";
import Cancel from "../../../common/components/button/cancel";
import ProfileAvatar from "../../../common/components/profile/profile-avatar";
import { useForm } from "antd/es/form/Form";

const ProfileUpdatePage = () => {
  const [form] = useForm();
  const handleFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center px-16 pt-8">
      <Form
        onFinish={handleFinish}
        form={form}
        className="border flex flex-col "
      >
        <div className="flex justify-between">
          <Form.Item>
            <SubmitButton />
          </Form.Item>
          <Form.Item>
            <Cancel />
          </Form.Item>
        </div>

        <div className="bg-white rounded-sm flex flex-col sm:flex-row py-10 px-10 gap-12">
          <div className="flex-shrink basis-1/4">
            <div className="md:basis-1/4 mb-8  flex-shrink ">
              <ProfileAvatar />
            </div>
            <div className="border rounded-md p-4 flex flex-1 bg-[#B9E9FF] text-[#1E1E1E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <ProfileUpdateFormContent />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProfileUpdatePage;

const ProfileUpdateFormContent = () => {
  const inputStyle = "py-2"; // todo, buglı

  return (
    <>
      <p className="underline font-semibold mb-1">Personal Information</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4  mb-0 sm:mb-4 md:mb-6">
        <Form.Item
          name={"firstName"}
          rules={[
            {
              message: "Name should be given!",
              required: true,
            },
          ]}
        >
          <Input className={inputStyle} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name={"lastName"}
          rules={[
            {
              message: "Last Name should be given!",
              required: true,
            },
          ]}
        >
          <Input className={inputStyle} placeholder="Surname" />
        </Form.Item>
        <Form.Item
          name={"email"}
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
        >
          <Input className={inputStyle} placeholder="E-mail" />
        </Form.Item>
      </div>

      <p className="underline font-semibold mb-1">Library Information</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 mb-0 sm:mb-4 md:mb-6">
        <Form.Item
          name={"city"}
          rules={[
            {
              message: "City should be selected!",
              required: true,
            },
          ]}
        >
          <Select placeholder="City" />
        </Form.Item>
        <Form.Item
          name={"district"}
          rules={[
            {
              message: "The district of the city should be selected!",
              required: true,
            },
          ]}
        >
          <Select placeholder="District" />
        </Form.Item>
        <Form.Item
          name={"library"}
          rules={[
            {
              message: "Library should be selected!",
              required: true,
            },
          ]}
        >
          <Select placeholder="Library" />
        </Form.Item>
      </div>
      <p className="underline font-semibold mb-1">Password Change</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mb-0 sm:mb-4 md:mb-6">
        <Form.Item
          name={"oldPassword"}
          rules={[
            {
              message: "Old password must be entered!",
              required: true,
            },
          ]}
        >
          <Input.Password className={inputStyle} placeholder="Old Password" />
        </Form.Item>
        <Form.Item
          name={"newPassword"}
          rules={[
            {
              message: "New password must be entered!",
              required: true,
            },
          ]}
        >
          <Input.Password className={inputStyle} placeholder="New Password" />
        </Form.Item>
      </div>
    </>
  );
};
