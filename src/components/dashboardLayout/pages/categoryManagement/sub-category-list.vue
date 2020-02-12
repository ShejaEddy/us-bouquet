<template>
    <div class="category">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Manage Sub Category</h4>
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
                                    <span>Sub Category</span>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th><i class="fa fa-briefcase"></i>Select</th>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>SubCategory</th>
                                        <th><i class="fa fa-user"></i>Category</th>
                                        <th><i class="fa fa-user"></i>Status</th>
                                        <th>Option</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(subCat,index) in SubCategories" :key="index">
                                        <td><input width="20px" type="checkbox"></input></td>
                                        <td><a class="text-body font-weight-bold"></a>{{index +1}}</td>
                                        <td>{{subCat.subCategory}}</td>
                                        <td>
                                            <small class="text-muted">{{subCat.category}}</small>
                                        </td>
                                        <td>{{ subCat.status}}</td>
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
        name: "sub-category-list",
        data(){
            return {
                SubCategories:[
                    {
                        category:"men",
                        subCategory:"footwear",
                        status:"active"
                    },
                    {
                        category:"Women",
                        subCategory:"masayi",
                        status:"active"
                    },
                    {
                        category:"Kid",
                        subCategory: "slipper",
                        status:"active"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>