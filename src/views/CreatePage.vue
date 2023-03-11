<template>
  <div class="container mb-3">
    <form action="">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label">Page Title</label>
            <input
              type="text"
              class="form-control"
              v-model="pageTitle"
            />
            <!-- 2 way binding method 1
              :value="pageTitle"
            @input="(e) => pageTitle = e.target.value" -->
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Content</label>
            <textarea
              type="text"
              class="form-control"
              rows="5"
              v-model="content"
            ></textarea>
          </div>
          <div class="mb-3">
            <button 
              class="btn btn-primary"
              :disabled="isFormInvalid"
              @click.prevent="submitForm"
            > Create Page </button>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">Link text</label>
            <input
              type="text"
              class="form-control"
              v-model="linkText"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Link URL</label>
            <input
              type="text"
              class="form-control"
              v-model="linkUrl"
            />
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="published"/>
              <label for="gridCheck1" class="form-check-label">Published</label>
            </div>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  // props: ['pageCreated'],
  // emits: ['pageCreated'],
  emits: {
    pageCreated(pageTitle, content, link, published) {
      if (!pageTitle) {
        return false;
      }
      if (!content) {
        return false;
      }
      if (!link || !link.text || !link.url) {
        return false;
      }
      return true;
    },
  },
  computed: {
    isFormInvalid() {
      return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
    }
  },
  data() {
    return {
      pageTitle: '',
      content: '',
      linkText: '',
      linkUrl: '',
      published: true
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert('Please fill the form');
        return;
      }
      this.$emit('pageCreated', { // $ means public property
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl
        },
        published: this.published
      });

      // this.pageCreated(({}));

      this.pageTitle = '';
      this.content = '';
      this.linkText = '';
      this.linkUrl = '';
      this.published = true;
    }
  },
  watch: {
    // method that has the name of the value that we want to watch
    pageTitle(newTitle, oldTitle) {
      if(this.linkText === oldTitle) {
        this.linkText = newTitle
      }
    }
  }
}

</script>