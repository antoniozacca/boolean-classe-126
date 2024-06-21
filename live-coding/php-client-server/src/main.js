const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'App Client Server',
      todos: [],
      currentTodo: null,
      newTodo: '',
    };
  },
  methods: {
    getTodos() {
      axios
        .get('http://localhost:8888/php-client-server/server/')
        .then((response) => {
          console.log(response);
          this.todos = response.data;
        });
    },
    getTodoByID(id) {
      axios
        .get('http://localhost:8888/php-client-server/server/', {
          params: {
            'todo-id': id,
            action: 'read',
          },
        })
        .then((response) => {
          console.log(response);
          this.currentTodo = response.data;
        });
    },
    addTodo() {
      const data = {
        text: this.newTodo,
        action: 'create',
      };

      axios
        .post('http://localhost:8888/php-client-server/server/', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => (this.todos = response.data));
    },
  },
  mounted() {
    this.getTodos();
  },
}).mount('#app');
