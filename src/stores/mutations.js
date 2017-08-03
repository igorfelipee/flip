export default {

  add(state, item) {
    state.myCart.itens.push(item);
    state.myCart.total += 1;
  }
  ,remove(state, key) {
    state.myCart.itens.splice(key, 1);
  }
  ,increment(state, item) {
    item.total += 1;
    state.myCart.total += 1;
  }
  ,decrement(state, item){
    item.total -=1;
  }
}
