import { Request, Response, NextFunction } from 'express'
import customersService from '../services/customers.service'
import { sendJsonSuccess } from '../helpers/responseHandler'
// 1.Get all customers

const findAllCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customers = await customersService.findAllCustomer(req.query)
        sendJsonSuccess(res, "success")(customers)
    } catch (error) {
        next(error)
    }
}
// 2. Find Customer By Id
const findCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const customer = await customersService.findCustomerById(id)
        return sendJsonSuccess(res, "success")(customer)
    } catch (error) {
        next(error)
    }
}

// 3. Create Customer

const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body
        const customer = await customersService.createRecord(payload)
        sendJsonSuccess(res, "success", 201)(customer)
    } catch (error) {
        next(error)
    }
}
const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const payload = req.body
        const customer = await customersService.updateCustomer(id, payload)
        sendJsonSuccess(res, "success")(customer)
    } catch (error) {
        next(error)
    }
}
const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const customer = await customersService.deleteCustomer(id)
    sendJsonSuccess(res, "success")(customer)
}
export default {
    findAllCustomer,
    findCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
}