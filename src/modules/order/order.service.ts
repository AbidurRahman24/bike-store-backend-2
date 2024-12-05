import { Products } from "../product/product.model";
import { Order } from "./order.model";

const createOrder = async (email: string, productId: string, quantity: number) => {
    const product = await Products.findById(productId);
    if (!product) {
        throw new Error("Product not found.");
    }

    if (product.quantity < quantity) {
        throw new Error(`Insufficient stock. Only ${product.quantity} items available.`);
    }

    // Calculate total price
    const totalPrice = product.price * quantity;
    const order = new Order({
        email,
        product: productId,
        quantity,
        totalPrice,
    });
    const savedOrder = await order.save();
    product.quantity -= quantity;
    if (product.quantity === 0) {
        product.inStock = false;
    }
    await product.save();

    return savedOrder;
        
}
const getAllOrder = async () => {
    const result = await Order.find()
    return result
}

const getAllOrderRevenueCalculate = async () => {
    const result = await Order.aggregate([
        {
          $lookup: {
            from: 'products',
            localField: 'product',
            foreignField: '_id',
            as: 'productDetails',
          },
        },
        { $unwind: '$productDetails' },
        {
          $addFields: {
            totalOrderRevenue: {
              $multiply: ['$productDetails.price', '$quantity'],
            },
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$totalOrderRevenue' }
          },
        },
      ]);
  
      return result.length > 0 ? result[0].totalRevenue : 0;
}

export const orderService = {
    createOrder,
    getAllOrder,
    getAllOrderRevenueCalculate,
  }