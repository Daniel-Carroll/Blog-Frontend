<template>
    <div class='container main-content'>
        <div class='row'>
            <div class='col-md-3'>
                <img src='../assets/dirtyboi.jpg' class="img-fluid rounded-circle">
                <h3>{{title}}</h3>
                <p>Insert some dramatic biography stuff here</p>
            </div>
            
            <div class='col-md-9'>
                <preview></preview>
                <preview></preview>
                <preview></preview>
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
          title: 'Clean Dan'
        }
    }
}
</script>

<style>
.main-content{
    margin-top:65px;
}

</style>

