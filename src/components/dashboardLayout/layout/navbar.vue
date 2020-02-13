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

                    <div class="dropdown-item noti-title">
                        <h5 class="m-0">
                                    <span class="float-right">
                                        <a class="text-dark" href="#">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                        </h5>
                    </div>

                    <div class="slimscroll noti-scroll">
                        <a class="dropdown-item notify-item active" href="#">
                            <div class="notify-icon">
                                <img alt="" class="img-fluid rounded-circle" src="assets/images/users/user-2.jpg"/>
                            </div>
                            <p class="notify-details">John Doe</p>
                            <p class="text-muted mb-0 user-msg">
                                <small>Hi, How are you? What about our next meeting</small>
                            </p>
                        </a>
                    </div>
                    <a class="dropdown-item text-center text-primary notify-item notify-all" href="#">
                        View all
                        <i class="fi-arrow-right"></i>
                    </a>
                </div>
            </li>

            <li class="dropdown notification-list">
                <a aria-expanded="false" aria-haspopup="false"
                   class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown"
                   href="#" role="button">
                    <img alt="user-image" class="rounded-circle" src="assets/images/users/user-3.jpg">
                    <span class="pro-user-name ml-1">
                                Admin <i class="mdi mdi-chevron-down"></i>
                            </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>
                    <a class="dropdown-item notify-item" href="#">
                        <i class="fe-user"></i>
                        <span>My Account</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item notify-item" href="#">
                        <i class="fe-log-out"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </li>
        </ul>
        <div class="logo-box">
            <router-link to="/admin" class="logo text-center" >
                        <span class="logo-lg">
                            <img class="tsap-logo" alt="Tsapl-Logo" height="70" src="assets/images/logo.jpg">
                        </span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    };
</script>

<style scoped>
    .tsap-logo{
        width:240px !important;
    }
</style>