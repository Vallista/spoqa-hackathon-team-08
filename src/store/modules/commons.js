const commons = {
  state: {
    modalState: 'none'
  },

  getters: {
    nowModal: state => state.modalState
  },

  mutations: {
    changeModal: (state, name) => {
      state.modalState = name
    }
  },

  actions: {

  }
}

export default commons
