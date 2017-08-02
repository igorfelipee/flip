export function checkLocalStorage(){
  if (!window.localStorage || !window.JSON || !key) {
      return;
  }
};

export function save_data(data, id) {
  window.localStorage.setItem(id, JSON.stringify(data));
}

export function get_data(id) {
  window.localStorage.getItem(id);
}
