<template>
  <navbar> 
  </navbar>

  <router-view></router-view>
<!--
  <page-viewer
    v-if="pages.length > 0"
    :page="pages[activePage]"
     > 
  </page-viewer>

  <create-page
    @page-created="pageCreated">

  </create-page>
  -->
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,

    
  },
  // created() {
  //   this.getPages();
    
    // this.$bus.$on('navbarLinkActivated', (index) => {
    //   this.activePage = index;
    // });
  // },
  // data() {
  //       return {
  //         activePage: 0,
  //         pages: []
  //       };
  // },
  methods: {
    // async getPages() {
    //   let res = await fetch('pages.json');
    //   let data = await res.json();

    //   this.pages = data;
    // },
    pageCreated(pageObj) {
      // console.log(pageObj);
      this.pages.push(pageObj)
      // vue is notified of changes to pages and it will update the UI
    }
  }
  
}
</script>