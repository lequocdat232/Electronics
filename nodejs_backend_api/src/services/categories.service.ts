import Category from '../models/categories.models'


const findAll = async () => {
    const categories = await Category.find();
    return categories
}

export default {
    findAll,
}