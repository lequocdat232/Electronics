import Category from '../models/categories.models'
import createError from 'http-errors'
import {TPayloadCategory } from '../types/modes'

const findAll = async () => {
    const categories = await Category.find();
    console.log('categories', categories)
    return categories
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
// 3. Create new brand
const createRecord = async (payload: TPayloadCategory) => {
    const category = await Category.create(payload);
    return category
}
// 4. update Brand
const updateCategory = async (id: string, payload: TPayloadCategory) => {
    const category = await findCategoryById(id)
    Object.assign(category, payload);
    await category.save()
    return category
}
const deleteCategory = async (id: string) => {
    const category = await findCategoryById(id)
    if (!category) {
        throw createError(400, "Category Not Found");
    }
    await category.deleteOne({ _id: category._id })
    return category
}
export default {
    findAll,
    findCategoryById,
    createRecord,
    updateCategory,
    deleteCategory
}