import { Request, Response, NextFunction } from 'express'
import categoriesService from '../services/categories.service'
import { sendJsonSuccess } from "../helpers/responseHandler"

// 1.Get all Categories
const findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await categoriesService.findAll()
        res.status(200).json({
            data: categories
        })
    } catch (error) {
        next(error)
    }

}
// 2. Find Category By Id
const findCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const category = await categoriesService.findCategoryById(id)
        return sendJsonSuccess(res, "success")(category)
    } catch (error) {
        next(error)
    }
}
// 3. Create Category 
const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body
        const category = await categoriesService.createRecord(payload)
        sendJsonSuccess(res, 'success', 201)(category)
    } catch (error) {
        next(error)
    }
}
// 4. update Category
const updateCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const payload = req.body
        const category = await categoriesService.updateCategory(id, payload)
        sendJsonSuccess(res, "success")(category)
    } catch (error) {
        next(error)
    }
}
// 5. delete Category
const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const category = await categoriesService.deleteCategory(id)
    sendJsonSuccess(res, "success")(category)
}

export default {
    findAll,
    findCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategory
}