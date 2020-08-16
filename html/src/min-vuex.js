import Vue from "vue";
const Store = function Store(option = {}) {
  let { state = {}, mutations = {} } = option;
  this._vm = new Vue({
    data: {
      $$state: state
    }
  });
  this._mutations = mutations;
};

Store.prototype.commit = function(type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload);
  }
};
Object.defineProperties(Store.prototype, {
  state: {
    get() {
      return this._vm.data.$$state;
    }
  }
});
export default Store;
