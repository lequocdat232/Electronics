import Customer from '../models/customers.model'
import createError from 'http-errors'
import { TCustomer } from '../types/modes'

const findAllCustomer = async (query: any) => {
    let objSort: any = {};
    const sortBy = query.sort || 'updatedAt'; // Mặc dịnh sắp xếp thep ngày giảm dần
    const orderBy = query.order && query.order == 'ASC' ? 1 : -1
    objSort = { ...objSort, [sortBy]: orderBy }

    // Lọc theo tên thương hiệu
    let objectFilters: any = {};
    if (query.keyword && query.keyword != '') {
        objectFilters = { ...objectFilters, first_name: new RegExp(query.keyword, 'i') }
    }

    const page_str = query.page
    const limit_str = query.limit
    const page = page_str ? parseInt(page_str as string) : 1
    const limit = limit_str ? parseInt(limit_str as string) : 10

    const totalRecords = await Customer.countDocuments(objectFilters);
    const offset = (page - 1) * limit

    const customers = await Customer
        .find({
            ...objectFilters
        })
        .select('-__v -id')
        .sort(objSort)
        .skip(offset)
        .limit(limit)
    return {
        customers_list: customers,
        sort: objSort,
        filters: {
            first_name: query.keyword || null
        },
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(totalRecords / limit),
            totalRecords
        }
    }
}
const findCustomerById = async (id: string) => {
    //Đi tìm 1 cái khớp id
    const customer = await Customer.findById(id)
    /* Bắt lỗi khi ko tìm thấy thông tin */
    if (!customer) {
        throw createError(400, 'Customer Not Found')
    }
    return customer
}
// 3. Create new customer
const createRecord = async (payload: TCustomer) => {
    const customer = await Customer.create(payload);
    return customer
}
// 4. update Customer
const updateCustomer = async (id: string, payload: TCustomer) => {
    const customer = await findCustomerById(id)
    Object.assign(customer, payload);
    await customer.save()
    return customer
}
// 5. delete Customer
const deleteCustomer = async (id: string) => {
    const customer = await findCustomerById(id)
    await customer.deleteOne({ _id: customer._id });
    return customer
}
export default {
    findAllCustomer,
    findCustomerById,
    createRecord,
    updateCustomer,
    deleteCustomer
}