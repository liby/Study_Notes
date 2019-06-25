Vue.directive ('pin', function (el, bindding) {
  var pinned = bindding.value;
  if (pinned) {
    el.style.position = 'fixed',
    el.style.left = '10px',
    el.style.top = '10px'
  } else {
    el.style.position = 'static'
  }
})

new Vue({
  el: "#app",
  data: {
    card1: {
      pinned: false
    },
    card2: {
      pinned: false
    }
  }
})