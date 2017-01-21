<template>
    <div class="container-fluid">
        <div class="card blog-post">
            <div class="other-content second-color" style="float:left;">{{post.category}}</div>
            <div class="header">{{post.name}}<div>
            <div class="other-content" style="border-bottom:1px solid #e0e0e0;opacity:0.54;padding-bottom:10px;">
            <span style="margin-right:3px;"><i class="material-icons" style="position:relative;top:5px;">perm_identity</i>{{post.user}}</span>
                <i class="fa fa-clock-o"></i> {{post.date | moment}}</div>
            <div class="content" v-html="post.content"></div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        name: 'blogpost',
        data () {
            return{
                post: {}
            }
        },
        filters: {
            moment: function (date) {
                return moment(date).format('MMMM Do YYYY, h:mm a');
            }
        },
        methods: {
            getBlogPostById: function (){
                preloader.on();
                axios.get('https://trash-server.herokuapp.com/blog_api/api/posts/' + this.$route.params.postId)
                    .then(response => this.post = response.data);
                preloader.off();
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
    .header{
        font-size:30px;
    }
    .sub-header{
        font-size:20px;
    }
    .other-content{
        font-size:16px;
    }
    .content{
        font-size:16px;
        padding:20px;
    }
</style>