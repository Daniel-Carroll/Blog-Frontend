<template>
    <!--Navbar-->
    <nav class="navbar navbar-fixed-top navbar-dark bg-primary">

        <!-- Collapse button-->
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx2">
            <i class="fa fa-bars"></i>
        </button>

        <div class="container">

            <!--Collapse content-->
            <div class="collapse navbar-toggleable-xs" id="collapseEx2">
                <!--Navbar Brand-->
                <a class="navbar-brand" href="#">Daniel Carroll</a>
                <!--Links-->
                <ul class="nav navbar-nav">
                    <li class="nav-item active">
                        <router-link to='/' class="nav-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to='/stuff' class="nav-link">About Me</router-link>
                    </li>
                    <li class="nav-item btn-group float-xs-right">
                        
                    </li>
                </ul>
                
                <a class="nav-link " id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="position:fixed;right:35px;top:13px;"><i class="material-icons">more_vert</i></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <router-link to='/create-post' class="dropdown-item">Create Post</router-link>
                    <a class="dropdown-item">Settings</a>
                    <a class="dropdown-item">Log Out</a>
                </div>
            </div>
            <!--/.Collapse content-->

        </div>

    </nav>
</template>

<style scoped>
    nav{
        margin-bottom:20px;
    }
</style>