<template>
    <div>
        <div v-for="todo in todos">
            <h1>{{ todo.title }}</h1>
            <p>{{ todo.body }}</p>
        </div>
    </div>
</template>

<script>

    import { initializeApp } from 'firebase';

    const app = initializeApp({
        apiKey: 'AIzaSyD-L8GQjLpGYOLJ83giAtVP7xPkuvq-ylI',
        authDomain: 'laravelapptest-2d4e2.firebaseapp.com',
        databaseURL: 'https://laravelapptest-2d4e2.firebaseio.com',
        projectId: 'laravelapptest-2d4e2',
        storageBucket: 'laravelapptest-2d4e2.appspot.com',
        messagingSenderId: '164505941451'
    });

    const db = app.database();
    const todosRef = db.ref('todos');

    export default {
        firebase: {
            todos: todosRef
        }
    }
    
</script>