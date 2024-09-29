import {Request, Response, NextFunction} from 'express'
import brandsService from "../services/brands.service"
import { sendJsonSuccess } from "../helpers/responseHandler"

// 1.Get all Brands
const allBrands  = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const brands = await brandsService.allBrands()
        return sendJsonSuccess(res, "success")(brands)
    } catch (error) {
        next(error)
    }
}

// 2. Find Brand By Id
const findBrandById  = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const brand = await brandsService.findBrandById(id)
        return sendJsonSuccess(res, "success")(brand)
    } catch (error) {
        next(error)
    } 
}

// 3. Create Brand 
const CreateBrand = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body
        const brand = await brandsService.createBrandRecord(payload)
        sendJsonSuccess(res,'success',201)(brand)
    } catch (error) {
        next(error)
    }
}

export default {
    allBrands,
    findBrandById,
    CreateBrand
}