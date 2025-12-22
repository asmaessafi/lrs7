import { products, type Product, type Category } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: Category): Promise<Product[]>;
}

export class MemStorage implements IStorage {
  private productList: Product[];

  constructor() {
    this.productList = products;
  }

  async getProducts(): Promise<Product[]> {
    return this.productList;
  }

  async getProductsByCategory(category: Category): Promise<Product[]> {
    return this.productList.filter((product) => product.category === category);
  }
}

export const storage = new MemStorage();
