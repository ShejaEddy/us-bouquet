<template>
  <div class="cart-products">
<div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-3">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Total Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in products" :key="item.id">
                  <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div class="media-body order-2 order-lg-1">
                      <h5 class="mt-0 font-weight-bold mb-2">{{item.productName}}</h5>
                      <p class="font-italic text-muted mb-0 small">{{item.productDescription}}</p>
                      <div class="d-flex align-items-center justify-content-between mt-1">
                        <h6 class="font-weight-bold my-2">{{item.productPrice}}</h6>
                        <ul class="list-inline small">
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-gray"></i></li>
                        </ul>
                      </div>
                    </div><img :src="item.productImage" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                  </div>
                  <td class="border-0 align-middle" style="min-width: 150px;">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" @click="removeFromCart(item)"><i class="fas fa-minus" style="font-size:0.8em"></i></span>
                      </div>
                      <input type="text" class="form-control" style="max-width: 50px;" :value="QtyProduct(item)" aria-label="Amount (to the nearest dollar)">
                      <div class="input-group-append" >
                        <span class="input-group-text" @click="addToCart(item)"><i class="fas fa-plus" style="font-size:0.8em"></i></span>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle" style="min-width: 150px;"><strong>{{item.productPrice}}</strong></td>
                  <td class="border-0 align-middle"><a href="javascript:;;" class="text-dark"><i class="fa fa-trash" @click="removeProductCart(item)"></i></a></td>
                </tr>
                <tr v-if="products.length<=0" class="border-0">
                  <div class="error-template container">
                    <h1>Oops!</h1>
                    <h2>No Products Found</h2>
                    <div class="error-details">Your cart is empty</div>
                    <div class="error-actions">
                      <a class="btn text-white">
                        <span class="glyphicon glyphicon-envelope"></span>
                        <router-link to="/products">Take me to Products Page</router-link>
                      </a>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row py-5 p-4 bg-white rounded shadow-sm" v-if="products.length>0">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div class="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
              <div class="input-group-append border-0">
                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div class="p-4">
            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">$400.00</h5>
              </li>
            </ul><button @click="$router.push('/checkout')" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div> 
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CartCalculator from "./CartCalculator";
export default {
  name: "CartProducts",
  components: { CartCalculator },
  data() {
    return {
      qty:[]
    };
  },
  computed: {
    ...mapState(["cartProducts"]),
    products(){
      return [...new Set(this.cartProducts.map(v=>JSON.stringify(v)))].map(v=>JSON.parse(v))
    },
    
  },
  methods: {
    ...mapMutations(["SET_CART_PRODUCTS","ADD_CART_LOCAL"]),
    addToCart(product) {
        this.ADD_CART_LOCAL(product);
    },
    removeFromCart(item){
      var index = null;
      for (let i = 0; i < this.cartProducts.length; i++) {
        if(this.cartProducts[i].productName === item.productName) {
           index = i
        }
      }
      this.cartProducts.splice(index,1)
      this.SET_CART_PRODUCTS(this.cartProducts);
      localStorage.setItem("iki-cart", JSON.stringify(this.cartProducts));
    },
    QtyProduct(item){
      return this.cartProducts.filter(v=>v.productName===item.productName).length
    },
    removeProductCart(product) {
      const products = JSON.parse(localStorage.getItem("iki-cart"));
      for (let i = 0; i < products.length; i++) {
        if (products[i]._id === product._id) {
          products.splice(i, 1);
        }
      }
      this.SET_CART_PRODUCTS(products);
      localStorage.setItem("iki-cart", JSON.stringify(products));
      this.$refs.cartCalculator.calulateTotalPrice();
    }
  },
  mounted() {}
};
</script>

<style>
.error-template {
  padding: 40px 15px;
  text-align: center;
}

.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}

.error-actions .btn {
  margin-right: 10px;
}
tr {
  border-bottom: 1px solid lightgrey;
}
</style>
