<template>
  <div class="products mb-2">
    <div class="row mr-auto">
      <div class="col-md-3 order-md-1 mb-4">
        <product-filter :categories="categories" :price="price" />
      </div>
      <div class="col-md-9 order-md-2 list-2">
        <div class="ft-container">
          <div class="feat">
            <span class="txt-ft" aria-current="page">PRODUCTS</span>
          </div>
          <card-loader :loopCount="8" v-if="loading" />
          <products-list :products_list="product_duplicate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";
import CardLoader from "@/components/shared/CardLoader";
import ProductFilter from "@/components/products/filters/ProductFilter";
import axios from "axios";
import _ from "lodash";

export default {
  name: "allProducts",
  components: { ProductsList, CardLoader, ProductFilter },
  data() {
    return {
      categories: ["new products", "best products", "popular products"],
      price: ["High", "low"],
      fabric: ["tissue", "hard", "leather"],
      products_list: [],
      product_duplicate: [
        {
          productImage: "/img/tsapal5.jpg",
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          productName: "Kamambiri",
          productPrice: "100$"
        },
        {
          productImage: "/img/2.jpg",
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          productName: "Sandal",
          productPrice: "600$"
        },
        {
          productImage: "/img/3.jpg",
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          productName: "Umoja",
          productPrice: "400$"
        },
        {
          productImage: "/img/shoe-bg.jpg",
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          productName: "Slippers",
          productPrice: "150$"
        },
        {
          productImage: "/img/3.jpg",
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          productName: "Ketch",
          productPrice: "300$"
        },
        {
          productImage: "/img/1.jpg",
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          productName: "Style",
          productPrice: "50$"
        }
      ],
      loading: false
    };
  },
  methods: {
    getAllProducts: function() {
      // this.loading = true;
      // axios
      //   .get(products)
      //   .then(response => {
      //     this.loading = false;
      //     this.products_list = response.data.products;
      //     this.product_duplicate = response.data;
      //     // getting all products and getting the uniq value for
      //     // productCategory and returning the productCategory property only
      //     this.categories = _.uniqBy(
      //       _.map(this.products_list, function(object) {
      //         return _.pick(object, ["productCategory"]);
      //       }),
      //       "productCategory"
      //     );
      //     this.categories.unshift({ productCategory: "All" });
      //     this.sellers = _.uniqBy(
      //       _.map(this.products_list, function(object) {
      //         return _.pick(object, ["productSeller"]);
      //       }),
      //       "productSeller"
      //     );
      //     this.sellers.unshift({ productSeller: "All" });
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },

    filterProductBy(event, productFilterID) {
      const productList = [...this.product_duplicate];
      let filteredData = [];
      console.log(event.target.value);
      // if (event.target.value !== "All") {
      //   productList.map(product => {
      //     if (product[productFilterID] === event.target.value) {
      //       filteredData.push(product);
      //     }
      //   });
      //   this.product_duplicate = filteredData;
      // } else {
      //   filteredData = productList;

      //   this.product_duplicate = filteredData;
      // }
    }
  },

  created() {
    this.getAllProducts();
  }
};
</script>

<style lang="scss">
.products {
  margin-top: 40px;
  .list-2 {
    background-color: white;
    border: 1px solid gainsboro;
  }
}
.ft-container {
  padding: 1em;
  .feat {
    border: 1px solid gainsboro;
    height: 30px;
    padding-top: 2px;
    .txt-ft {
      font-weight: bold;
      color: #aba8a8;
      font-family: "roboto";
      font-size: 18px;
      float: left;
      margin-left: 1em;
    }
  }
}
</style>
