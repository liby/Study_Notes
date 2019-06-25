Vue.component('balance', {
  template: '#balance',
  methods: {
    show_balance: function (data) {
        this.show = true,
        console.log(data);
    }
  },
  data: function () {
    return {
      show : false,
    }
  }
})

Vue.component('show', {
  template: '#show',
  methods: {
    on_click : function () {
      this.$emit('show-balance', {a : 1, b : 2})
    }
  }
})

new Vue({
  el: '#app'
})