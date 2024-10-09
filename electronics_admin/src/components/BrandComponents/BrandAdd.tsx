/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { SETTINGS } from "../../constants/settings";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Radio } from "antd";
interface IBrand {
  brand_name?: string;
  description?: string;
  slug?: string;
  imageUrl?: string;
  order?: number;
  isActive?: boolean;
}

function BrandAdd() {
  const queryClient = useQueryClient();

  const [BrandName, setBrandName] = useState("");
  const [BrandDes, setBrandDes] = useState("");
  const [BrandSlug, setBrandSlug] = useState("");
  const [BrandImageUrl, setBrandImageUrl] = useState("");
  const [BrandOrder, setBrandOrder] = useState(0);
  const [BrandIsActive, setBrandIsActive] = useState(true);

  const jsonData: IBrand = {
    brand_name: BrandName,
    description: BrandDes,
    slug: BrandSlug,
    imageUrl: BrandImageUrl,
    order: Number(BrandOrder),
    isActive: Boolean(BrandIsActive),
  };

  const postBrand = async (newBrand: IBrand) =>
    axios
      .post(SETTINGS.URL_API + "/v1/brands", newBrand)
      .then((response) => response.data);

  // Mutations
  const addBrandMutation = useMutation({
    mutationFn: postBrand,
    onSuccess: () => {
      // Làm tươi lại dữ liệu, ở trang danh sách
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
  });

  const handleAddBrand = () => {
    //Giả lập dữ liệu lấy lên được từ Form, sau đó đưa vào mutate
    addBrandMutation.mutate({
      ...jsonData,
    });
  };
  return (
    <div className='col-span-12 md:col-span-5'>
      <h3 className='mb-3  text-gray-700 dark:text-gray-200'>Thêm mới</h3>
      <Form onSubmitCapture={handleAddBrand}>
        <Form.Item
          name='name'
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
              onChange={(e) => setBrandName(e.target.value)}
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
              onChange={(e) => setBrandDes(e.target.value)}
            ></Input>
          </label>
        </Form.Item>
        <Form.Item
          name='slug'
          rules={[{ max: 50, message: "Độ dài ko được quá 50 ký tự" }]}
        >
          <label className='block mt-4 text-sm'>
            <span className='text-gray-700 dark:text-gray-400'>Đường dẫn</span>
            <Input
              className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
              type='string'
              onChange={(e) => setBrandSlug(e.target.value)}
            ></Input>
          </label>
        </Form.Item>
        <Form.Item
          name='slug'
          rules={[{ max: 50, message: "Độ dài ko được quá 50 ký tự" }]}
        >
          <label className='block mt-4 text-sm'>
            <span className='text-gray-700 dark:text-gray-400'>
              Đường dẫn ảnh
            </span>
            <Input
              className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
              type='string'
              onChange={(e) => setBrandImageUrl(e.target.value)}
            ></Input>
          </label>
        </Form.Item>
        <Radio.Group
          onChange={(e) => setBrandIsActive(Boolean(e.target.value))}
        >
          <Radio className='text-gray-700 dark:text-gray-400' value={true}>
            Hoạt động
          </Radio>
          <Radio className='text-gray-700 dark:text-gray-400' value={false}>
            Ko hoạt động
          </Radio>
        </Radio.Group>
        <Form.Item
          name='slug'
          rules={[{ max: 50, message: "Độ dài ko được quá 50 ký tự" }]}
        >
          <label className='block mt-4 text-sm'>
            <span className='text-gray-700 dark:text-gray-400'>Thứ tự</span>
            <Input
              className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
              type='number'
              onChange={(e) => setBrandOrder(Number(e.target.value))}
            ></Input>
          </label>
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
  );
}

export default BrandAdd;
