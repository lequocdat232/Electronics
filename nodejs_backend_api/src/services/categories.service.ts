import Category from '../models/categories.models'


const findAll = async () => {
    const categories = await Category.find();
    console.log('categories', categories)
    return categories
}

export default {
    findAll,
}