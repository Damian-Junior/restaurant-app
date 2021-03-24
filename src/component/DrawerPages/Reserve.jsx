/** @format */

import React, { useState } from "react";
import {
  Typography,
  Form,
  Select,
  DatePicker,
  TimePicker,
  Button,
  Drawer,
  Input,
  Row,
  Col,
  InputNumber,
  Tooltip,
  Switch,
  Divider,
} from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import "./style.scss";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const onFinish = (fieldsValue) => {
  // Should format date value before submit.
  const values = {
    ...fieldsValue,
    "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
    "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
  };
  console.log("Received values of form: ", values);
};
const { Option } = Select;
const { Text } = Typography;

const Reserve = () => {
  return (
    <div className="reserve ">
      <img
        src="https://m.media-amazon.com/images/I/A1NGhamblCL._SS500_.jpg"
        alt="reservr_imgage"
      />
      <Form
        className="form"
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
      >
        {/* <Text
      style={{
        textAlign: "left",
        fontSize: "1.2em",
        marginBottom: "5px",
      }}
    >
      <strong>Fullname</strong>{" "}
    </Text> */}
        <Form.Item
          className="form_item"
          label="Fullname"
          name="username"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon " />}
            placeholder="Fullname"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone No."
          className="form_item"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <InputNumber placeholder="Number" min={11} max={11} />
        </Form.Item>

        <Form.Item
          name="date-picker"
          label=" Date"
          className="form_item"
          rules={[
            { type: "object", required: true, message: "Please select date!" },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          className="form_item"
          name="time-picker"
          label="Time"
          rules={[
            { type: "object", required: true, message: "Please select date!" },
          ]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          className="form_item"
          name="table-number"
          label="Table No"
          rules={[
            {
              required: true,
              message: "please select number of table",
            },
          ]}
        >
          <Select allowClear placeholder="Select table" pre>
            <Option value="2">Table of Two</Option>
            <Option value="3">Table of Three</Option>
            <Option value="4">Table of Four</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="notification"
          className="form_item"
          label="Notification"
        >
          <Tooltip
            title="You will be notified on phone when your reservation time is near"
            placement="rightBottom"
          >
            <Switch style={{ marginLeft: "10px" }} />
          </Tooltip>
        </Form.Item>
        <hr />
        <Form.Item
          className="form_item"
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit" className="ant-btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <img
        src="https://m.media-amazon.com/images/I/A1NGhamblCL._SS500_.jpg"
        alt="reservr_imgage"
      />
    </div>
  );
};
export default Reserve;
