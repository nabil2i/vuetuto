<template>
  <nav
        :class="[`bg-${theme}`, `navbar-${theme}`, 'navbar', 'navbar-expand-lg']"
      >
        <div class="container-fluid">
          <a href="#" class="navbar-brand">My Vue</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- use a view directive v-for  -->
              <navbar-link
                v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                :page="page"
                :index="index"
                >
              </navbar-link>

              <li>
                <router-link
                  class="nav-link"
                  to="/pages" 
                  aria-current="page"
                  active-class="active"
                >Pages
              </router-link> 
              </li>
          </ul>
          <form class="d-flex">
            <button
            class="btn btn-primary"
            @click.prevent="changeTheme()"> 
            Toggle Navbar
            </button>
          </form>
        </div>
      </nav> 
</template> 

<script>
import NavbarLink from './NavbarLink.vue';
  export default {
    components: {
      NavbarLink
    },
    inject: ['$pages', '$bus'],
    created() {
      this.getThemeSettings();
      // not watchin individual objects inside the array
      this.pages = this.$pages.getAllPages();

      this.$bus.$on('page-updated', () => {
        // assign a new array and the component will know the array changed
        // and update the information
        this.pages = [... this.$pages.getAllPages()];
      });
    },
    computed: {
      publishedPages() {
        // filter and return a new array of published pages
        return this.pages.filter(p => p.published);
      }
    },
    // props:['pages'] ,
    data() {
      return {
        theme: 'dark',
        data: []
      };
      
    },
    // define methods
    methods: {
      changeTheme() {
        let theme = 'light';
        if (this.theme == 'light') {
          theme = 'dark';
        }
        this.theme = theme;
        // store theme when we change the theme
        this.storeThemeSettings();
      },
      storeThemeSettings() {
        localStorage.setItem('theme', this.theme);
      },
      getThemeSettings() {
        let theme = localStorage.getItem('theme');
        if (theme){
          this.theme = theme;
        }
      }
    }
  }
</script>
