import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { useGlobalContext } from "../context/context";

import postDataApi from "../api-service/postDataApi";

const AuthorForm = ({ title, modalOpen, setModalOpen }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const {fetchAuthors, page} = useGlobalContext();

  const handleAddAuthor = async (data) => {
    setLoading(true);
    try {
      let response = await postDataApi("authors", data); 
      
      if(response.msg==="SUCCESS") {
        setLoading(false);
        await fetchAuthors(page);
        form.resetFields(); // Reset the form
        setModalOpen(false);
         // Close the modal
      }
     
    } catch (error) {
      console.error("Error adding author:", error);
      
    }
  };

  const handleOk = () => {
    form
      .validateFields().then((data) => {
        handleAddAuthor(data),
        () => console.log('formData', data);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setModalOpen(false);
  };

  return (
    <Modal
      title={`Add ${title}`}
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please enter the author's firstName",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please enter the author's lastName",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* Add more form fields as needed */}
      </Form>
    </Modal>
  );
};

export default AuthorForm;
