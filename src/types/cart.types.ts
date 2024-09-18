export interface CartData {
  id: string;
  items: Array<{
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
  }>;
  deliveryMethodId: number;
  clientSecret: string;
  paymentIntentId: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
  quantity: number;
}