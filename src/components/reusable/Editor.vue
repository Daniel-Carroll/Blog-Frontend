<template>
<div>
  <quill-editor style="height:500px;margin-bottom:30px;"
  ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
</div>
</template>

<!-- Initialize Quill editor -->
<script>
import { quillEditor } from 'vue-quill-editor'
  export default {
  data () {
    return {
      name: 'editor',
      content: '',
      editorOption: {}
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style scoped>

</style>