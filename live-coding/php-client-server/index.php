<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Client Server</title>

  <!-- bootstrap-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
</head>

<body>
  <div id="app">
    <header>
      <div class="container py-3">
        <h1>{{ title }}</h1>
      </div>
    </header>
    <main>
      <div class="container py-3">
        <ul>
          <li v-for="todo in todos" class="mb-2">
            <h3>{{ todo.todoName }}</h3>
            <button class="btn btn-info btn-sm" @click="getTodoByID(todo.todoId)">Dettagli</button>
          </li>
        </ul>
        <hr>
        <section>

          <h3>Aggiungi TODO</h3>
          <form action="" @submit.prevent="addTodo">
            <div class="mb-3">
              <label for="text-todo" class="form-label">Testo del todo</label>
              <input type="text" class="form-control" id="text-todo" v-model="newTodo">
            </div>
            <button class="btn btn-primary btn-sm">Aggiungi nuovo todo</button>
          </form>

        </section>
        <hr>
        <section v-if="currentTodo">

          <h3>Dettaglio del todo</h3>
          <h4>{{ currentTodo.name }}</h4>
          <p>{{ currentTodo.description }}</p>

        </section>
      </div>
    </main>
  </div>

  <!-- vue-->
  <script src=" https://unpkg.com/vue@3/dist/vue.global.js">
  </script>
  <!-- axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <!-- project js-->
  <script src="src/main.js"></script>
</body>

</html>