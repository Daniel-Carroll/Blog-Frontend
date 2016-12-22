<template>
    <div class='container'>
        <div class='row'>
            <div class='col-md-3'>
                <img src='../assets/dirtyboi.jpg' class="img-fluid rounded-circle">
                <h3>{{title}}</h3>
                <p>Insert some dramatic biography stuff here</p>
            </div>
            
            <div class='col-md-9'>
                <div class='card'>
                    Example card
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
  name: 'home',
    data () {
        return{
          title: 'Clean Dan'
        }
    }
}
</script>

