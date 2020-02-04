<template>
	<form id="productCU">
			<h4 class="text-center"> Create Address</h4>
          <div class="form-group">
            <label for="country">Country<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="country"
            >
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control"
              id="city"
            >
          </div>
          <div class="form-group">
            <label for="province">Province<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="province"
            >
          </div>
          <div class="form-group">
            <label for="district">District<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="district"
            >
          </div>
          <div class="form-group">
            <label for="sector">Sector<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="sector"
            >
          </div>
          <div class="form-group">
            <label for="zip-code">Postal / Zip Code<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="zip-code"
            >
          </div>
          <div class="form-group">
            <label for="address-1">Address 1<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="address-1"
              name="address-1"
            >
          </div>
          <div class="form-group">
            <label for="address-2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="address-2"
            >
          </div>
          <div class="form-group">
            <label for="phone-1">Phone Number 1<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="phone-1"
              name="phone-1"
            >
          </div>
          <div class="form-group">
            <label for="phone-2">Phone Number 2</label>
            <input
              type="text"
              class="form-control"
              id="phone-2"
            >
          </div>
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your data with anyone else.</small>
          <br>
        </form>
</template>
