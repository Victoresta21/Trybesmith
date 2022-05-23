import connection from './connection';
import IOrder from '../interfaces/Iorder';

class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await connection.execute(
      'SELECT ord.id as id, ord.userId as userId FROM Trybesmith.Orders as ord;',
    );
    const [products] = await connection.execute(
      'SELECT orderId, id as prodId  FROM Trybesmith.Products;',
    );

    const orderObj: Array<IOrder> = Object
      .values(orders).map((order) => ({ id: order.id, userId: order.userId, productsIds: [] }));

    Object.values(products).forEach((product) => {
      Object.values(orders).forEach((order, index) => {
        if (order.id === product.orderId) {
          orderObj[index].productsIds.push(product.prodId);
        }
      });
    });

    return orderObj as IOrder[];
  };
}

export default OrderModel;
