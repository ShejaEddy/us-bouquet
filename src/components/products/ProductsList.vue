<template>
    <div class="products">
        <div class="row">
            <div class="col-md-4"
                 v-for="(item, index) in products_list"
                 :key="index">
                <card-template :item="item"/>
            </div>
            <card-loader :loopCount="8" v-if="loading"/>
            <div class="text-lg-right">
            <div class="col-12 ">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item  active">
                            <a class="page-link" href="#"> <span class="sr-only">(current)</span>1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
        <edit-product ref="editProduct"/>
    </div>
</template>
<script>
    import axios from 'axios'
    import CardTemplate from '../shared/CardTemplate'
    import EditProduct from './actions/EditProduct'
    import CardLoader from "../shared/CardLoader";

    export default {
        name: 'productslist',
        props: ['products_list', 'loading'],
        components: {CardTemplate, EditProduct, CardLoader},
        data() {
            return {
                selectedProduct: Object
            }
        },
        methods: {
            // manadatory function called from cardTemplate while onClick 'edit'
            editProduct(product) {
                // this.will pass the product to the editProduct to bind with Product Object
                this.$refs.editProduct.setProduct(product)
            }
        },
        mounted() {
        }
    }
</script>

<style>
    .footerIcons {
        font-size: 95%;
    }

    .card {
        height: 490px;
    }

    .card-text {
        height: 70px;
        overflow: hidden;
    }
</style>
