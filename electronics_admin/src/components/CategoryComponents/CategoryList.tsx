import axios from "axios";
import { SETTINGS } from "../../constants/settings";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface ICategory {
  _id: number;
  category_name: string;
  description: string;
  slug: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
}

function CategoryList() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchGroups = (): Promise<ICategory[]> =>
    axios.get(SETTINGS.URL_API + "/v1/categories").then((response) => {
      return response.data.data.categories_list;
    });

  const { data, isSuccess } = useQuery<ICategory[]>({
    queryKey: ["categories"],
    queryFn: fetchGroups,
  });

  useEffect(() => {
    if (isSuccess && data && Array.isArray(data)) {
      setCategories(data);
    }
  }, [isSuccess, data, categories]);
  return (
    <div className='col-span-12 md:col-span-7'>
      <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xs'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full whitespace-no-wrap'>
            <thead>
              <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                <th className='px-4 py-3'>Ảnh</th>
                <th className='px-4 py-3'>Tên danh mục</th>
                <th className='px-4 py-3'>Mô tả</th>
                <th className='px-4 py-3'>Đường dẫn</th>
                <th className='px-4 py-3'>Đường dẫn ảnh</th>
                <th className='px-4 py-3'>Trạng thái</th>
                <th className='px-4 py-3'>Thứ tự</th>
                <th className='px-4 py-3'>Sửa</th>
                <th className='px-4 py-3'>Xóa</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
              {Array.isArray(categories) &&
                categories.map((category) => (
                  <tr className='text-gray-700 dark:text-gray-400'>
                    <td className='px-4 py-3'>
                      <div className='flex items-center text-sm'>
                        <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                          {/* <img
                            className='object-cover w-full h-full rounded-full'
                            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                            alt=''
                            loading='lazy'
                          /> */}
                          <div
                            className='absolute inset-0 rounded-full shadow-inner'
                            aria-hidden='true'
                          ></div>
                        </div>
                        <div>
                          <p className='font-semibold'>
                            <img src={category.imageUrl} alt='' />
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-3 text-sm'>
                      {category.category_name}
                    </td>
                    <td className='px-4 py-3 text-xs'>
                      <span className='py-1 font-semibold leading-tight'>
                        {category.description}
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm'>{category.slug}</td>
                    <td className='px-4 py-3 text-sm'>{category.imageUrl}</td>
                    {category.isActive ? (
                      <td className='px-4 py-3 text-xs bg-green-700'>
                        "Hoạt động"
                      </td>
                    ) : (
                      <td className='px-4 py-3 text-xs bg-red-700'>
                        "Ko Hoạt động"
                      </td>
                    )}

                    <td className='px-4 py-3 text-xs'>{category.order}</td>
                    <td className='px-4 py-3 text-sm'>
                      <a
                        href={
                          SETTINGS.URL_frontend_admin +
                          "/category/" +
                          category._id
                        }
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m5 0H4'
                          />
                        </svg>
                      </a>
                    </td>
                    <td className='px-4 py-3 text-sm'>
                      <a href=''>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m5 0H4'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
          <span className='flex items-center col-span-3'>
            Showing 21-30 of 100
          </span>
          <span className='col-span-2'></span>

          <span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
            <nav aria-label='Table navigation'>
              <ul className='inline-flex items-center'>
                <li>
                  <button
                    className='px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
                    aria-label='Previous'
                  >
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                    1
                  </button>
                </li>
                <li>
                  <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                    2
                  </button>
                </li>
                <li>
                  <button className='px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'>
                    3
                  </button>
                </li>
                <li>
                  <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                    4
                  </button>
                </li>
                <li>
                  <span className='px-3 py-1'>...</span>
                </li>
                <li>
                  <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                    8
                  </button>
                </li>
                <li>
                  <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                    9
                  </button>
                </li>
                <li>
                  <button
                    className='px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
                    aria-label='Next'
                  >
                    <svg
                      className='w-4 h-4 fill-current'
                      aria-hidden='true'
                      viewBox='0 0 20 20'
                    >
                      <path
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
