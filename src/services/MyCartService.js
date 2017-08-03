import { save_data, get_data } from './LocalStorageService.js';


export function addItem(item){
  save_data(item, 'cart');
};

export function getCart(){
  console.log('Pegando cart')
  return get_data('cart');
};
