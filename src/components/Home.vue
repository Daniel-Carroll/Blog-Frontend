<template>

    <div class='container-fluid main-content'>
        
        <div class='row'>
            <div class='col-md-3'>
                <img src='../assets/materialtechnology.png' class="avi img-fluid" style="height:75%;width:75%;margin: 0 auto;">
                <h3 style="margin-top:10px;">{{title}}</h3>
                <p class="secondary-text">A Blog Devoted to Covering the Top Tech under 20$ but also Emerging Technology</p>
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
          title: 'Technology in 2017',
          posts: []
        }
    },
    methods: {
        getBlogPosts: function (){
            preloader.on();
            axios.get('https://trash-server.herokuapp.com/blog_api/api/posts')
                .then(response => this.posts = response.data)
                .then(function(){
                    preloader.off();
                })
            
            
        }
    },
    created() {
        this.getBlogPosts()
    }
 
}
</script>

<style scoped>

.avi{
    margin: 0 auto;
}

</style>

