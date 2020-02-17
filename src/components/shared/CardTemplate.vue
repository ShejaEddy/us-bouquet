<template>
    <div class="cardTemplate">
        <div class="card mb-4 shadow-sm" id="img-card">
            <div class="set-data">
                <div class="img-set-data">
                    <img :src="item.productImage" alt="">
                </div>
                <ul class="options">
                    <li><a href="javascript:;;" @click="navigateProductDetail(item)"><i class="fa fa-eye"></i></a></li>
                    <li><a href="javascript:;;" @click="updateEditProduct(item, item.id)"><i class="fa fa-pen"></i></a>
                    </li>
                    <li><a href="javascript:;;"><i class="fa fa-heart"></i></a></li>
                    <li><a href="javascript:;;" @click="addToCart(item)"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="productName">{{item.productName}}</p>
                    <span style="display: inline-flex">
                      <p style="text-decoration: line-through" class="product-actual-price">{{item.actualPrice}}</p>
                      <p class="product-offer-price">{{item.offerPrice}}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    import {infoToaster, successToaster} from './service/ErrorHandler'

    import _ from 'lodash'

    export default {
        name: 'cardTemplate',
        props: ['item'],
        data() {
            return {
                showModal: false
            }
        },
        components: {},
        computed: mapState(['loggedUser']),
        methods: {
            navigateProductDetail(product) {
                this.$router.push({
                    name: 'productDetails',
                    params: {id: '193878-38936-39878'}
                })
            },

            ...mapMutations(['ADD_CART_LOCAL']),

            addToCart(product) {
                // const data = _.find(this.$store.getters.cartProducts, product);
                // if (data) {
                // infoToaster("Already Added", "Product Already Added");
                // } else {
                successToaster('Added Successfully', 'Product Added Successfully')
                this.ADD_CART_LOCAL(product)
                // }
            },

            // this will trigger the parentComponent function
            updateEditProduct(product, id) {
                this.$parent.editProduct(product)
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    #img-card {
        height: 290px;
    }

    .productName {
        font-size: 0.9em;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    .product-offer-price {
        font-size: 0.8em;
        color: #007bff;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    .product-actual-price {
        font-size: 0.8em;
        color: red;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        margin-right: 1rem

    }

    .set-data {
        position: relative;
        height: 500px;
        width: 100%;
        overflow: hidden;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s ease-out;
    }

    .set-data:hover {
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
    }

    .img-set-data {
        background-color: #000;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        transition: transform 0.3s ease-out;
        z-index: 2;
    }

    .img-set-data:hover {
        cursor: pointer;
    }

    .set-data:hover .img-set-data {
        transform: scale(1.5);
    }

    .img-set-data > img {
        height: 100%;
        width: 100%;
        transition: opacity 0.3s ease-out;
    }

    .set-data:hover > .img-set-data > img {
        opacity: 0.5;
    }

    .options {
        display: flex;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        margin: 0;
        padding: 0;
    }

    .options > li {
        list-style: none;
    }

    .options > li > a {
        display: block;
        height: 50px;
        width: 50px;
        background-color: #FFF;
        text-align: center;
        color: #262626;
        margin: 0 5px;
        border-radius: 50%;
        opacity: 0;
        transform: translateY(200px);
        transition: all 0.3s ease-out;
    }

    .set-data:hover > .options > li > a {
        transform: translateY(0);
        opacity: 1;
    }

    .options > li > a > .fa {
        font-size: 24px;
        line-height: 50px;
        transition: transform 0.3s ease-out;
    }

    .options > li > a:hover > .fa {
        transform: rotateY(360deg);
    }

    .set-data:hover .options li:nth-child(1) a {
        transition-delay: 0s;
    }

    .set-data:hover .options li:nth-child(2) a {
        transition-delay: 0.1s;
    }

    .set-data:hover .options li:nth-child(3) a {
        transition-delay: 0.2s;
    }

    .set-data:hover .options li:nth-child(4) a {
        transition-delay: 0.3s;
    }

    .set-data:hover .options li:nth-child(5) a {
        transition-delay: 0.4s;
    }
</style>
