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
    meta: {
      login_required:true,
    },
    component: {
      template: `
      <div>
        <h1>帖子管理</h1>
        <router-link :to="'/post' + '/rain'">后座</router-link>
        <router-view></router-view>
      </div>
      `,
    },
    children: [
      {
        path: 'rain',
        component: {
          template: `
            <h2>雨天</h2>
          `
        }
      }
    ]
  },
  {
    path: '/user',
    meta: {
      login_required:true,
    },
    component: {
      template: `
      <div>
        <h1>用户管理</h1>
        <router-link :to="'/user' + '/whh'">王花花</router-link>
        <router-view></router-view>
      </div>
      `,
    },
    children: [
      {
        path: 'whh',
        component: {
          template: `
            <h2>王花花</h2>
          `
        }
      }
    ]
  }
];

var router = new VueRouter({
  routes: routes,
})

router.beforeEach(function (to, form, next) {
  var logged_in = false;

  if(!logged_in && to.matched.some(function (item) {
    console.log('item :', item);
    return item.meta.login_required
  })) {
    next('/login')
  } else {
    next();
  }
})

// router.afterEach((to, from) => {
//   // to and from are both route objects.
//   console.log('to', to);
//   console.log('form', from);
// })

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