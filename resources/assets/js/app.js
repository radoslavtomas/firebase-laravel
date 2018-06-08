
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.firebase = require('firebase')
window.VueFire = require('vuefire')

Vue.use(VueFire)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('todo-cmpt', require('./components/List.vue'));


{/* <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyD-L8GQjLpGYOLJ83giAtVP7xPkuvq-ylI",
        authDomain: "laravelapptest-2d4e2.firebaseapp.com",
        databaseURL: "https://laravelapptest-2d4e2.firebaseio.com",
        projectId: "laravelapptest-2d4e2",
        storageBucket: "laravelapptest-2d4e2.appspot.com",
        messagingSenderId: "164505941451"
      };
      firebase.initializeApp(config);

      var db = firebase.database();

    </script> */}

const app = new Vue({
    el: '#app'
});
