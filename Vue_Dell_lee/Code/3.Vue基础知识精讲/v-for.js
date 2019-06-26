Vue.component("todo-item", {
  template:`
    <li>
      {{title}}
      <button @click="$emit('remove')">remove</button>
    </li>
  `,
  props:['title']
})

new Vue({
  el:"#app",
  data() {
    return {
      newTodoText: '',
      todoList: [
        {
          id: 1,
          title: "学习"
        }
      ],
      todoCount: 2,
    }
  },
  methods: {
    addNewTodo: function () {
      this.todoList.push({
        id : this.todoCount++,
        title : this.newTodoText
      });
      this.newTodoText = '';
    }
  },
})