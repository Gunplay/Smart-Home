import { nanoid } from 'nanoid';


export const useGetCartId = () => {
  const storedCartId = localStorage.getItem('cartId');
  if (storedCartId) {
    return storedCartId;
  }
  const newCartId = nanoid();
  localStorage.setItem('cartId', newCartId);
  return newCartId;
}