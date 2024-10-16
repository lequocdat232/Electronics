import { Response, Request, NextFunction } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import productsService from '../services/products.service';

/* get All Product Controller */
const findAllProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productsService.findAllProduct(req.query);
    sendJsonSuccess(res)(products)
  } catch (error) {
    next(error)
  }

}
const findOneProductId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const product = await productsService.findOneProductId(id);
    sendJsonSuccess(res)(product)
  } catch (error) {
    next(error)
  }

}
const createDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body
    const product = await productsService.createNewProduct(payload)
    sendJsonSuccess(res, 'success', 201)(product)
  } catch (error) {
    next(error)
  }
}
const updateById = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const {id} = req.params;

    const product = await productsService.updateProductById(id, req.body);
    sendJsonSuccess(res)(product)
  } catch (error) {
    next(error)
  }
  
}

const deleteById = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const {id} = req.params;

    const product = await productsService.deleteProductById(id);
    sendJsonSuccess(res)(product)
  } catch (error) {
    next(error)
  }
  
}
export default {
  findAllProduct,
  findOneProductId,
  createDocument,
  updateById,
  deleteById,
}