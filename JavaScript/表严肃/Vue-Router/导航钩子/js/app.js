var routes = [{
    path: '/',
    component: {
      template: `
      <div>
        <h1>首页</h1>
      </div>
      `,
    },
  },
  {
    path: '/login',
    component: {
      template: `
      <div>
        <h1>登录</h1>
      </div>
      `,
    },
  },
  {
    path: '/post',
    component: {
      template: `
      <div>
        <h1>帖子管理</h1>
      </div>
      `,
    },
  },
];

var router = new VueRouter({
  routes: routes,
})

router.beforeEach(function (to, form, next) {
  var logged_in = false;

  if(!logged_in && to.path == '/post') {
    next('/login')
  } else {
    next();
  }
})

router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('to', to);
  console.log('form', from);
})

new Vue({
  el: '#app',
  router: router,
  methods: {
    surf: function () {
      setTimeout(function () {
        this.router.push('/about');
        setTimeout(function () {
          this.router.push({
            name: 'user',
            params: {
              name: '王花花'
            }
          });
        }, 2000)
      }, 2000)
    }
  },
})