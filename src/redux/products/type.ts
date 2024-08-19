export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

// src/redux/products/type.ts

export interface Image {
  filename: string;
  fileExtension: string;
  title: string;
  imageUrl: string;
  dateCreated: string;
  productId: number;
}

export interface Characteristic {
  characteristicId: number;
  productCharacteristicName: string;
  productCharacteristicDescription: string;
  productId: number;
}

export interface Product {
  productId: number;
  productName: string;
  productCode: number;
  productPrice: number;
  productDiscount: number;
  priceWithDiscount: number;
  isAvailable: boolean;
  quantityInStock: number;
  productUrl: string;
  productDescription: string;
  categories: string[];
  images: Image[];
  characteristics: Characteristic[];
}

export interface Category {
  categoryId: number;
  categoryName: string;
  url: string;
  isSubCategory: boolean;
  products: Product[];
}

export interface ApiResponse {
  data: Category[];
  isSuccess: boolean;
}
