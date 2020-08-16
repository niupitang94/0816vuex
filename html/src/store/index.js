import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    info: {
      email: "123123"
    }
  },
  mutations: {
    handleCount(state, val) {
      state.count += val;
    }
  },
  actions: {
    // 可以这样写，也可以直接actionsCount接收的参数通过解构来写
    // commit里的第一个值是mutations的方法名称，第二个值为传过来的值
    // actionsCount(context, val) {
    //   context.commit("handleCount", val);
    // }
    actionsCount({ commit }, val) {
      setTimeout(() => {
        commit("handleCount", val);
      }, 3000);
    }
  },
  getters: {
    // getters其实跟computed差不多，利用了缓存机制
    doubleCount(state) {
      return state.count * 2;
    }
  },
  modules: {}
});
