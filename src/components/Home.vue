<template>

    <div class='container main-content'>
        
        <div class='row'>
            <div class='col-md-3'>
                <!-- <img src='../assets/dirtyboi.jpg' class="img-fluid rounded-circle"> -->
                <h3>{{title}}</h3>
                <p>Insert some dramatic biography stuff here</p>
            </div>
            
            <div class='col-md-9'>
                <div v-for='post in posts'>
                    <preview :name='post.name' :description='post.description' :body='post.body'
                    :date='post.date' :category='post.category' :id='post._id'></preview>
                </div>
            </div>
        </div>    
    </div>
    
</template>

<script>

import Preview from '../components/reusable/Preview'

export default {
  name: 'home',
  components: {
      Preview
  },
    data () {
        return{
          title: 'Clean Dan',
          posts: []
        }
    },
    methods: {
        getBlogPosts: function (){
            preloader.on();
            axios.get('https://trash-server.herokuapp.com/blog_api/api/posts')
                .then(response => this.posts = response.data);
            preloader.off();
            
        }
    },
    created() {
        this.getBlogPosts()
    }
 
}
</script>

<style>


</style>

