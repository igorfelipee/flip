export default {

  myCart: state => {
    return state.myCart;
  },
  itensTotalNumber: state => {
    return state.myCart.itens.reduce((total, item) => total + item.quantity);
  },
  myCartItens: state => {
    return state.myCart.itens;
  },
  getItens: state => id =>{
    return state.myCart.itens.filter(item => item.id == id)[0];
  },
  itensTotalPrice: state => {
    return state.myCart.itens.reduce((total, item) => total + (item.quantity * item.price));
  }
}
