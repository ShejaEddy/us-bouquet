<template>
    <div ref="modal" class="modal fade edit-product showModal" id="editProduct" tabindex="-1" role="dialog"
         aria-labelledby="editProductLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editProductLabel">Make Comment on {{comment.name}}</h5>
                    <button style="outline: none" type="button"  data-dismiss="modal" class="close" @click="$emit('close')" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        <form>
                            <div class="marginTop col-lg-12">
                                <label for="comment" class="col-lg-4">Content</label>
                                <div class=" col-lg-8">
                                    <textarea id="comment" v-model="product.comment" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12 marginTop">
                                <label for="name" class="col-lg-4">Rating</label>
                                <div class="col-lg-4">
                                    <input id="name" v-model="product.rating" class="form-control" type="text"
                                           placeholder="enter your ratings"/></div>
                            </div>
                        </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$emit('close')">Cancel</button>
                    <button type="submit" @click="createComment()" class="btn btn-success" :data-dismiss="close" style="margin-left:10px">Comment</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        props: ['comment'],
        data() {
            return {
                product: {
                    content: "",
                    rating: ""
                },
                close:""
            }
        },
        methods: {
            createComment() {
                // axios
                //     .post(`${process.env.VUE_APP_BASE_URL}/products/by_id/+this.comment.id +/comments`, this.product)
                //     .then(response => {
                //         this.$emit('reloadProduct')
                //         this.close = "modal"
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })
                // console.log(this.comment)
            }
        },
        mounted(){
            $(this.$refs.modal).on('hidden.bs.modal', () =>{
                this.product.content = ''
                this.product.rating = ''
                this.comment = null
            })
        },
    }
</script>
<style lang="scss">
    .showModal {
        display: block;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
