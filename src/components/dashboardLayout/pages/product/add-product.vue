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
            <div class="row">
                <div class="col-lg-6">
                    <div class="card-box">
                        <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>
                        <div class="form-group mb-3">
                            <label for="product-name">Product Name <span class="text-danger">*</span></label>
                            <input type="text" id="product-name" class="form-control" placeholder="e.g : Masayi">
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-description">Product Description <span
                                    class="text-danger">*</span></label>
                            <textarea class="form-control" id="product-description" rows="5"
                                      placeholder="Please enter description"></textarea>
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
                            <input class="form-control" id="sub category" rows="3"
                                   placeholder="e.g:Footwear"/>
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-price">Actual Price<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="product-price" placeholder="Enter amount">
                        </div>
                        <div class="form-group mb-3">
                            <label for="offer Price">Offer Price</label>
                            <input class="form-control" id="offer Price" placeholder="offer price" type="text"/>
                        </div>
                        <div class="form-group mb-3">
                            <label for="quantity">Product Quantity</label>
                            <input class="form-control" placeholder="enter quantity" type="text" id="quantity"/>
                        </div>
                        <div class="form-group mb-3">
                            <label for="product-code"> Product Code <span class="text-danger">*</span></label>
                            <input class="form-control" id="product-code" placeholder="enter product code" type="text"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card-box">
                        <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
                        <form action="#" class="dropzone">
                            <div class="fallback">
                                <input name="file" type="file" multiple/>
                            </div>
                            <div class="dz-message needsclick">
                                <i class="h1 text-muted dripicons-cloud-upload"></i>
                                <h3>Drop files here or click to upload.</h3>
                                <span class="text-muted font-13">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                            </div>
                        </form>
                    </div>
                    <div class="form-group mb-0">
                        <label>Comment</label>
                        <textarea class="form-control" rows="3" placeholder="Please enter comment"></textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label class="mb-2">Status <span class="text-danger">*</span></label>
                        <br/>
                        <div class="radio form-check-inline">
                            <input type="radio" id="inlineRadio1" value="option1" name="radioInline" checked="">
                            <label for="inlineRadio1"> Online </label>
                        </div>
                        <div class="radio form-check-inline">
                            <input type="radio" id="inlineRadio2" value="option2" name="radioInline">
                            <label for="inlineRadio2"> Offline </label>
                        </div>
                        <div class="radio form-check-inline">
                            <input type="radio" id="inlineRadio3" value="option3" name="radioInline">
                            <label for="inlineRadio3"> Draft </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-md-center">
                    <button type="button" class="btn w-sm btn-success waves-effect waves-light">Save</button>
                    <button type="button" class="btn w-sm btn-danger waves-effect waves-light" style="margin-left: 1rem">Clear</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
