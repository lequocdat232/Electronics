import { useState } from "react";
import { SETTINGS } from "../../constants/settings";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Form,
  Input,
  message,
  Radio,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { axiosClient } from "../../lib/axiosClient";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface IBrand {
  brand_name?: string;
  description?: string;
  slug?: string;
  order?: number;
  isActive?: boolean;
  imageUrl?: string;
}
function BrandAdd() {
  const navigate = useNavigate();

  const [formCreate] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const fetchAddBrand = async (payload: IBrand) => {
    const url = `${SETTINGS.URL_API}/v1/brands`;
    const res = await axiosClient.post(url, payload);
    return res.data;
  };

  const handleUpload = async (file: UploadFile) => {
    const formData = new FormData();
    formData.append("file", file as unknown as File);
    try {
      const response = await axiosClient.post(
        `${SETTINGS.URL_API}/v1/upload/single-handle`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.statusCode === 200) {
        return response.data.data.link;
      } else {
        return null;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusCode = error.response?.data.statusCode;
        if (statusCode === 400) {
          messageApi.open({
            type: "error",
            content: "Dung lượng ảnh không lớn hơn 2MB",
          });
        } else {
          messageApi.open({
            type: "error",
            content:
              "Chỉ dược upload hình .png, .gif, .jpg, webp, and .jpeg format allowed!",
          });
        }
        return null;
      } else {
        console.log("Unexpected error:", error);
        return null;
      }
    }
  };

  const createMutationBrand = useMutation({
    mutationFn: fetchAddBrand,
    onSuccess: () => {
      //Clear data form
      formCreate.resetFields();
      navigate("/brand?msg=success");
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Thêm thương hiệu lỗi!",
      });
    },
  });

  // Submit Brand create
  const onFinishAdd = async (values: IBrand) => {
    if (fileList.length === 0) {
      createMutationBrand.mutate(values);
    } else {
      const resulUpload = await handleUpload(fileList[0]);
      if (resulUpload !== null) {
        const info_Brand = { ...values, imageUrl: resulUpload };
        // Gọi api để thêm thành viên
        createMutationBrand.mutate(info_Brand);
      }
    }
  };
  const onFinishFailedAdd = async (errorInfo: unknown) => {
    console.log("ErrorInfo", errorInfo);
  };

  const uploadProps: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([file]); // Chỉ chọn một file, nếu cần nhiều file thì sử dụng `setFileList([...fileList, file])`
      return false; // Tắt upload tự động
    },
    fileList,
  };
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Electronics - Thêm nhân viên </title>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content='Thêm nhân viên' />
      </Helmet>
      {contextHolder}
      <div className='col-span-12 md:col-span-5'>
        <h3 className='mb-3  text-gray-700 dark:text-gray-200'>Thêm mới</h3>
        <Form
          onFinish={onFinishAdd}
          onFinishFailed={onFinishFailedAdd}
          form={formCreate}
        >
          <Form.Item
            name='brand_name'
            rules={[
              { required: true, message: "làm ơn hãy điền tên thương hiệu" },
              { max: 50, message: "Độ dài ko được quá 50 ký tự" },
              { min: 4, message: "Độ dài ít nhất là 4 ký tự" },
            ]}
          >
            <label className='block mt-4 text-sm'>
              <span className='text-gray-700 dark:text-gray-400'>
                Tên thương hiệu
              </span>
              <Input
                className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                type='string'
              ></Input>
            </label>
          </Form.Item>
          <Form.Item
            name='description'
            rules={[{ max: 500, message: "Độ dài ko được quá 500 ký tự" }]}
          >
            <label className='block mt-4 text-sm'>
              <span className='text-gray-700 dark:text-gray-400'>Mô tả</span>
              <Input
                className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                type='string'
              ></Input>
            </label>
          </Form.Item>
          <Form.Item
            name='slug'
            rules={[{ max: 50, message: "Độ dài ko được quá 50 ký tự" }]}
          >
            <label className='block mt-4 text-sm'>
              <span className='text-gray-700 dark:text-gray-400'>
                Đường dẫn
              </span>
              <Input
                className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                type='string'
              ></Input>
            </label>
          </Form.Item>

          <Form.Item
            name='order'
            rules={[{ max: 50, message: "Độ dài ko được quá 50 ký tự" }]}
          >
            <label className='block mt-4 text-sm'>
              <span className='text-gray-700 dark:text-gray-400'>Thứ tự</span>
              <Input
                className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                type='number'
              ></Input>
            </label>
          </Form.Item>

          <Form.Item
            label={
              <span className='block mt-4 mb-3 text-sm text-gray-700 dark:text-gray-400'>
                Hoạt động
              </span>
            }
            name='isActive'
          >
            <Radio.Group>
              <Radio className='text-gray-700 dark:text-gray-400' value={true}>
                Hoạt động
              </Radio>
              <Radio className='text-gray-700 dark:text-gray-400' value={false}>
                Ko hoạt động
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <span className='block mt-4 mb-3 text-sm text-gray-700 dark:text-gray-400'>
                Ảnh
              </span>
            }
          >
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>

          <Button
            className=' mt-3 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
            type='primary'
            htmlType='submit'
          >
            Thêm mới
          </Button>
        </Form>
      </div>
    </>
  );
}

export default BrandAdd;
