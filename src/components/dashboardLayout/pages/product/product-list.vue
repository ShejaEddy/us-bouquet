<template>
    <div class="product-list-manage">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Manage Product</h4>
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
                                    <span>Product</span>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr style="width: max-content;">
                                        <th><i class="fa fa-briefcase"></i>Select</th>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>SubCategory</th>
                                        <th><i class="fa fa-user"></i>Category</th>
                                        <th><i class="fa fa-user"></i>Name</th>
                                        <th><i class="fa fa-user"></i>Actual Price</th>
                                        <th><i class="fa fa-user"></i>Offer Price</th>
                                        <th><i class="fa fa-user"></i>Quantity</th>
                                        <th><i class="fa fa-user"></i>Code</th>
                                        <th><i class="fe-shopping-cart"></i>Disabled</th>
                                        <th>Option</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(product,index) in productLists" :key="index">
                                        <td><input width="20px" type="checkbox"></input></td>
                                        <td><a class="text-body font-weight-bold"></a>{{index +1}}</td>
                                        <td>{{product.subCategory}}</td>
                                        <td>
                                            <small class="text-muted">{{product.category}}</small>
                                        </td>
                                        <td width="auto">{{ product.productName}}</td>
                                        <td>{{product.actualPrice}}</td>
                                        <td>{{product.offerPrice}}</td>
                                        <td>{{product.quantity}}</td>
                                        <td>{{product.code}}</td>
                                        <td>{{product.disabled}}</td>
                                        <td>
                                            <span class="action-icon"><i class="mdi mdi-eye-circle-outline"></i></span>
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
                        <span> showing 1 to 6 of 6 entries </span>
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
        name: "product-list-management",
        data() {
            return {
                productLists: [
                    {
                        productImage: "/img/tsapal5.jpg",
                        category: "Men",
                        subCategory: "footwear",
                        productName: "Kamambiri",
                        actualPrice: "100$",
                        offerPrice: "80$",
                        quantity: "12",
                        code: 'S267',
                        disabled: "0"
                    },
                    {
                        productImage: "/img/2.jpg",
                        category: "Women",
                        subCategory: "footwear",
                        productName: "Sandal",
                        actualPrice: "600$",
                        offerPrice: "500$",
                        quantity: "12",
                        code: 'S267',
                        disabled: "1"
                    },
                    {
                        productImage: "/img/3.jpg",
                        category: "Men",
                        subCategory: "footwear",
                        productName: "Umoja",
                        actualPrice: "400$",
                        offerPrice: "300$",
                        quantity: "12",
                        code: 'S267',
                        disabled: "0"
                    },
                    {
                        productImage: "/img/shoe-bg.jpg",
                        category: "Women",
                        subCategory: "footwear",
                        productName: "Slippers",
                        actualPrice: "150$",
                        offerPrice: "140$",
                        quantity: "12",
                        code: 'S267',
                        disabled: "0"
                    },
                    {
                        productImage: "/img/3.jpg",
                        category: "Men",
                        subCategory: "footwear",
                        productName: "Ketch",
                        actualPrice: "300$",
                        offerPrice: "250$",
                        quantity: "12",
                        code: 'S267',
                        disabled: "0"
                    },
                    {
                        productImage: "/img/1.jpg",
                        category: "Men",
                        subCategory: "footwear",
                        productName: "Style",
                        actualPrice: "50$",
                        offerPrice: "40$",
                        quantity: "12",
                        code: 'S267',
                        disabled: "1"
                    }
                ],

            }
        }
    }
</script>

<style scoped>
    .table {
        width: 100vw;
    }
</style>