function setStyle(ele, sty, pos, val) {
  ele[sty][pos] = val;
}

Vue.directive('pin', (el, binding) => {
  let pinned = binding.value;
  let position = binding.modifiers;
  let warning = binding.arg;

  if (pinned) {
    setStyle(el, 'style', 'position', 'fixed');

    for (let key in position) {
      setStyle(el, 'style', key, '100px');

      warning = !warning;
      if (warning === true) {
        setStyle(el, 'style', 'background-color', 'yellow');
        warning = !warning;
      }
    }
  } else {
    setStyle(el, 'style', 'position', 'static');
    setStyle(el, 'style', 'background-color', '#CCC');
  }
})

new Vue({
  el: "#app",
  data: {
    pinned: false,
    bgc: false
  }
})