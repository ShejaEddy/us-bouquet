<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Add / Edit Product</h4>
                    </div>
                </div>
            </div>
            <div class="row" @submit.prevent="createProduct">
                <div class="col-lg-6">
                    <div class="card-box">
                        <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>
                        <div class="form-group mb-3">
                            <label for="product-name">Product Name <span class="text-danger">*</span></label>
                            <input
                                    type="text"
                                    id="product-name"
                                    class="form-control"
                                    placeholder="e.g : Masayi"
                                    v-model="product.name"
                                    required
                            >
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-description">Product Description <span
                                    class="text-danger">*</span></label>
                            <textarea
                                    class="form-control"
                                    id="product-description"
                                    rows="5"
                                    placeholder="Please enter description"
                                    required
                                    v-model="product.description"
                            ></textarea>
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-price">Product Price<span class="text-danger">*</span></label>
                            <input
                                    type="text"
                                    class="form-control"
                                    id="product-price"
                                    v-model="product.price"
                                    required
                                    placeholder="Enter amount"
                            >
                        </div>
                        <div class="form-group mb-3">
                            <label for="quantity">Product Quantity</label>
                            <input
                                    class="form-control"
                                    placeholder="enter quantity"
                                    type="text"
                                    id="quantity"
                                    v-model="product.stock"
                                    required
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-category">Categories <span class="text-danger">*</span></label>
                            <select class="form-control select2" id="product-category">
                                <optgroup label="select">
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="child">Children</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label for="sub category">sub-category</label>
                            <input
                                    class="form-control"
                                    id="sub category"
                                    rows="3"
                                    placeholder="e.g:Footwear"
                                    required
                                    v-model="product.tags"
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-code"> Product Code <span class="text-danger">*</span></label>
                            <input
                                    class="form-control"
                                    id="product-code"
                                    placeholder="enter product code"
                                    type="text"
                                    v-model="product.categories"
                                    required
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card-box">
                        <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
                        <form class="dropzone">
                            <div class="fallback">
                                <input
                                        name="file"
                                        type="file"
                                        multiple
                                        required
                                />
                            </div>
                            <div class="dz-message needsclick">
                                <i class="h1 text-muted dripicons-cloud-upload"></i>
                                <h3>Drop files here or click to upload.</h3>
                                <span class="text-muted font-13">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-md-center">
                    <button type="submit" class="btn w-sm btn-success waves-effect waves-light"
                            @click="createProduct()"><i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>Save
                    </button>
                    <button type="button" class="btn w-sm btn-danger waves-effect waves-light"
                            style="margin-left: 1rem">Clear
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { errorToaster, successToaster } from '../../../shared/service/ErrorHandler'
export default {
  data () {
    return {
      showLoader: false,
      product: {
        name: '',
        description: '',
        price: '',
        stock: '',
        categories: '',
        tags: ''
      },
      errorMessage: []
    }
  },
  methods: {
    createProduct (e) {
      this.showLoader = true
      if (this.product.name.length == 0) {
        this.errorMessage.push(
          'name should contains at least some character'
        )
      }
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/products`, this.product)
        .then(response => {
          this.showLoader = false
          successToaster(
            'Product created Successfully',
            'Product created Successfully'
          )
        })
        .catch(error => {
          console.log(error)
          errorToaster(
            'Product created Failed',
            'Please try again after sometime'
          )
        })
    }
  }
}
</script>
