Vue.component('like', {
  template: "#like",
  data: function () {
    return {
      liked: false,
      like_count: 10
    }
  },
  methods: {
    like_toggle: function () {
      this.like_count += this.liked ? -1 : 1;
      this.liked = !this.liked;
    }
  },
})

new Vue({
  el: "#app"
})