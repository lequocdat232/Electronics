import { SETTINGS } from "../../constants/settings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { axiosClient } from "../../lib/axiosClient";
import { Helmet } from "react-helmet-async";
import { Form, Button, message, Input, Pagination, Spin } from "antd";
import { FaEarthAmericas } from "react-icons/fa6";
import { LoadingOutlined } from "@ant-design/icons";

interface TCategory {
  _id: number;
  category_name: string;
  description: string;
  slug: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
}

interface CategoriesResponse {
  data: {
    categories_list: TCategory[];
  };
}

interface TFilter {
  keyword: string;
  name: string;
  slug: string;
}

function CategoryList() {
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [params] = useSearchParams();
  const [formSearch] = Form.useForm();
  const page_str = params.get("page");
  const page = page_str ? parseInt(page_str) : 1;
  const limit = 10;
  const keyword = params.get("keyword");
  const name = keyword ? keyword : null;
  const slug_category = params.get("slug");
  const slug = slug_category ? slug_category : null;
  const msg = params.get("msg");
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoriesResponse | null>(null);

  const onFinishSearch = async (values: TFilter) => {
    const { keyword, slug } = values;

    const queryString = [
      keyword ? `keyword=${keyword.trim()}` : "",
      slug ? `slug=${slug.trim()}` : "",
    ]
      .filter(Boolean)
      .join("&");

    navigate(`/category${queryString ? `?${queryString}` : ""}`);
  };
  const onFinishFailedSearch = async (errorInfo: unknown) => {
    console.log("ErrorInfo", errorInfo);
  };
  const fetchCategories = useCallback(async () => {
    let url = `${SETTINGS.URL_API}/v1/categories?`;
    if (name) {
      url += `keyword=${name}&`;
    }
    if (slug) {
      url += `slug=${slug}&`;
    }
    url += `page=${page}&limit=${limit}`;
    const response = await axiosClient.get(url);
    setCategories(response.data);
    return response.data.data;
  }, [name, page, slug]);

  useEffect(() => {
    // If state is passed, reload the list
    if (location.state?.reload) {
      // Trigger your fetchCategories function here to reload data
      fetchCategories();
    }
  }, [location.state, fetchCategories]);

  const getAllCategory = useQuery({
    queryKey: ["categories", page, name, slug],
    queryFn: fetchCategories,
  });

  const { isLoading } = getAllCategory;
  const hasShownMessageRef = useRef(false);
  useEffect(() => {
    if (msg && msg !== null && !hasShownMessageRef.current) {
      messageApi.open({
        type: "success",
        content: "Thêm thành viên thành công!",
      });
      hasShownMessageRef.current = true;
    }
  }, [msg, messageApi]);

  useEffect(() => {
    if (
      page === 1 &&
      !params.has("msg") &&
      !params.has("keyword") &&
      !params.has("slug") &&
      !params.has("name")
    ) {
      navigate("/category");
    }
  }, [page, navigate, params]);

  const queryClient = useQueryClient();
  const fetchDeleleCategory = async (id: string) => {
    const url = `${SETTINGS.URL_API}/v1/categories/${id}`;
    const res = await axiosClient.delete(url);
    return res.data.data;
  };
  const deleteCategory = useMutation({
    mutationFn: fetchDeleleCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      messageApi.open({
        type: "success",
        content: "Xóa danh mục thành công!",
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi trong quá trình xóa!",
      });
    },
  });

  const handleDelete = (itemId: string) => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmed) {
      deleteCategory.mutate(itemId);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Electronics - Danh mục </title>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content='Danh mục' />
      </Helmet>
      {contextHolder}
      <div className='col-span-12 md:col-span-7'>
        <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xs'>
          <div className='w-full overflow-x-auto'>
            <Form
              form={formSearch}
              name='form-search'
              onFinish={onFinishSearch}
              onFinishFailed={onFinishFailedSearch}
              autoComplete='on'
              layout='vertical'
            >
              <div className='grid gid-cols-12 md:grid-cols-4 gap-[15px]'>
                <Form.Item name='keyword'>
                  <Input placeholder='Nhập tên danh mục' />
                </Form.Item>
                <Form.Item>
                  <Button
                    className='w-[120px] px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
                    type='primary'
                    htmlType='submit'
                  >
                    Lọc
                  </Button>
                </Form.Item>
              </div>
            </Form>

            <Spin
              spinning={isLoading}
              indicator={<LoadingOutlined style={{ fontSize: 48 }} />}
            >
              <table className='w-full whitespace-no-wrap'>
                <thead>
                  <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                    <th className='px-4 py-3'>Ảnh</th>
                    <th className='px-4 py-3'>Tên danh mục</th>
                    <th className='px-4 py-3'>Đường dẫn</th>
                    <th className='px-4 py-3'>Mô tả</th>
                    <th className='px-4 py-3'>Thứ tự</th>
                    <th className='px-4 py-3'>Trạng thái</th>
                    <th className='px-4 py-3'>Hành động</th>
                  </tr>
                </thead>

                <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                  {categories &&
                  categories?.data?.categories_list.length > 0 ? (
                    categories?.data?.categories_list.map(
                      (item: TCategory, i: number) => {
                        return (
                          <tr
                            key={i}
                            className='text-gray-700 dark:text-gray-400'
                          >
                            <td className='px-4 py-3'>
                              {item.imageUrl && item.imageUrl !== null ? (
                                <img
                                  className='w-[40px] h-[40px] object-cover'
                                  src={`${SETTINGS.URL_IMAGE}/${item.imageUrl}`}
                                  alt={item.imageUrl}
                                />
                              ) : (
                                <img
                                  className='w-[40px] h-[40px] object-cover'
                                  src='/images/noImage.jpg'
                                  alt={item.imageUrl}
                                />
                              )}
                            </td>
                            <td className='px-4 py-3 text-sm'>
                              {item.category_name}
                            </td>
                            <td className='px-4 py-3 text-xs'>{item.slug}</td>
                            <td className='px-4 py-3 text-xs'>
                              {item.description}
                            </td>
                            <td className='px-4 py-3 text-xs'>{item.order}</td>
                            <td className='px-4 py-3 text-sm '>
                              {item.isActive ? (
                                <FaEarthAmericas
                                  className='text-green-500 cursor-pointer m-auto'
                                  title='Đang kích hoạt'
                                />
                              ) : (
                                <FaEarthAmericas
                                  className='text-red-500 cursor-pointer m-auto'
                                  title='Bị khóa'
                                />
                              )}
                            </td>

                            <td className='px-4 py-3 grid grid-cols-2'>
                              <div className='flex items-center space-x-4 text-sm'>
                                <button
                                  onClick={() => {
                                    navigate(`/category/${item._id}`);
                                  }}
                                  className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'
                                  aria-label='Edit'
                                >
                                  <svg
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                  >
                                    <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
                                  </svg>
                                </button>
                              </div>
                              <div className='flex items-center space-x-4 text-sm'>
                                <button
                                  onClick={() => {
                                    handleDelete(String(item._id));
                                  }}
                                  className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'
                                  aria-label='Delete'
                                >
                                  <svg
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                                      clipRule='evenodd'
                                    ></path>
                                  </svg>
                                </button>{" "}
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    )
                  ) : (
                    <tr className='text-gray-700 dark:text-gray-400'>
                      <td colSpan={7} className='text-center py-3'>
                        {keyword != null || name != null || slug != null
                          ? "Không tìm thấy"
                          : "Dữ liệu đang được cập nhật"}
                      </td>
                    </tr>
                  )}{" "}
                </tbody>
              </table>
            </Spin>
          </div>
          <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
            <span className='flex col-span-12 mt-2 m-auto'>
              <nav aria-label='Table navigation'>
                {getAllCategory?.data?.pagination.totalRecords >
                  getAllCategory?.data?.pagination.limit && (
                  <Pagination
                    current={page}
                    className='inline-flex items-center'
                    onChange={(newPage) => {
                      navigate(`/category?page=${newPage}`);
                    }}
                    total={getAllCategory?.data?.pagination.totalRecords || 0}
                    pageSize={getAllCategory?.data?.pagination.limit || 10}
                  />
                )}
              </nav>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryList;
