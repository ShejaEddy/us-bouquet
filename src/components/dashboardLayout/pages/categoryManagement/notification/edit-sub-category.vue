<template>
    <div ref="modal" class="modal fade" id="EditSubCategoryModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 style="margin-left:20px" class="modal-title" id="exampleModalLongTitle">Edit Sub-Category</h4>
                    <button style="outline: none" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div style="margin-left:15px" class="modal-body">
                    <h5>Are you sure you want to update {{ edit.subCategory }} ?</h5>
                    <form>
                        <div class="col-lg-12 marginTop">
                            <label for="name" class="col-lg-2">Name</label>
                            <div class="col-lg-4">
                                <input ref="name" id="name" v-model="tags.name" class="form-control" style="width:200%"
                                       type="text"
                                       placeholder="sub category eg:'inkweto'" required/></div>
                        </div>
                        <div class="marginTop col-lg-12">
                            <label for="description" class="col-lg-2">Description</label>
                            <div class=" col-lg-8">
                                <textarea ref="description" id="description" v-model="tags.description"
                                          class="form-control"
                                          required></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="submit" :data-dismiss="close" @click="updateSubCategory()" class="btn btn-primary">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "edit-sub-category",
        props: ['edit'],
        data() {
            return {
                tags: {
                    name: '',
                    description: ''
                },
                close: null
            }
        },
        methods: {
            updateSubCategory() {
                // axios
                //     .put(`${process.env.VUE_APP_BASE_URL}/tags/`+ this.edit.id, this.tags)
                //     .then(response => {
                //         alert("tags updated succefully")
                //         this.close = "modal"
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })
            }
        },
        mounted() {
            $(this.$refs.modal).on('hidden.bs.modal', () => {
                this.tags.name = ""
                this.tags.description =""
            })
        }
    }
</script>

<style scoped>
    .marginTop {
        margin-top: 10px;
    }

    form {
    }

</style>