<template>
<div class="container">
  <h3>Create Post</h3>
  <form class="md-form">
    <input type="text" id="title" class="form-control" v-model='title'>
    <label for="title">Title</label>
  </form>
  <form class="md-form">   
    <input type="text" id="description" class="form-control" v-model='description'>
    <label for="description">Description</label>
  </form>
  
  <form class="md-form">   
    <input type="text" id="category" class="form-control" v-model='category'>
    <label for="description">Category</label>
  </form>
  {{category}}
  
    <div>
      <quill-editor style="height:500px;margin-bottom:30px;"
      ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
    </div>
    {{content}}
    
  <button type="button" class="btn btn-default" v-on:click="createBlogPost()">POST</button>
</div>
</template>

<!-- Initialize Quill editor -->
<script>
import { quillEditor } from 'vue-quill-editor' 
  export default {
  
  components: {
    quillEditor
  },
  data () {
      return{
        content: '',
        title: '',
        description: '',
        date: Date.now,
        category: ''
      }
  },
  methods: {
        createBlogPost: function (){
            
            axios.post('/blog_api/api/posts', {
              name: this.title,
              description: this.description,
              content: this.content,
              date: Date.now(),
              category: this.category,
              user: 'Cornbread Dan'
            }).then(function(response){
              console.log(response)
            }).catch(function (error) {
              console.log(error);
            });
            
        }
    }
  }
</script>

<style scoped>

</style>