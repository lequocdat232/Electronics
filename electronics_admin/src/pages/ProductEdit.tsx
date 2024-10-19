import { Helmet } from "react-helmet-async";
import { axiosClient } from "../lib/axiosClient";
import { SETTINGS } from "../constants/settings";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

interface TCategory {
  _id?: string;
  category_name: string;
}
interface TBrand {
  _id?: string;
  brand_name: string;
}
interface TProducts {
  _id?: string;
  product_name: string;
  price: number;
  discount: number;
  category: {
    _id?: string;
    category_name: string;
  };
  brand: {
    _id?: string;
    brand_name: string;
  };
  description: string;
  thumbnail: string;
  stock: number;
  slug: string;
  order: number;
  specifications: {
    type: string;
    require: false;
  };
}
const ProductEdit = () => {
  const navigate = useNavigate();
  const [formUpdate] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [messageApi] = message.useMessage();
  const { id } = useParams();

  /* ============= Update Sản phẩm================ */
  // const queryClient = useQueryClient();
  const fetchUpdateProduct = async (id: string) => {
    const url = `${SETTINGS.URL_API}/v1/products/${id}`;
    const res = await axiosClient.get(url);
    return res.data.data;
  };
  const getProductById = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchUpdateProduct(id as string),
    enabled: !!id,
  });
  useEffect(() => {
    if (getProductById.data) {
      formUpdate.setFieldsValue({
        ...getProductById.data,
        category: getProductById.data.category._id,
        brand: getProductById.data.brand._id,
      });
    }
  }, [getProductById.data, formUpdate]);
  const updateMutationProduct = useMutation({
    mutationFn: async (payload: TProducts & { id: string }) => {
      const url = `${SETTINGS.URL_API}/v1/products/${payload.id}`;
      const res = await axiosClient.put(url, payload);
      return res.data;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Cập nhật sản phẩm thành công",
      });
      navigate(`/product?msg=update_success`);
    },
    onError: (error) => {
      console.log("Lỗi khi cập nhật sản phẩm:", error);
      messageApi.open({
        type: "error",
        content: `Cập nhật lỗi: ${error.message || "Có lỗi xảy ra"}`,
      });
    },
  });
  const onFinish = async (values: TProducts) => {
    if (fileList.length === 0) {
      // Nếu không có file nào được chọn, vẫn có thể cập nhật sản phẩm
      const info_product = { id: id!, ...values }; // Không cần thêm thumbnail
      updateMutationProduct.mutate(info_product);
    } else {
      const resulUpload = await handleUpload(fileList[0]);
      if (resulUpload !== null) {
        const info_product = { id: id!, ...values, thumbnail: resulUpload };
        // Gọi API để cập nhật sản phẩm
        updateMutationProduct.mutate(info_product);
      }
    }
    // if (fileList.length === 0) {
    //   message.error("Vui lòng chọn file trước khi tải lên.");
    //   // createMutationProduct.mutate(values);
    // } else {
    //   const resulUpload = await handleUpload(fileList[0]);
    //   if (resulUpload !== null) {
    //     const info_product = { id: id!, ...values, thumbnail: resulUpload };
    //     // Gọi API để cập nhật sản phẩm
    //     updateMutationProduct.mutate(info_product);
    //   }
    // }
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
  // handle upload việc upload ảnh
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
  /* ============= GET CATEGORIES, BRANDS ================ */
  const fetchCategories = async () => {
    const url = `${SETTINGS.URL_API}/v1/categories`;
    const res = await axiosClient.get(url);
    return res.data.data;
  };
  const queryCategories = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  console.log(queryCategories.data?.categories_list);
  // Get brands
  const fetchBrands = async () => {
    const url = `${SETTINGS.URL_API}/v1/brands`;
    const res = await axiosClient.get(url);
    return res.data.data;
  };

  const queryBrands = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });
  console.log(queryBrands.data?.brands_list);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Electronics - Sửa sản phẩm </title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Sửa sản phẩm" />
      </Helmet>
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Chỉnh sửa sản phẩm
          </h2>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-[15px]">
            <div className="col-span-12">
              <Form
                name="form-update"
                form={formUpdate}
                onFinish={onFinish}
                layout="vertical"
                autoComplete="off"
              >
                <div className="flex">
                  <div className="form-group w-1/2 pr-2">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Tên Sản Phẩm
                      </span>
                      <Form.Item
                        name="product_name"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tên sản phẩm",
                          },
                        ]}
                      >
                        <Input className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" />
                      </Form.Item>
                    </label>
                  </div>
                  <div className="form-group w-1/2 pl-2">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Đường dẫn
                      </span>

                      <Form.Item name="slug">
                        <Input className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" />
                      </Form.Item>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="flex">
                    <div className="form-group w-1/2 pr-2">
                      <label className="block mt-4 text-sm">
                        <span className="text-gray-700 dark:text-gray-400">
                          Giá
                        </span>
                        <Form.Item name="price">
                          <Input
                            type="number"
                            min="0"
                            className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          />
                        </Form.Item>
                      </label>
                    </div>
                    <div className="form-group w-1/2 pl-2">
                      <label className="block mt-4 text-sm">
                        <span className="text-gray-700 dark:text-gray-400">
                          Khuyến mãi
                        </span>
                        <Form.Item name="discount">
                          <Input
                            type="number"
                            min="0"
                            className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          />
                        </Form.Item>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="form-group w-1/2 pr-2">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Category
                      </span>
                      <Form.Item
                        name="category"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn danh mục",
                          },
                        ]}
                      >
                        <Select
                          className="w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                          placeholder="Chọn danh mục"
                          options={queryCategories.data?.categories_list.map(
                            (category: TCategory) => ({
                              value: category._id,
                              label: category.category_name,
                            })
                          )}
                        />
                      </Form.Item>
                    </label>
                  </div>
                  <div className="form-group w-1/2 pl-2">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Brand
                      </span>
                      <Form.Item
                        name="brand"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn thương hiệu",
                          },
                        ]}
                      >
                        <Select
                          className="w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                          placeholder="Chọn Thương Hiệu"
                          options={queryBrands.data?.brands_list.map(
                            (brand: TBrand) => ({
                              value: brand._id,
                              label: brand.brand_name,
                            })
                          )}
                        />
                      </Form.Item>
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <div className="form-group w-1/2 pr-2">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Tồn kho
                      </span>
                      <Form.Item name="stock">
                        <Input
                          type="number"
                          min=""
                          placeholder = "1"
                          className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        />
                      </Form.Item>
                    </label>
                  </div>
                  <div className="form-group w-1/2 pl-2">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Sắp xếp
                      </span>

                      <Form.Item name="order">
                        <Input
                          type="number"
                          min="0"
                          className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        />
                      </Form.Item>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      Thông số kỹ thuật
                    </span>
                    <Form.Item
                      name="specifications"
                      className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    >
                      <Input.TextArea
                        rows={5}
                        className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        style={{
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          padding: 0,
                        }}
                      />
                    </Form.Item>
                  </label>
                </div>
                <div className="form-group">
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      Chi tiết sản phẩm
                    </span>
                    <Form.Item
                      className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                      name="description"
                    >
                      <Input.TextArea
                        rows={5}
                        className="pl-3 block w-full mt-1 text-sm dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        style={{
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          padding: 0,
                        }}
                      />
                    </Form.Item>
                  </label>
                </div>
                <Row gutter={[16, 16]}>
                  <Col span={3}>
                    <Form.Item name="isBest" valuePropName="checked">
                      <Checkbox name="isBest" className="text-white">
                        Tốt
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="isRecentlyAdded" valuePropName="checked">
                      <Checkbox name="isRecentlyAdded" className="text-white">
                        Sản phẩm mới về
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="isShowHome" valuePropName="checked">
                      <Checkbox name="isShowHome" className="text-white">
                        Hiển thị trang chủ
                      </Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
                <div className="mt-2">
                  <img
                    className="w-[100px] h-[100px] object-cover mb-2"
                    src={
                      getProductById.data?.thumbnail &&
                      getProductById.data?.thumbnail !== null
                        ? `${SETTINGS.URL_IMAGE}/${getProductById.data?.thumbnail}`
                        : `/images/noimage.png`
                    }
                    alt={getProductById.data?.product_name}
                  />
                  <Form.Item
                    label={
                      <span className="block mt-4 mb-3 text-sm text-gray-700 dark:text-gray-400">
                        Ảnh sản phẩm
                      </span>
                    }
                  >
                    <Upload {...uploadProps}>
                      <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                  </Form.Item>
                </div>
                <Form.Item>
                  <button
                    type="submit"
                    className="mt-3 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Cập nhật
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductEdit;
