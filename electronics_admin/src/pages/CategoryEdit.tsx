import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SETTINGS } from "../constants/settings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, message, Upload } from "antd";
import { useParams } from "react-router-dom";
import { UploadProps } from "antd/es/upload";
import { UploadOutlined } from "@ant-design/icons";
interface ICategory {
  _id?: string;
  category_name?: string;
  description?: string;
  slug?: string;
  imageUrl?: string;
  image?: File | null;
  order?: number;
  isActive?: boolean;
}

function CategoryEdit() {
  const [imageUrl, setImageUrl] = useState<string>();
  const [categoryName, setCategoryName] = useState("");
  const [categoryDes, setCategoryDes] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [category, setCategory] = useState<ICategory | null>(null);
  const { id } = useParams<{ id: string }>();

  const categoryId = id;

  // const getBase64 = (img: FileType, callback: (url: string) => void) => {
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => callback(reader.result as string));
  //   reader.readAsDataURL(img);
  // };

  // const beforeUpload = (file: FileType) => {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     message.error("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error("Image must smaller than 2MB!");
  //   }
  //   return isJpgOrPng && isLt2M;
  // };

  const handleBeforeUpload = () => {
    return false; // Prevent automatic upload
  };

  const props: UploadProps = {
    name: "file",
    beforeUpload: handleBeforeUpload,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        setImageUrl(info.file.name);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const queryClient = useQueryClient();

  const fetchGroups = (): Promise<ICategory> =>
    axios
      .get(SETTINGS.URL_API + "/v1/categories/" + categoryId)
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;
      });

  const { data, isSuccess } = useQuery<ICategory>({
    queryKey: ["category"],
    queryFn: fetchGroups,
  });

  useEffect(() => {
    if (isSuccess) {
      setCategory(data);
      console.log("data" + category);
    }
  }, [isSuccess, data, category]);

  const jsonData = {
    category_name: categoryName,
    description: categoryDes,
    slug: categorySlug,
    imageUrl: imageUrl,
    isActive: true,
  };

  const putCategory = async (newCategory: ICategory) =>
    axios
      .put(SETTINGS.URL_API + "/v1/categories/" + category?._id, newCategory)
      .then((response) => response.data);

  // Mutations
  const editCategoryMutation = useMutation({
    mutationFn: putCategory,
    onSuccess: () => {
      // Làm tươi lại dữ liệu, ở trang danh sách
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  const handleEditCategory = () => {
    //Giả lập dữ liệu lấy lên được từ Form, sau đó đưa vào mutate
    editCategoryMutation.mutate({
      ...jsonData,
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Electronics - Sửa danh mục </title>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content='Sửa danh mục' />
      </Helmet>
      <main className='h-full overflow-y-auto'>
        <div className='container px-6 mx-auto grid'>
          <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Danh mục sản phẩm
          </h2>
          <div className='grid grid-cols-12 md:grid-cols-12 gap-[15px]'>
            <div className='col-span-12'>
              <h3 className='mb-3  text-gray-700 dark:text-gray-200'>
                Chỉnh sửa
              </h3>
              <Form onFinish={handleEditCategory}>
                <>
                  <Form.Item
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: "làm ơn hãy điền tên danh mục",
                      },
                      { max: 50, message: "Độ dài ko được quá 50 ký tự" },
                      { min: 4, message: "Độ dài ít nhất là 4 ký tự" },
                    ]}
                  >
                    <label className='block mt-4 text-sm'>
                      <span className='text-gray-700 dark:text-gray-400'>
                        Tên danh mục
                      </span>
                      <Input
                        placeholder={category?.category_name}
                        className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                        type='string'
                        onChange={(e) => setCategoryName(e.target.value)}
                      ></Input>
                    </label>
                  </Form.Item>
                  <Form.Item
                    name='description'
                    rules={[
                      { max: 500, message: "Độ dài ko được quá 500 ký tự" },
                    ]}
                  >
                    <label className='block mt-4 text-sm'>
                      <span className='text-gray-700 dark:text-gray-400'>
                        Mô tả
                      </span>
                      <Input
                        placeholder={category?.description}
                        className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                        type='string'
                        onChange={(e) => setCategoryDes(e.target.value)}
                      ></Input>
                    </label>
                  </Form.Item>
                  <Form.Item
                    name='slug'
                    rules={[
                      { max: 50, message: "Độ dài ko được quá 50 ký tự" },
                    ]}
                  >
                    <label className='block mt-4 text-sm'>
                      <span className='text-gray-700 dark:text-gray-400'>
                        Đường dẫn
                      </span>
                      <Input
                        placeholder={category?.slug}
                        className='pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'
                        type='string'
                        onChange={(e) => setCategorySlug(e.target.value)}
                      ></Input>
                    </label>
                  </Form.Item>
                  <Form.Item
                    name='upload'
                    label='Upload'
                    valuePropName='fileList'
                    getValueFromEvent={(e) =>
                      Array.isArray(e) ? e : e && e.fileList
                    }
                    rules={[
                      { required: true, message: "Please upload a file!" },
                    ]}
                  >
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>
                        <img
                          src={imageUrl}
                          alt='file'
                          style={{ width: "100%" }}
                        />
                      </Button>
                    </Upload>
                  </Form.Item>
                </>

                <Button
                  type='primary'
                  htmlType='submit'
                  className=' mt-3 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
                >
                  Thêm mới
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CategoryEdit;
