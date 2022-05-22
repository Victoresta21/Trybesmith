import IProduct from '../interfaces/Iproduct';
import ProductModel from '../models/productModels';

class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };
}

export default ProductService;
