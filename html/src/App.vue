<template>
  <div id="app">
    {{ count }}
    {{ $store.getters.doubleCount }}
    {{ info.email }}
    <button @click="handleClick">点击+1</button>
    <button @click="handleActionsClick">点击Active</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      num: 1
    };
  },
  // 通过计算属性将vuex的count返回给页面
  computed: {
    ...mapState(["count", "info"])
    // count() {
    //   return this.$store.state.count; //可以直接这样写，就不需要引用上面的mapState
    // }
  },
  // computed: mapState({
  //   email: state => state.info.email
  // }),
  methods: {
    ...mapMutations(["handleCount"]),
    ...mapActions(["actionsCount"]),
    handleClick() {
      this.handleCount(this.num);
      // this.$store.commit("handleCount"); //可以直接写，或者直接写在上面的@click="$store.commit('handleCount')"
    },
    handleActionsClick() {
      this.actionsCount(this.num);
      // this.$store.dispatch("actionsCount", this.num);
    }
  }
};
</script>
