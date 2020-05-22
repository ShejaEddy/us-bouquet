<template>
    <div class="featured-products">
        <div class="row justify-content-around">
            <card-loader :loopCount="4" v-if="loading"/>
            <div class="d-inline mx-1" v-for="(item, index) in FeaturedProducts" :key="index">
                <card-template :item="item" width="100%"/>
            </div>
            <div class="text-lg-right">
                <div class="col-md-12">
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
    import {errorToaster} from '../shared/service/ErrorHandler'
    import CardLoader from '../shared/CardLoader'
    import CardTemplate from '../shared/CardTemplate'
    import EditProduct from './actions/EditProduct'

    export default {
        name: 'BestProducts',
        components: {CardLoader, CardTemplate, EditProduct},
        data() {
            return {
                FeaturedProducts: [
                    {
                        image: '/img/1.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'Floeur de lotus',
                        price: '100$',
                        offerPrice: '80$'
                    },
                    {
                        image: '/img/2.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'Wonder wild',
                        price: '600$',
                        offerPrice: '500$'
                    },
                    {
                        image: '/img/3.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'Valentine \'s beauty',
                        price: '400$',
                        offerPrice: '350$'
                    },
                    {
                        image: '/img/10.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'The grail of love',
                        price: '150$',
                        offerPrice: '100$'
                    },
                    {
                        image: '/img/3.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'Spray of the sun',
                        price: '300$',
                        offerPrice: '200$'
                    },
                    {
                        image: '/img/1.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'Stylish flowers',
                        price: '50$',
                        offerPrice: '40$'
                    },
                    {
                        image: '/img/7.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'New reality',
                        price: '20$',
                        offerPrice: '10$'
                    },
                    {
                        image: '/img/6.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
                        name: 'Windof love',
                        price: '90$',
                        offerPrice: '60$'
                    }
                ],
                loading: false,
            }
        },
        methods: {
            editProduct(product) {
                this.$refs.editProduct.setProduct(product)
            },

            getFeaturedProducts() {
                // this.loading = true;
                // axios
                //   .get(`${process.env.VUE_APP_BASE_URL}/best/products`)
                //   .then(response => {
                //     this.loading = false;
                //     this.FeaturedProducts = response.data;
                //   })
                //   .catch(error => {
                //     console.log(error);
                //     errorToaster(
                //       "The server encountered an unexpected condition.",
                //       "Internal Error 500"
                //     );
                //   });
            }
        },
        created() {
            this.getFeaturedProducts()
        }
    }
</script>

<style lang="scss">
    .cardLoader {
        padding: 0 1em;
    }

    svg {
        width: 100% !important;
        padding: 0 !important;
    }
</style>
