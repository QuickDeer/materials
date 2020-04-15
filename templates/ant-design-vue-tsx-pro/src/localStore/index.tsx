import localforage from 'localforage';

const localStore = localforage.createInstance({
  // localforage name
  name: 'vue-tsx-pro'
});

export default localStore;
