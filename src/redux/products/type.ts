export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}
export interface Category {
  categoryId: number;
  categoryName: string;
  url?: string; // Optional since it's not visible in the screenshot
  isSubCategory?: boolean; // Optional since it's not visible in the screenshot
  products?: Product[]; // Optional since it's not visible in the screenshot
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
  categories: Category[];
  characteristics: Characteristic[];
  images: Image[];
  isAvailable: boolean;
  priceWithDiscount: number;
  productCode: number;
  productDescription: string;
  productDiscount: number;
  productId: number;
  productName: string;
  productPrice: number;
  productUrl?: string;
  quantityInStock: number;
  imageURL: string;
}

export interface ProductsApiResponse {
  data: Product[];
  isSuccess: boolean;
}

export interface ProductApiRes {
  data: Product;
  isSuccess: boolean;
  message: string;
}
export interface InitProductsState {
  result: Product[];

  status: string;
}
// export type ProductsApiResponse = ApiResponse<Product[]>; // API response with array of products
// export type ProductApiResponse = ApiResponse<Product>; // API response for a single product
