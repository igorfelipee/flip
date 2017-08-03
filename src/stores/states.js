import { getCart } from '../services/MyCartService.js';
console.log(getCart());
export default {

  myCart: getCart() || {
     itens: [],
     total: 0
  }
};
