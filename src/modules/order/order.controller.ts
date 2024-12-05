import { Request, Response } from 'express';
import { IOrder } from './order.interface';
import { orderService } from './order.service';

export const createOrderController = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, product: productId, quantity } = req.body;
        if (!email || !productId || !quantity) {
            res.status(400).json({
            success: false,
            message: "Email, product, and quantity are required.",
            });
        }

        const order = await orderService.createOrder(email, productId, quantity);
        res.status(201).json({
            message: "Order created successfully",
            success: true,
            data: order,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
        });
    }
}
export const getAllOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderService.getAllOrder();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: result,
          });
        } 
    catch (err: any) {
        res.status(500).json({
        message: err.message || 'something went wrong',
        success: false,
        error: err,
        stack: err.stack || 'something went wrong',
      });
    }
}
export const getAllOrderRevenue = async (req: Request, res: Response) => {
    try {
        const result = await orderService.getAllOrderRevenueCalculate();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: result,
          });
        } 
    catch (err: any) {
        res.status(500).json({
        message: err.message || 'something went wrong',
        success: false,
        error: err,
        stack: err.stack || 'something went wrong',
      });
    }
}