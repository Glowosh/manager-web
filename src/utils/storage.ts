const setStorage = <T>(name: string, value: T) =>
  localStorage.setItem(name, JSON.stringify(value));

const getStorage = (name: string) =>
  JSON.parse(localStorage.getItem(name) || 'null');

const clearStorage = () => localStorage.clear();

export { setStorage, getStorage, clearStorage };
