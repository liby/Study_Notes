Vue.component('balance',{
  template: `
    <div>
      <show @show-balance="show-balance = true"></show>
      <div v-if="show-balance"></div>
    </div>
  `,
  data: function () {
    return {
      show_balance: false,
    }
  }
})

Vue.component('show', {
  template: '<button @click="on_click()">显示余额</button>',
  methods: {
    on_click() {
      this.$emit('show-balance', {a: 1, b: 2});
    }
  }
})

new Vue({
  el: "#app"
})