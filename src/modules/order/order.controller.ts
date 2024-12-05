import { Request, Response } from 'express';
import createOrder from './order.service';
import { IOrder } from './order.interface';

export const createOrderController = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, product: productId, quantity } = req.body;
        if (!email || !productId || !quantity) {
            res.status(400).json({
            success: false,
            message: "Email, product, and quantity are required.",
            });
        }

        const order = await createOrder(email, productId, quantity);
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
        });
    }
}
