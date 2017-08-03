import { addItem } from '../services/MyCartService';

export default{
  addItemToCart({commit, state, getters}, {id, title, description, price}) {
    let book = getters.getItem(id);
    if(book){
      commit('increment', book);
    }
    else{

      let book = {
           'id': id
          ,'title': title
          ,'description': description
          ,'price': price
          ,'total': 1
      }

      commit('add', book);

    }
    addItem(getters.myCart);
  },
  removeItemFromCart({commit, state, getters}, id){
    let book = getters.getItem(id)

    if(book > 1){
      commit('decrement', book);
    }
    else {
      let key;
      function getItemCartFromArray(item, index){
        if(item.id === id){
          key = index;
        }
      }
      getters.myCartItens.forEach(getItemCartFromArray);
      commit('remove', key);
    }
    addItem(getters.myCart);
  },
  incrementItemInCart({commit, state, getters}, id){
    let book = getters.getItem(id);
    commit('increment', book);
    addItem(getters.myCart);
  },
  decrementItemFromCart({commit, state, getters}, id){
    let book = getters.getItem(id);
    if(book.total == 1){
      commit('remove', book)
    }
    else{
      commit('decrement', book);
    }
    addItem(getters.myCart);
  }
};
