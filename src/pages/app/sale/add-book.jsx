import { InboxOutlined, PictureOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, message, notification } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
import { allAuthors, allGenres, dataAllBooks } from "../../../temp/data";
import SubmitButton from "../../../common/components/button/submit";
import Cancel from "../../../common/components/button/cancel";
import { useGetUser } from "../../../hooks/user";
import { useNavigate } from "react-router-dom";

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddBookPage = () => {
  const userId = window.localStorage.getItem("id");
  const navigate = useNavigate();
  const {
    isLoading: isUserLoading,
    data: userData,
    isError: isUserError,
  } = useGetUser(userId);

  const onFinish = (values) => {
    dataAllBooks.push({
      ...values,
      location: "Urla, İzmir - Urla Halk Kütüp.",
      id: dataAllBooks.length+1,
      seller: userData.firstName + " " + userData.lastName,
    });
    allAuthors.push({
      name: values.author,
      books: [],
    });
    notification.success({
      description: "Book has been published!",
      message: "Success!",
    });
    navigate("/genres");
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div className="p-12 bg-[#F7FCFF]">
      <div className="mb-3 md:mb-6">
        <p className="text-xl md:text-3xl font-bold">Add Book</p>
        <p className="text-gray-400 font-medium">
          Information indicated by red star{" "}
          <span className="text-red-500">*</span> must be provided
        </p>
      </div>
      <Form requiredMark onFinish={onFinish}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="md:basis-1/3">
            <p className="text-lg md:text-2xl font-bold">Add Image</p>
            <Form.Item name="image">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon p-4">
                  <PictureOutlined />
                </p>
                <p className="ant-upload-text px-4">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint px-12">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </Form.Item>
          </div>
          <div className="md:basis-2/3">
            <div className="flex gap-x-4">
              <div className="flex-1">
                <p>
                  Author <span className="text-red-500">*</span>
                </p>
                <Form.Item
                  name="author"
                  rules={[
                    { required: true, message: "Please enter the author" },
                  ]}
                >
                  <Input placeholder="Ex: Jane Austen" />
                </Form.Item>
              </div>
              <div className="flex-1">
                <p>
                  Book Name <span className="text-red-500">*</span>
                </p>
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: "Please enter the book name" },
                  ]}
                >
                  <Input placeholder="Ex: Pride & Prejudice" />
                </Form.Item>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex-1">
                <p>
                  Genre <span className="text-red-500">*</span>
                </p>
                <Form.Item
                  name="genre"
                  rules={[{ required: true, message: "Please select a genre" }]}
                >
                  <Select
                    showSearch
                    placeholder="Select Genre"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                  >
                    {allGenres.map((genre) => (
                      <Select.Option key={genre?.id} value={genre?.id}>
                        {genre?.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="flex-1">
                <p>
                  Price <span className="text-red-500">*</span>
                </p>
                <Form.Item
                  name="price"
                  rules={[
                    { required: true, message: "Please enter the price" },
                    { type: "number", message: "The price should be number" },
                  ]}
                >
                  <InputNumber className="w-full" placeholder="₺" />
                </Form.Item>
              </div>
            </div>
            <div className="">
              <p>
                Description <span className="text-red-500">*</span>
              </p>
              <Form.Item
                name="description"
                rules={[
                  { required: true, message: "Please enter the description" },
                  {
                    max: 100,
                    message: "Description must be less than 100 characters",
                  },
                ]}
              >
                <Input.TextArea placeholder="Describe the book, state of the book, and any other similar information about the book here." />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <Form.Item>
            <SubmitButton />
          </Form.Item>
          <Form.Item>
            <Cancel />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddBookPage;
