import { getItem } from '../services/MyCartService';

export default {

  myCart: getItem() || {
    //default values
     books: []
    ,total: 0
  }
};
