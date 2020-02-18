<template>
  <div class="featured-products container">
    <div class="row">
      <card-loader :loopCount="4" v-if="loading"/>
      <div class="col-md-3" v-for="(item, index) in FeaturedProducts" :key="index">
        <card-template :item="item" width="100%"/>
      </div>
    </div>
    <edit-product ref="editProduct"/>
  </div>
</template>

<script>
import axios from 'axios'
import { errorToaster } from '../shared/service/ErrorHandler'
import CardLoader from '../shared/CardLoader'
import CardTemplate from '../shared/CardTemplate'
import EditProduct from './actions/EditProduct'
export default {
  name: 'BestProducts',
  components: { CardLoader, CardTemplate, EditProduct },
  data () {
    return {
      FeaturedProducts: [
        {
          productImage: '/img/1.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Kamambiri',
          actualPrice: '100$',
          offerPrice:'80$'
        },
        {
          productImage: '/img/2.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Sandal',
          actualPrice: '600$',
          offerPrice:'500$'
        },
        {
          productImage: '/img/3.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Umoja',
          actualPrice: '400$',
          offerPrice:'350$'
        },
        {
          productImage: '/img/tsapa10.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Slippers',
          actualPrice: '150$',
          offerPrice:'100$'
        },
        {
          productImage: '/img/3.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Ketch',
          actualPrice: '300$',
          offerPrice:'200$'
        },
        {
          productImage: '/img/1.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Style',
          actualPrice: '50$',
          offerPrice:'40$'
        },
        {
          productImage: '/img/tsapal7.jpg',
          productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
          productName: 'Rugabire',
          actualPrice: '20$',
          offerPrice:'10$'
        },
          {
              productImage: '/img/tsapal6.jpg',
              productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.',
              productName: 'Masayi',
              actualPrice: '90$',
              offerPrice:'60$'
          }
      ],
      loading: false
    }
  },
  methods: {
    editProduct (product) {
      this.$refs.editProduct.setProduct(product)
    },

    getFeaturedProducts () {
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
  created () {
    this.getFeaturedProducts()
  }
}
</script>

<style lang="scss">
.cardLoader{
  padding: 0 1em;
}
svg{
  width: 100% !important;
  padding: 0 !important;
}
</style>
