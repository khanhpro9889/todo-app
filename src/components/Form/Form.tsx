import React from "react";
import { Button, Form, Input, Row, Col } from "antd";

type typeForm = {
  name: string;
};

type typeProps = {
  onSubmit: (value: typeForm) => void;
};

export default function FormTodo({ onSubmit }: typeProps) {
  const [form] = Form.useForm();

  const onFinish = (values: typeForm) => {
    console.log(values);
    onSubmit(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Input.Group>
        <Row gutter={10}>
          <Col span={20} xs={18} lg={20}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input!" },
                // { pattern: /([A-Z])+/, message: "Please input right way" },
              ]}
              wrapperCol={{ xs: 24 }}
            >
              <Input style={{ width: "100%" }} placeholder="Thing to do" />
            </Form.Item>
          </Col>
          <Col span={4} xs={6} lg={4}>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Input.Group>
    </Form>
  );
}
