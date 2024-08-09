export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface Products {
  result: [
    {
      name: string;
      internalCode: number;
      price: number;
      isAvailable: boolean;
      quantity: number;
      description: string;
      imageUrl: string;
      id: number;
      result: [];
    }
  ];
  // map(
  //   arg0: (item: Products) => import('react/jsx-runtime').JSX.Element
  // ): import('react').ReactNode;
  //length: number;
  // name: string;
  // internalCode: number;
  // price: number;
  // isAvailable: boolean;
  // quantity: number;
  // description: string;
  // imageUrl: string;
  // id: number;
}

export interface ProductsSlice {
  result: Products[];
  status: Status;
}
