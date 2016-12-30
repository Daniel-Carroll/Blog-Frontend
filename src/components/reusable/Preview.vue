<template>
    <div class="preview card">
        <div class="card-block">
            <h3>{{name}}</h3>
            <p class="card-text">{{description}}</p>
            <a href="#" class="btn-flat">READ MORE</a>
        </div>
        <!-- Card footer -->
        <div class="card-data">
            <ul>
                <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
            </ul>
        </div>
        <!-- Card footer -->
    </div>
</template>

<script>
    export default {
        name: 'preview',
        props: ['name', 'description']
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