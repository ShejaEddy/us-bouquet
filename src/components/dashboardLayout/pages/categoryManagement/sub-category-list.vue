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
                                <div class="text-lg-right" style="margin-left: 130px
                                ">
                                    <button type="submit" @click="addSubCategory()"
                                            class="dbtn btn-success waves-effect waves-light mb-2 mr-2"><i
                                            class="mdi mdi-basket mr-1"></i>Add Sub-Category
                                    </button>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th><i class="fa fa-briefcase"></i>Select</th>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>SubCategory</th>
                                        <th><i class="fa fa-user"></i>Description</th>
                                        <th>Option</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(subCat,index) in SubCategories" :key="index">
                                        <td><input width="20px" type="checkbox"></input></td>
                                        <td><a class="text-body font-weight-bold"></a>{{index +1}}</td>
                                        <td>{{subCat.subCategory}}</td>
                                        <td>{{ subCat.description}}</td>
                                        <td>
                                            <span title="edit" style="cursor: pointer" class="action-icon"
                                                  data-target="#EditSubCategoryModal" data-toggle="modal" @click="edit(subCat)"><i
                                                    class="mdi mdi-square-edit-outline"></i></span>
                                            <span data-toggle="modal"
                                                  data-target="#DeleteSubCategoryModal" @click="del(subCat)" title="delete"
                                                  class="action-icon" style="cursor: pointer"> <i
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
            <delete-category @deleteTags="deleteSub()" :del="subCat"/>
            <edit-category :edit="subCat"/>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    import deleteCategory from "./notification/delete-sub-category"
    import editCategory from "./notification/edit-sub-category"
    export default {
        name: 'sub-category-list',
        components: {
            deleteCategory,
            editCategory
        },
        data() {
            return {
                subCat: {},
                SubCategories: [
                    {
                        subCategory: 'footwear',
                        description: 'iza abagabo'
                    },
                    {
                        subCategory: 'Watches',
                        description: 'za abagore'
                    },
                    {
                        subCategory: 'Masayi',
                        description: "z' abana"
                    },
                    {
                        subCategory: 'slipper',
                        description: 'za abakobwa'
                    },
                    {
                        subCategory: 'T-shirt',
                        description: 'za abasore'
                    },
                    {
                        subCategory: 'umoja',
                        description: 'za aba bose'
                    }
                ]
            }
        },
        methods: {
            addSubCategory() {
                this.$router.push('sub-category')
            },
            getAllSubCategory() {
                // axios
                //     .get(`${process.env.VUE_APP_BASE_URL}/tags`)
                //     .then(response => {
                //         this.SubCategories = response.data
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })
            },
            del(subCat) {
                this.subCat = subCat
            },
            edit(subCat) {
                this.subCat = subCat
            },
            deleteSub() {
                this.getAllSubCategory()
            }
        },
        created() {
            this.getAllSubCategory()
        }
    }
</script>

<style scoped>
</style>
