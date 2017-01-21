<template>
    <div class="preview card">
        <div class="card-block">
            <div style="float:left;position:relative;bottom:15px;" class="second-color">{{category}}</div>
            <h3>{{name}}</h3>
            <p class="card-text">{{description}}</p>
            <router-link :to="{name: 'garbage-post', params:{postId: id }}" class="second-color btn-flat">READ MORE</router-link>
        </div>
        <!-- Card footer -->
        <div class="card-data">
            <ul>
                <li><i class="fa fa-clock-o"></i> {{date | moment}}</li>
            </ul>
        </div>
        <!-- Card footer -->
        <!-- <a v-on:click="deleteBlogPost"><i class="material-icons">delete_forever</i></a> -->
    </div>
</template>

<script>
import moment from 'moment'

    export default {
        name: 'preview',
        props: ['name', 'description', 'body', 'date', 'category', 'id']
        ,
        filters: {
            moment: function (date) {
                return moment(date).format('MMMM Do YYYY, h:mm:ss a');
            }
        },
        methods: {
            deleteBlogPost: function(){
                preloader.on();
                axios({
                    method: 'delete',
                    url: 'blog_api/api/posts/'+ this.id,
                    baseURL: 'https://trash-server.herokuapp.com/',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                preloader.off();
            }
        }
}
</script>

<style scoped>
.preview{
    padding: 10px;
}
.card-data li{
    display:inline
}
</style>