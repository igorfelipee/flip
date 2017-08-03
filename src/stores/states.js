import { getCart } from '../services/MyCartService';

export default {

  myCart: getCart() || {
    //default values
     itens: [],
     total: 0,
  }
};
