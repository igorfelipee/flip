import { save_data, get_data } from './LocalStorageService.js';

const addItem = (item) => {
  save_data(item, 'my-cart');
};

const getCart = () => {
  get_data('my-cart');
};

export { addItem, getCart };
