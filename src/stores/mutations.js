export default {

  add(state, item) {
    state.myCart.books.push(item);
  }
  ,remove(state, key) {
    state.myCart.books.splice(key, 1);
  }
  ,increment(state, item) {
    item.total += 1;
  }
  ,decrement(state, item){
    item.total -=1;
  }
}
