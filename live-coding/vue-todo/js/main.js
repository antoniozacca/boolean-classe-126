console.log('todo list');

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Todo List Prova',
      tasks: [
        {
          text: 'Task 1',
          done: false,
        },
        {
          text: 'Task 2',
          done: true,
        },
        {
          text: 'Task 3',
          done: false,
        },
      ],
      newTask: null,
      searchTask: '',
    };
  },
  methods: {
    removeTask(indexRicevuto) {
      this.tasks = this.tasks.filter((_, index) => index !== indexRicevuto);
    },
    addTask() {
      if (!this.newTask) return;

      const myTask = {
        text: this.newTask.trim(),
        done: false,
      };

      this.tasks.push(myTask);
      this.newTask = null;
    },
    toggleTask(indexRicevuto) {
      console.log('prova toggle');
      console.log(indexRicevuto);
      console.log(this.tasks[indexRicevuto].done);

      /* versione con modifica oggetto iniziale */

      // this.tasks[indexRicevuto].done = !this.tasks[indexRicevuto].done;

      /* versione senza modifica oggetto iniziale */

      this.tasks = this.tasks.map((task, index) => {
        if (index === indexRicevuto) {
          return {
            ...task,
            done: !task.done,
          };
        } else {
          return {
            ...task,
          };
        }
      });
    },

    listTasks() {
      if (this.searchTask) {
        return this.tasks.filter((element) => {
          return element.text.includes(this.searchTask);
        });
      } else {
        return this.tasks;
      }
    },
  },
}).mount('#app');
