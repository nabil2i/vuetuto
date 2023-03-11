<template>
  <li>
    <router-link
      class="nav-link"
      active-class="active"
      :to="`/${index}`"
      :title="`This link goes to the ${page.link.text} page`"
      aria-current="page"
      
    >{{ page.link.text }}
  </router-link> 
  </li>
   
</template>

<script>
  export default {
    props: ['page', 'index'],
    // computed: {
    //   activeClasses() {
    //     return {
    //       active: this.isActive,
    //       emphasize: this.isActive
    //     };
    //   }
    // },
  }
</script>

<!-- <style scoped>
  .emphasize {
    text-decoration: underline !important;
  }
</style> -->