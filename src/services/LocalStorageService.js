export function save_data(data, id) {

  if (!window.localStorage || !window.JSON || !id) {
    return;
  }
  window.localStorage.setItem(id, JSON.stringify(data));

}

export function get_data(key) {
  console.log("getting data");
  if (!window.localStorage || !window.JSON || !key) {
       console.log('Erro');
       return;
   }
   let item = window.localStorage.getItem(key);
   console.log(item);
   if (!item) {
       console.log('!item');
       return;
   }

   return JSON.parse(item);
}
