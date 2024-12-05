import { Router } from 'express';
import { createOrderController, getAllOrder, getAllOrderRevenue } from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrderController); 
orderRouter.get('/revenue', getAllOrderRevenue); 
orderRouter.get('/', getAllOrder); 


export default orderRouter;
