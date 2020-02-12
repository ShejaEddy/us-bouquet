<template>
    <div class="category">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Category Management</h4>
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
                                    <span>Category</span>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th><i class="fa fa-briefcase"></i>Select</th>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>Category</th>
                                        <th><i class="fa fa-user"></i>Status</th>
                                        <th>Option</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(category,index) in categories" :key="index">
                                        <td><input width="20px" type="checkbox"></input></td>
                                        <td><a class="text-body font-weight-bold"></a>{{index +1}}</td>
                                        <td>
                                            <small class="text-muted">{{category.category}}</small>
                                        </td>
                                        <td>{{ category.status}}</td>
                                        <td>
                                            <span style="cursor: pointer" class="action-icon"><i
                                                    class="mdi mdi-square-edit-outline"></i></span>
                                            <span class="action-icon" style="cursor: pointer"> <i
                                                    class="mdi mdi-delete"></i></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <p>
                        <span> showing 1 to 3 of 3 entries </span>
                    </p>
                    <button class="btn-danger">
                        delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category list management",
        data(){
            return {
                categories:[
                    {
                        category:"Men",
                        status:"active"
                    },
                    {
                        category:"Women",
                        status:"active"
                    },
                    {
                        category:"Kid",
                        status:"active"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>