import { addItem } from '../services/MyCartService';

export default{
  addItemToCart({commit, state, getters}, {key, title, description, price}) {
    book = {
         'id': key
        ,'title': title
        ,'description': description
        ,'price': price
    }

    commit('add', book);
    addItem(getters.myCart);
  }
};
