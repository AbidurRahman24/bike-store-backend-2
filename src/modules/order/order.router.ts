import { Router } from 'express';
import { createOrderController } from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrderController); 


export default orderRouter;
