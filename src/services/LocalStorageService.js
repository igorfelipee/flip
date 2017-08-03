function save_data(data, id) {

  if (!window.localStorage || !window.JSON || !id) {
    return;
  }
  window.localStorage.setItem(id, JSON.stringify(data));

}

function get_data(key) {
  console.log("!item");
  if (!window.localStorage || !window.JSON || !key) {
      console.log('Erro');
       return;
   }

   if (!window.localStorage.getItem(key)) {
       return;
       console.log("!item");
   }
   return window.localStorage.getItem(key);
}


export { save_data, get_data };
