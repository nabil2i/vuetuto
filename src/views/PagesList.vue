<template>
  <h4> Pages</h4> 
  <div class="text-end">
  <router-link
    to="/pages/create"
    class="btn btn-primary btn-sm">
    New page </router-link>

  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th> Titile</th>
        <th> Link Text</th>
        <th> Is Published</th>
      </tr>
    </thead >
    <tbody>
      <tr v-for="(page, index) in $pages.getAllPages()"
      :key="index"
      @click="goToPage(index)">
        <td>{{page.pageTitle}}</td>
        <td>{{page.link.text}}</td>
        <td>{{page.published ? 'yes' : 'no'}}</td>
      </tr>
    </tbody>
    
  </table>
  <p> {{data.counter}} </p>
  <button @click.prevent="click" class="btn btn-primary">Click</button>
</template>

<script setup> // setup for the composition API
import {ref, reactive, inject} from 'vue'; // we use ether ref or reactive
import { useRouter } from 'vue-router'; // to navigate with JS via router
// ref allows to create a reactive value
// reactive
// const counter = ref(0); // {value: 0} behing the scenes we have an obj
const data = reactive({counter: 0})   // used for objects

const $pages = inject('$pages');

const router = useRouter(); // get access to the router

function click() {
  //counter.value++;
  //console.log(counter++); // we need to tell vue that the value is changing
  data.counter++
}

function goToPage(index) {
  router.push({ path: `pages/${index}/edit`});
}

// export default {
//   data() {
//     return {
//       counter: 0
//     };
//   },
//   methods: {
//     click () {
//       this.counter++;
//     }
//   }
// }
</script>

<style scoped>
  .table.table-hover tr:hover {
    cursor: pointer;
  }
</style>