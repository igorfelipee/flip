import { addItem } from '../services/MyCartService';

export default{
  addItemToCart({commit, state, getters}, {id, title, description, price}) {
    let book = getters.getItem(id);
    if(book){
      window.alert("This book is already in your cart.");
      
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
    console.log('Item Adicionado');
  }
};
