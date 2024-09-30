import Category from '../models/categories.models'
import createError from 'http-errors'
import { TPayloadCategory } from '../types/modes'

const findAllCategory = async (query: any) => {
    let objSort: any = {};
    const sortBy = query.sort || 'updatedAt'; // Mặc dịnh sắp xếp thep ngày giảm dần
    const orderBy = query.order && query.order == 'ASC' ? 1 : -1
    objSort = { ...objSort, [sortBy]: orderBy }

    // Lọc theo tên thương hiệu
    let objectFilters: any = {};
    if (query.keyword && query.keyword != '') {
        objectFilters = { ...objectFilters, brand_name: new RegExp(query.keyword, 'i') }
    }

    const page_str = query.page
    const limit_str = query.limit
    const page = page_str ? parseInt(page_str as string) : 1
    const limit = limit_str ? parseInt(limit_str as string) : 10

    const totalRecords = await Category.countDocuments(objectFilters);
    const offset = (page - 1) * limit

    const categories = await Category
        .find({
            ...objectFilters
        })
        .select('-__v -id')
        .sort(objSort)
    return {
        categories_list: categories,
        sort: objSort,
        filters: {
            category_name: query.keyword || null
        },
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(totalRecords / limit),
            totalRecords
        }
    }
}

// Tìm 1 record theo ID
const findCategoryById = async (id: string) => {
    //Đi tìm 1 cái khớp id
    const category = await Category.findById(id);

    /* Bắt lỗi khi ko tìm thấy thông tin */
    if (!category) {
        throw createError(400, "Category Not Found");
    }
    return category;
};
// 3. Create new category
const createRecord = async (payload: TPayloadCategory) => {
    const category = await Category.create(payload);
    return category
}
// 4. update Category
const updateCategory = async (id: string, payload: TPayloadCategory) => {
    const category = await findCategoryById(id)
    Object.assign(category, payload);
    await category.save()
    return category
}
// 5. delete Category
const deleteCategory = async (id: string) => {
    const category = await findCategoryById(id)
    await category.deleteOne({ _id: category._id })
    return category
}
export default {
    findAllCategory,
    findCategoryById,
    createRecord,
    updateCategory,
    deleteCategory
}