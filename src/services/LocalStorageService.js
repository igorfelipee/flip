export function save_data(data, id) {
  if (!window.localStorage || !window.JSON || !id) {
      return;
  }
  window.localStorage.setItem(id, JSON.stringify(data));
}

export function get_data(id) {
  if (!window.localStorage || !window.JSON || !id) {
      return;
  }
  window.localStorage.getItem(id);
}
