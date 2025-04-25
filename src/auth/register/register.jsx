import { Button, Form, Input } from "antd";
import React from "react";

const Register = () => {
  return (
    <div className="mt-5 border border-[#e2dfdf] p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4">
      <Form className="w-[350px]">
        <Form.Item
          name={"text"}
          rules={[
            {
              message: "Iltimos to'ldiring",
            },
          ]}
        >
          <Input placeholder="Name..." autoComplete="name" />
        </Form.Item>
        <Form.Item
          name={"registerEmail"}
          rules={[
            {
              required: true,
              message: "Iltimos to'ldiring",
            },
            { type: "email", message: "Email formati noto'g'ri!" },
          ]}
        >
          <Input placeholder="Email...." autoComplete="email" />
        </Form.Item>
        <Form.Item
          name={"registerPassword"}
          rules={[
            {
              required: true,
              message: "Iltimos to'ldiring",
            },
          ]}
        >
          <Input.Password
            placeholder="********"
            autoComplete="current-password"
          />
        </Form.Item>
        <Button className="w-full" htmlType="submit" type="primary">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
