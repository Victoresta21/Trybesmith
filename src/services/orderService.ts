import IOrder from '../interfaces/Iorder';
import OrderModel from '../models/orderModel';

class OrderService {
  public model = new OrderModel();

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}

export default OrderService;
