import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      firstname:"guo",
      lastname:"unqing",
      email:"510457468@qq.com",
      title:"dwq",
      affilication:"cqupt"
    }
  },
  mutations: {
    update(state,mes){
      state.user.firstname = mes.firstname;
      state.user.lastname = mes.lastname;
      state.user.title = mes.title;
      state.user.affilication = mes.affilication;
      state.user.email = mes.email;
    }
  },
  getters:{
    getbaseInf: state=>{
      return state.user;
    }
  },
  actions: {
  },
  modules: {
  }
})
