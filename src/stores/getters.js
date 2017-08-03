export default {

  myCart: state => {
    return state.myCart;
  },
  itensTotalNumber: state => {
    state.myCart.total = state.myCart.itens.length;
    return state.myCart.total;
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
    return state.myCart.itens.reduce((total, obj) => { return total + (obj.quantity* obj.price)},0);
  }
}
