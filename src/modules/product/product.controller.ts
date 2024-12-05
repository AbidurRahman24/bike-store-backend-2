import { Request, Response } from 'express';
import { Products } from "./product.model"
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
    try {
      const payload = req.body
  
      const result = await productService.createProduct(payload)
    //   const result = await Products.create(payload)
  
      res.status(200).json({
        message: 'Bikes retrieved successfully',
        success: true,
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        message: err.message || 'something went wrong',
        success: false,
        error: err,
        stack: err.stack || 'something went wrong',
      });
    }
}

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await productService.getAllProduct();    
  
      res.status(200).json({
        message: 'Bike created successfully',
        success: true,
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        message: err.message || 'something went wrong',
        success: false,
        error: err,
        stack: err.stack || 'something went wrong',
      });
    }
}
const getSingleProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
  
      const result = await productService.getSingleProduct(productId);
  
      res.status(200).json({
        success: true,
        message: 'Bike is retrieved succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    } 
};

const updateProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId
      const body = req.body
      const result = await productService.updateProduct(productId, body)
  
      res.status(200).json({
        success: true,
        message: 'Bike updated successfully',
        data: result,
      })
    } catch (error) {
      res.json({
        status: false,
        message: 'Something went wrong',
        error,
      })
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId
      await productService.deleteProduct(productId)
  
      res.status(200).json({
        message: 'Bike deleted successfully',
        success: true,
        data: {},
      })
    } catch (error) {
      res.json({
        message: 'Something went wrong',
        status: false,
        error,
      })
    }
}
  
export const productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct

}