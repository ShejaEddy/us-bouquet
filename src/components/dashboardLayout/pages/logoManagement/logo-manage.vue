<template>
    <div class="logo">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Manage Logo Images</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-lg-8">
                                    <i class="fa fa-bell"></i>
                                    <span>LOGO</span>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>Logo Title</th>
                                        <th><i class="fa fa-user"></i>Logo Image</th>
                                        <th><i class="fa fa-user"></i>Favicon Image</th>
                                        <th><i class="fe-shopping-cart"></i>Disabled</th>
                                        <th>Option</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a class="text-body font-weight-bold"></a>1.</td><td>
                                        <small class="text-muted">Tsapal</small>
                                    </td>
                                        <td>
                                            <a><img src="assets/images/logo-light.png" alt="logo" height="50"/></a>
                                        </td>
                                        <td>
                                            <h5><span class="badge badge-info"></span></h5>
                                        </td>
                                        <td>0</td>
                                        <td >
                                            <router-link to="#" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></router-link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "logo-manage"
    }
</script>

<style scoped>

</style>