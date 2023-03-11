<template>
  <div v-if="page" class="container">   <!-- the vue app  -->
    <h1 class="emphasize">{{page.pageTitle}}</h1>
    <p> {{page.content}}</p>
  </div>
</template> 

<script>
  export default {
    props: ['index'],
    // props: ['page'], //'pageTitle', 'pageContent'
    // props: {
    //   page: {
    //     type: Object,
    //     default(rawProps) {
    //       return {
    //         pageTitle: '',
    //         content: ''
    //       };
    //     }
    //   }
    // }
    created() {
      // $route is the current route handled by the component
      //console.log(this.$route.params);
      // get the page of the given index
      //this.page = this.$pages.getSinglePage(this.$route.params.index);
      this.page = this.$pages.getSinglePage(this.index);
      // this.$watch(() => this.$route.params,  // watch for the params
      //             (newParams, prevParams) => {
      //               this.page = this.$pages.getSinglePage(newParams.index);
      //             }   
      // );
    },
    data() {
      return {
        page: null
      };
    },
    watch: {
      index(newIndex, oldIndex) {
        this.page = this.$pages.getSinglePage(newIndex);
      }
    },
  }
</script>

<style scoped>
  .emphasize {
    color: blue;
  }
</style>