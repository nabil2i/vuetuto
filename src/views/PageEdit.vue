<template>
  <h4>Edit {{page.pageTitle}}</h4>
    <form action="" class="container mb-3">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label">Page Title</label>
            <input
              type="text"
              class="form-control"
              v-model="page.pageTitle"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Content</label>
            <textarea
              type="text"
              class="form-control"
              rows="5"
              v-model="page.content"
            ></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">Link text</label>
            <input
              type="text"
              class="form-control"
              v-model="page.link.text"
            />
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="page.published"
                />
              <label for="gridCheck1" class="form-check-label">Published</label>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary me-2"
          @click.prevent="submit"
        >Edit
        </button>
        <button class="btn btn-secondary"

        >Cancel</button>

      </div>
    </form>
  
</template>

<script setup>
//const props = defineProps(['index']); edit page {{ props.index}}
import {useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();  // like using this.$route if it was in options API
const pages = inject('$pages');
const bus = inject('$bus');

const {index} = defineProps(['index']);

let page = pages.getSinglePage(index);

function submit() {
  pages.editPage(index, page);
  bus.$emit('page-updated', {
    index,
    page
  });

}

</script>
 