<template>
    <div class="products mb-2">
        <div class="row mr-auto px-3">
            <div class="col-md-3 order-md-1 mb-4">
                <product-filter :categories="categories" :price="price"/>
            </div>
            <div class="col-md-9 order-md-2 list-2">
                <div class="ft-container">
                    <div class="feat">
                        <span class="txt-ft" aria-current="page">PRODUCTS</span>
                    </div>
                    <card-loader :loopCount="8" v-if="loading"/>
                    <products-list :products_list="product_duplicate" :loading="loading"/>
                    <modal @reloadProduct="updateProducts()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductsList from '@/components/products/ProductsList'
    import CardLoader from '@/components/shared/CardLoader'
    import ProductFilter from '@/components/products/filters/ProductFilter'
    import modal from "@/components/shared/Modal"
    import axios from 'axios'
    import _ from 'lodash'

    export default {
        name: 'allProducts',
        components: {
            ProductsList,
            CardLoader,
            ProductFilter,
            modal
        },
        data() {
            return {
                categories: ['Office flower', 'Wedding flower', 'Funeral flower', 'Birthday flower', 'Valentine\'s day flower'],
                price: ['High', 'medium', 'low'],
                fabric: ['tissue', 'hard', 'leather'],
                products_list: [],
                product_duplicate: [
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
                loading: false
            }
        },
        methods: {
            updateProducts(){
                this.getAllProducts()
            },
            getAllProducts: function () {
                // this.loading = true;
                // axios
                //     .get(`${process.env.VUE_APP_BASE_URL}/products`)
                //     .then(response => {
                //         this.loading = false;
                //         this.products_list = response.data.products;
                //         this.product_duplicate = response.data;
                //         // getting all products and getting the uniq value for
                //         // productCategory and returning the productCategory property only
                //         this.categories = _.uniqBy(
                //             _.map(this.products_list, function (object) {
                //                 return _.pick(object, ["productCategory"]);
                //             }),
                //             "productCategory"
                //         );
                //         this.categories.unshift({productCategory: "All"});
                //         this.sellers = _.uniqBy(
                //             _.map(this.products_list, function (object) {
                //                 return _.pick(object, ["productSeller"]);
                //             }),
                //             "productSeller"
                //         );
                //         this.sellers.unshift({productSeller: "All"});
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     });
            },

            filterProductBy(event, productFilterID) {
                const productList = [...this.product_duplicate]
                let filteredData = []
                console.log(event.target.value)
                if (event.target.value !== "All") {
                    productList.map(product => {
                        if (product[productFilterID] === event.target.value) {
                            filteredData.push(product);
                        }
                    });
                    this.product_duplicate = filteredData;
                } else {
                    filteredData = productList;

                    this.product_duplicate = filteredData;
                }
            }
        },

        created() {
            this.getAllProducts()
        }
    };
</script>

<style lang="scss">
    $mainColor: #e7257c;
    .products {
        margin-top: 40px;
        .list-2 {
            background-color: white;
        }
    }

    .ft-container {
        padding: 1em;

        .feat {
            border: 1px solid $mainColor;
            height: 30px;
            padding-top: 2px;

            .txt-ft {
                font-weight: bold;
                color: $mainColor;
                font-family: "roboto";
                font-size: 18px;
                float: left;
                margin-left: 1em;
            }
        }
    }
</style>
