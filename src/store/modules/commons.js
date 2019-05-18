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
    },

    clearModal: state => {
      state.modalState = 'none'
    }
  },

  actions: {

  }
}

export default commons
