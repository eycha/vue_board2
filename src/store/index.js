import { createStore } from 'vuex'

export default createStore({
  state: {
    token:"",
  },
  getters: {
    isLogined: (state)=>{
      return state.token != "";
    },
  },
  mutations: {
    UPDATE_TOKEN(state, token){
      state.token=token;
    },
  },
  actions: {
    updateToken({commit}, token){
      commit("UPDATE_TOKEN", token);
    },
  },
  modules: {
  }
})
