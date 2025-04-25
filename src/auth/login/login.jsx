import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React from "react";

const Login = () => {
  const login = (e) => {
    console.log(e);
  };
  return (
    <div className="mt-5 border border-[#e2dfdf] p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4">
      <Form onFinish={login} className="w-[350px]">
        <Form.Item
          name={"loginEmail"}
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
          name={"loginPassword"}
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
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
