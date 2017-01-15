<template>
    <div class="container">
        <div class="card blog-post">
            <h3>{{post.name}}</h3>
            <h6>{{post.description}}</h6>
            <span><i class="fa fa-clock-o"></i>{{post.date}}</span>
            <span>{{post.category}}</span>
            <div v-html="post.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blogpost',
        data () {
            return{
                post: {}
            }
        },
        methods: {
            getBlogPostById: function (){
                
                axios.get('/blog_api/api/posts/' + this.$route.params.postId)
                    .then(response => this.post = response.data);
                
            }
        },
        created() {
            this.getBlogPostById()
        }
     }
</script>

<style scoped>
    .blog-post{
        min-height:500px;
        padding:20px;
    }
    
</style>