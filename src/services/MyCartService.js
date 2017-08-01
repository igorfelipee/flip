const checkLocalStorage = () => {
  if (!window.localStorage || !window.JSON || !key) {
      return;
  }
}

export function save_data(data, id) {
  checkLocalStorage();
  window.localStorage.setItem(id, JSON.stringify(data))
}
