<template>
    <div class="navbar-custom">
        <ul class="list-unstyled topnav-menu float-right mb-0">
            <li class="d-none d-sm-block">
                <form class="app-search">
                    <div class="app-search-box">
                        <div class="input-group">
                            <input class="form-control" placeholder="Search..." type="text">
                            <div class="input-group-append">
                                <button class="btn" type="submit">
                                    <i class="fe-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </li>

            <li class="dropdown notification-list">
                <a aria-expanded="false" aria-haspopup="false"
                   class="nav-link dropdown-toggle  waves-effect waves-light"
                   data-toggle="dropdown" href="#" role="button">
                    <i class="fe-bell noti-icon"></i>
                    <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-lg">

<!--                    <div class="dropdown-item noti-title">-->
<!--                        <h5 class="m-0">-->
<!--                                    <span class="float-right">-->
<!--                                        <a class="text-dark" href="#">-->
<!--                                            <small>Clear All</small>-->
<!--                                        </a>-->
<!--                                    </span>Notification-->
<!--                        </h5>-->
<!--                    </div>-->
                    <router-link class="dropdown-item text-center text-primary notify-item notify-all" to="#">
                        View all
                        <i class="fi-arrow-right"></i>
                    </router-link>
                </div>
            </li>

            <li class="dropdown notification-list">
                <span aria-expanded="false" aria-haspopup="false"
                   class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown"
                    role="button">
                    <img alt="user-image" class="rounded-circle" src="assets/images/users/user-3.jpg">
                    <span class="pro-user-name ml-1">
                                Admin <i class="mdi mdi-chevron-down"></i>
                            </span>
                </span>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>
                    <router-link class="dropdown-item notify-item" :to="{name:'admin profile'}">
                        <i class="fe-user"></i>
                        <span>My Account</span>
                    </router-link>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item notify-item" :to="{name:'Home'}">
                        <i class="fe-log-out"></i>
                        <span>Logout</span>
                    </router-link>
                </div>
            </li>
        </ul>
        <div class="logo-box">
            <router-link to="/admin" class="logo text-center" >
                        <span class="logo-lg">
                            <img class="tsapal-logo" alt="Tsapal-Logo" height="70" src="assets/images/logo.jpg">
                        </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
    .tsapal-logo{
        width:240px !important;
    }
</style>
