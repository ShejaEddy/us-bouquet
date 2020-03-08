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
                                <div class="text-lg-right" style="margin-left: 130px">
                                    <button type="submit" @click="addCategory()"
                                            class="dbtn btn-success waves-effect waves-light mb-2 mr-2"><i
                                            class="mdi mdi-basket mr-1"></i>Add Category
                                    </button>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th><i class="fa fa-briefcase"></i>Select</th>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>Category</th>
                                        <th><i class="fa fa-user"></i>Description</th>
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
                                        <td>{{ category.description}}</td>
                                        <td>
                                            <span title="edit" style="cursor: pointer" class="action-icon"
                                                  data-target="#EditCategoryModal" data-toggle="modal"
                                                  @click="edit(category)"><i
                                                    class="mdi mdi-square-edit-outline"></i></span>
                                            <span data-toggle="modal"
                                                  data-target="#DeleteCategoryModal" @click="del(category)"
                                                  title="delete"
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
            <delete-category @deleteCategory="deleteCat()" :del="category"/>
            <edit-category :edit="category"/>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    import deleteCategory from "./notification/delete-category"
    import editCategory from "./notification/edit-category"

    export default {
        name: 'product-list-management',
        components: {
            deleteCategory,
            editCategory
        },
        data() {
            return {
                category: {},
                categories: [
                    {
                        category: 'Men',
                        description: 'All men'
                    },
                    {
                        category: 'Women',
                        description: 'All women'
                    },
                    {
                        category: 'Kid',
                        description: 'All children'
                    }
                ]
            }
        },
        methods: {
            addCategory() {
                this.$router.push('category')
            },
            getAllCategory() {
                // axios
                // .get(`${process.env.VUE_APP_BASE_URL}/categories`)
                // .then(response => {
                //     this.category = response.data
                // })
                // .catch(error => {
                //     console.log(error)
                // })
            },
            del(category) {
                this.category = category
            },
            edit(category) {
                this.category = category
            },
            deleteCat() {
                this.getAllCategory()
            }
        },
        created() {
            this.getAllCategory()
        }
    }
</script>

<style scoped>
</style>
