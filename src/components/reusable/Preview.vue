<template>
    <div class="preview card">
        <div class="card-block">
            <h3>{{name}}</h3>
            <p class="card-text">{{description}}</p>
            <router-link :to="{name: 'garbage-post', params:{postId: id }}" class="btn-flat">READ MORE</router-link>
        </div>
        <!-- Card footer -->
        <div class="card-data">
            <ul>
                <li><i class="fa fa-clock-o"></i>{{date}}</li>
            </ul>
        </div>
        <!-- Card footer -->
    </div>
</template>

<script>
    export default {
        name: 'preview',
        props: ['name', 'description', 'body', 'date', 'category', 'id']
        }
</script>

<style scoped>
.preview{
    padding: 10px;
}
.btn-flat{
    color:purple;
}
.card-data li{
    display:inline
}
</style>