<template>
    <div class="product-details">
        <div class="container">
            <div class="container-fluid">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1"><img :src="product.image"/></div>
                            <div class="tab-pane" id="pic-2"><img src="/img/16.jpg"/></div>
                            <div class="tab-pane" id="pic-3"><img src="/img/18.jpg"/></div>
                            <div class="tab-pane" id="pic-4"><img src="/img/19.jpg"/></div>
                            <div class="tab-pane" id="pic-5"><img src="/img/12.jpg"/></div>
                        </div>
                        <ul class="preview-thumbnail nav nav-tabs">
                            <li class="active"><a data-target="#pic-1" data-toggle="tab"><img
                                    :src="product.image"/></a></li>
                            <li><a data-target="#pic-2" data-toggle="tab"><img src="/img/16.jpg"/></a></li>
                            <li><a data-target="#pic-3" data-toggle="tab"><img src="/img/18.jpg"/></a></li>
                            <li><a data-target="#pic-4" data-toggle="tab"><img src="/img/19.jpg"/></a></li>
                            <li><a data-target="#pic-5" data-toggle="tab"><img src="/img/12.jpg"/></a></li>
                        </ul>
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">{{product.name}}</h3>
                        <div class="rating">
                            <div class="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <span class="review-no">41 reviews</span>
                        </div>
                        <p class="product-description">{{product.description}}</p>
                        <h4 class="price">current price: <span>{{product.price}}</span></h4>
                        <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87
                            votes)</strong></p>
                        <h6 class="sizes">sizes:
                            <span class="size" data-toggle="tooltip" title="small">38</span>
                        </h6>
                        <h5 class="colors">colors:
                            <span class="color orange not-available" data-toggle="tooltip"
                                  title="Not In store"></span>
                            <span class="color green"></span>
                            <span class="color blue"></span>
                        </h5>
                        <div class="action">
                            <button class="add-to-cart btn mr-1 bg-default" type="button">add to cart <i
                                    class="fas fa-cart-plus"></i></button>
                            <button class="like btn bg-default" type="button"><span class="fa fa-heart"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ft-container">
            <div class="feat">
                <span class="txt-ft" aria-current="page">SIMILAR PRODUCTS</span>
            </div>
            <card-loader :loopCount="4" v-if="loading"/>
        </div>
        <div class="row p-3 justify-content-around">
            <div class="d-inline mx-1 mt-3" v-for="(item, index) in similarProduct" :key="index">
                <card-template :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CardTemplate from '../shared/CardTemplate'
import { infoToaster, successToaster, errorToaster } from '../../components/shared/service/ErrorHandler.js'

export default {
  name: 'productDetail',
  components: {
    CardTemplate
  },
  data () {
    return {
      product: {
        image: '/img/2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
        name: 'Floeur de lotus',
        price: '150$'
      },
      loading: false,
      similarProduct: [
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
                        name: 'Wind of love',
                        price: '90$',
                        offerPrice: '60$'
                    }
                ]
    }
  },
  methods: {
    getSimilarProduct (productSeller) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/products/similarProduct`, {
          params: { productSeller: productSeller }
        })
        .then(response => {
          this.similarProduct = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    ...mapMutations(['ADD_CART_LOCAL']),
    addToCart (product) {
      const data = _.find(this.$store.getters.cartProducts, product)
      if (data) {
        infoToaster('Already Added', 'Product Already Added')
      } else {
        successToaster('Added Successfully', 'Product Added Successfully', {
          color: 'red'
        })
        this.ADD_CART_LOCAL(product)
      }
    }
  },
  created () {
    // this.$axios
    //     .get(/products/${this.$route.params.id})
    //     .then(response => {
    //         this.product = response.data;
    //         const starTotal = 5;
    //         const starPercentage =
    //             (Number(this.product.productRating) / starTotal) * 100;
    //         const starPercentageRounded = `${Math.round(starPercentage / 10) *
    //         10}%`;
    //         document.querySelector(
    //             `.stars-inner`
    //         ).style.width = starPercentageRounded;
    //
    //         this.getSimilarProduct(this.product.productSeller);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         errorToaster("Error while fetching similar products", "");
    //     });
  }
};
</script>

<style lang="scss" scoped>
    $mainColor: #e7257c;
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
    .bg-default {
        background-color: $mainColor !important;
    }

    .product-details {
        background-color: white;
        padding-top: 1em;
    }

    .preview {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    @media screen and (max-width: 996px) {
        .preview {
            margin-bottom: 20px;
        }
    }

    .preview-pic {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .preview-thumbnail.nav-tabs {
        border: none;
        margin-top: 15px;
    }

    .preview-thumbnail.nav-tabs li {
        width: 18%;
        margin-right: 2.5%;
    }

    .preview-thumbnail.nav-tabs li img {
        max-width: 100%;
        display: block;
    }

    .preview-thumbnail.nav-tabs li a {
        padding: 0;
        margin: 0;
    }

    .preview-thumbnail.nav-tabs li:last-of-type {
        margin-right: 0;
    }

    .tab-content {
        overflow: hidden;
    }

    .tab-content img {
        max-height: 370px;
        width: 100%;
        -webkit-animation-name: opacity;
        animation-name: opacity;
        -webkit-animation-duration: .3s;
        animation-duration: .3s;
    }

    .card {
        padding: 3em;
        line-height: 1.5em;
        border: none;
        font-family: "Roboto", sans-serif;
    }

    @media screen and (min-width: 997px) {
        .wrapper {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        }
    }

    .details {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .colors {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .product-title, .price, .sizes, .colors {
        text-transform: UPPERCASE;
        font-weight: bold;
    }

    .checked, .price span {
        color: $mainColor;
    }

    .product-title, .rating, .product-description, .price, .vote, .sizes {
        margin-bottom: 15px;
    }

    .product-title {
        margin-top: 0;
    }

    .size {
        margin-right: 4px;
    }

    .size:first-of-type {
        margin-left: 40px;
    }

    .color {
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        height: 2em;
        width: 2em;
        border-radius: 2px;
    }

    .color:first-of-type {
        margin-left: 20px;
    }

    .add-to-cart, .like {
        border: none;
        text-transform: UPPERCASE;
        font-weight: bold;
        font-size: 0.8em;
        color: #fff;
        -webkit-transition: background .3s ease;
        transition: background .3s ease;
    }

    .add-to-cart:hover, .like:hover {
        background: #b36800;
        color: #fff;
    }

    .not-available {
        text-align: center;
        line-height: 2em;
    }

    .not-available:before {
        font-size: 13px;
        font-family: fontawesome;
        content: "\f00d";
        color: #fff;
    }

    .orange {
        background: #ff9f1a;
    }

    .green {
        background: #85ad00;
    }

    .blue {
        background: #0076ad;
    }

    .tooltip-inner {
        padding: 1.3em;
    }

    @-webkit-keyframes opacity {
        0% {
            opacity: 0;
            -webkit-transform: scale(3);
            transform: scale(3);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes opacity {
        0% {
            opacity: 0;
            -webkit-transform: scale(3);
            transform: scale(3);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>
