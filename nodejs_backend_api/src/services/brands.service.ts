import createError from "http-errors";
import Brand from "../models/brands.model";
import { payloadBrand } from "../types/modes";

// 1.Get all Brands
const allBrands = async () => {
    const brands = await Brand.find()
    return brands
}
// 2.Find Brand by Id
const findBrandById = async(id: string)=>{
    const brand = await Brand.findById(id)
    if(!brand){
        throw createError(400, 'Brand Not Found')
    }
    return brand
}

// 3. Create new brand
const createBrandRecord = async(payload: payloadBrand) =>{
    const brand = await Brand.create(payload)
    return brand
}

export default {
    allBrands,
    findBrandById,
    createBrandRecord
}