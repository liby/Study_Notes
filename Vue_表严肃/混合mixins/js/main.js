let base = {
  methods: {
    toggle: function() {
      this.visible = !this.visible;
    },
    show: function() {
      this.visible = true;
    },
    hide: function() {
      this.visible = false;
    }
  },
  data() {
    return {
      visible: false
    }
  }
}

Vue.component('popup', {
  template: '#popup',
  mixins: [base]
})

Vue.component('tooltip', {
  template: "#tooltip",
  mixins: [base]
})

new Vue({
  el: "#app"
})