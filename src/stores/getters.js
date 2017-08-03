import { getCart } from '../services/MyCartService.js';

export default {

  myCart: state => {
    return state.myCart;
  },
  totalCart: state => {
    return state.myCart.itens.reduce((total, obj) => {
      return total + obj.total
    },0);
  },
  myCartItens: state => {
    return state.myCart.itens;
  },
  getItem: state => id =>{
    return state.myCart.itens.filter(item => item.id == id)[0];
  },
  itensTotalPrice: state => {
    if (!state.myCart.itens.length) {
       return 0;
    }
    return state.myCart.itens.reduce((total, obj) => { return total + (obj.total* obj.price)},0);
  }
}
