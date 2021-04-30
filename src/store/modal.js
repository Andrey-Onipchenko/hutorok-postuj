const modal = {
  state: {
    isOpen: true
  },
  mutations: {
    modalOpen(state) {
      state.isOpen = !state.isOpen;
    }
  },
  getters: {
    doneTodos: state => {
      return state.isOpen;
    }
  },
  actions: {},
  modules: {}
};
export default modal;
