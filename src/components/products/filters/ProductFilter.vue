<template>
    <div class="productFilter">
        <div id="prdfilter">
            <ul class="list-group cat">
                <li class="cat-title border-bottom">Categories</li>
                <li class="border-top" v-for="val in categories" :value="val"
                    @click="(event) => updateFilter(event, val)">{{ val }}
                </li>
            </ul>
            <ul class="list-group cat">
                <li class="cat-title border-bottom">Shop By Price</li>
                <li class="border-top" v-for="val in price" :value="val"
                    @click="(event) => updateFilter(event, val)">{{ val }}
                </li>
            </ul>
        </div>
        <create-product ref="createProduct"/>
    </div>
</template>
<script>
import CreateProduct from '../actions/CreateProduct'
import { mapState } from 'vuex'

export default {
  name: 'productFilter',
  props: ['categories', 'price', 'fabric'],
  components: { CreateProduct },
  computed: mapState(['loggedUser']),
  data () {
    return {
      selectedCategory: 'All',
      selectedSeller: 'All',
      showCreateProductModal: false
    }
  },
  methods: {
    updateFilter (event, productFilterID) {
      this.$parent.filterProductBy(event, productFilterID)
    },
    openCreateModal () {
      this.$refs.createProduct.showModalForm()
    }
  }
};
</script>

<style lang="scss">
    .productFilter {
        $mainColor: #e7257c;
        #prdfilter {
            text-align: start !important;
        }

        .cat {
            margin-bottom: 2rem;

            li {
            text-transform: uppercase;
            font-size: 13px;
            font-family: roboto;
            cursor: pointer;
            color: gray;
            height: 30px;
            padding-top: 5px;
            list-style: none;
                &:hover {
                    color: $mainColor;
                }
            }

            .cat-title {
                color: $mainColor;
                text-transform: uppercase;
                font-size: 13px;
                cursor: default;
                font-weight: bold;
            }
        }

    }
</style>
