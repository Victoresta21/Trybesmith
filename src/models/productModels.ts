import connection from './connection';
import IProduct from '../interfaces/Iproduct';

class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await connection.execute(
      'SELECT * FROM Trybesmith.Products;',
    );
    return product as IProduct[];
  };
}

export default ProductModel;
