import { save_data, get_data } from './LocalStorageService.js';

const addItem = (item) => {
  save_data(item, 'cart');
};

const getCart = () => {
  console.log('Pegando cart')
  get_data('cart');
};

export { addItem, getCart };
