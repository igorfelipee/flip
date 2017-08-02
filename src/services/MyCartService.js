import { checkLocalStorage, save_data, get_data } from './LocalStorageService.js';

const addItem = (item) => {
  save_data(item, 'my-cart');
};

const getItem = () => {
  get_data('my-cart');
};

export { addItem, getItem };
