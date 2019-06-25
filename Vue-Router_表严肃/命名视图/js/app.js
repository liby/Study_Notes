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
    path: '/user',
    name: 'user',
    components: {
      sidebar: {
        template: `
          <div>
            <ul>
              <li>用户管理</li>
              <li>权限管理</li>
            </ul>
          </div>
        `
      },
      content: {
        template:`
          <div>
            lorem
          </div>
        `
      }
    },
  },
  {
    path: '/post',
    name: 'post',
    components: {
      sidebar: {
        template: `
          <div>
            <ul>
              <li>帖子列表</li>
              <li>标签管理</li>
            </ul>
          </div>
        `
      },
      content: {
        template:`
          <div>
            lorem
          </div>
        `
      }
    },
  }
];

var router = new VueRouter({
  routes: routes,
})

new Vue({
  el: '#app',
  router: router,
  methods: {
    surf: function () {
      setTimeout(function () {
        this.router.push('/about');
        setTimeout(function () {
          this.router.push({name:'user', params: {name: '王花花'} });
        }, 2000)
      }, 2000)
    }
  },
})