var Event = new Vue({
  
})

Vue.component('huahua', {
  template: '#huahua',
  methods: {
    on_change: function () {
      Event.$emit('huahua-said-something', this.i_said)
    }
  },
  data: function () {
    return {
      i_said: '',
    }
  }
})

Vue.component('shuandan', {
  template: '#shuandan',
  mounted: function () {
    var me = this;
    Event.$on('huahua-said-something', function (data) {
      return me.huahua_said = data
    })
  },
  data: function () {
    return {
      huahua_said: '',
    }
  },
})

new Vue({
  el: '#app'
})