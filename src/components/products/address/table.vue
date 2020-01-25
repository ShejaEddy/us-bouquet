<template>
<div class="container">
	<div class="row">
      <div class="col-md-12" v-if="Address.length>0">
        <div class="table-responsive">
        	{{ createBtn(true) }}
          <table id="mytable" class="table table-bordred table-striped">
           <thead>
           	   <th></th>
	           <th>Country</th>
	           <th>Province</th>
	           <th>District</th>
	           <th>Sector</th>
	           <th>Address</th>
	           <th>Contacts</th>
	           <th>Edit</th>
	           <th>Delete</th>
           </thead>
    <tbody>
    <tr>
    <td><input type="checkbox" class="checkthis" /></td>
    <td>Rwanda</td>
    <td>Kigali</td>
    <td>Remera</td>
    <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
    <td>isometric.mohsin@gmail.com</td>
    <td>+923335586757</td>
    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs"><i class="fas fa-pen"></i></button></p></td>
    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs"><i class="fas fa-trash"></i></button></p></td>
    </tr>
    </tbody>
        
</table>
                
   </div>
         
     </div>
        <div class="error-template container" v-else>
            <h1>Oops!</h1>
            <h2>No Address Found {{ createBtn(false) }}</h2>
            <div class="error-actions">
              <button class="btn btn-primary" @click="openForm">Create New Address</button>
            </div>
        </div>   
	</div>
</div>
</template>
<script>
export default{
	computed: {
		Address(){
			return []
		}
	},
	methods:{
		openForm() {
			this.$emit("openAddressForm")
		},
		createBtn(e) {
			this.$emit("createBtn",e)
		}
	}
};
</script>