import {Request, Response, NextFunction} from 'express'
import categoriesService from '../services/categories.service'

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

export default {
    findAll
}