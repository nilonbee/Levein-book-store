import React, { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { useGlobalContext } from "../context/context";
import { Select } from "antd";
import postDataApi from "../api-service/postDataApi";
import getApiData from "../api-service/getdataApi";

const BookForm = ({ title, modalOpen, setModalOpen }) => {
  const [form] = Form.useForm();
  const { totalAuthors, fetchAuthors, fetchBooks, page, setAuthors, authors, loading, setLoading} = useGlobalContext();

  // const fetchAllAuthors = async () => {
  //   try {
  //     const allAuthors = await getApiData(`/books`);
  //     setAuthors(allAuthors)
  //   } catch (error) {
  //     console.error("Error fetching book data", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllAuthors();
  // }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    fetchAuthors(1);
  }, []);

  const handleAddBook = async (data) => {
    setLoading(true);
    try {
      let response = await postDataApi("books", data);

      if (response.msg === "SUCCESS") {
        setLoading(false);
        await fetchBooks(page);
        form.resetFields();
        setModalOpen(false);
        // Close the modal
      }
    } catch (error) {
      console.error("Error adding author:", error);
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    form
      .validateFields()
      .then((data) => {
        handleAddBook(data);
      }).then(()=>{
        setLoading(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setModalOpen(false);
  };

console.log('formAuthors',authors);
  return (
    <Modal
      title={`Create ${title}`}
      open={modalOpen}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter the Book Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ISBN"
          name="isbn"
          rules={[
            {
              required: true,
              message: "Please enter the ISBN code",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
              message: "Please enter the author",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select an author" // Changed placeholder text
            optionFilterProp="children"
            onChange={handleChange}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
          {authors?.map((author) => (
              <Select.Option
                key={author._id}
                value={author.isbn}
                label={`${author.firstName} ${author.lastName}`}
              >
                {`${author.firstName} ${author.lastName}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* Add more form fields as needed */}
      </Form>
    </Modal>
  );
};

export default BookForm;
