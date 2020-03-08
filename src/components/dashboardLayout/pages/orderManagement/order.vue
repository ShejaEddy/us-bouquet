<template>
    <div class="order">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Orders</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-lg-8">
                                    <form class="form-inline">
                                        <div class="form-group mb-2">
                                            <label for="searchOrder" class="sr-only">Search</label>
                                            <input type="search" class="form-control" id="searchOrder"
                                                   placeholder="Search...">
                                        </div>
                                        <div class="form-group mx-sm-3 mb-2">
                                            <label for="status-select" class="mr-2">Status</label>
                                            <select class="custom-select" id="status-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Paid</option>
                                                <option value="2">Awaiting Authorization</option>
                                                <option value="3">Payment failed</option>
                                                <option value="4">Cash On Delivery</option>
                                                <option value="5">Fulfilled</option>
                                                <option value="6">Unfulfilled</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-4">
                                    <div class="text-lg-right">
                                        <button type="button" class="btn btn-light waves-effect mb-2">Export
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>Costumer_Names</th>
                                        <th>Order_Date</th>
                                        <th>Payment_Status</th>
                                        <th>Costumer_Email</th>
                                        <th>Costumer_Number</th>
                                        <th>Costumer_address</th>
                                        <th>zip_Code</th>
                                        <th>cart_Details</th>
                                        <th>card_Number</th>
                                        <th>Status</th>
                                        <th style="width: 125px;">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(order, index) in orders" :key="index">
                                        <td><span>{{order.firstName }} {{ order.lastName}}</span></td>
                                        <td>
                                            <span style="font-size: 12.5px">{{order.dates.date}}</span><br/> <small
                                                class="text-muted">{{order.dates.time}}</small>
                                        </td>
                                        <td>
                                            <div><h5><span
                                                    class="badge bg-soft-success text-success"><i
                                                    class="mdi mdi-coin"></i> Paid</span></h5></div>
                                        </td>
                                        <td>{{order.email}}</td>
                                        <td>{{order.phoneNumber}}</td>
                                        <td>
                                            {{order.district}} <br/>
                                            <small class="text-muted">{{order.address}}</small>
                                        </td>
                                        <td>{{order.zipCode}}</td>
                                        <td style="font-size:14px">
                                            <span v-for="(cart,index) in order.cart_item" :key="index">
                                                Quantity:{{cart.quantity }}<br/>
                                            </span>
                                        </td>
                                        <td>
                                            {{order.card_number}}
                                        </td>
                                        <td>
                                            <h5><span class="badge badge-info">{{order ? order.orderStatus : "sorry for poor network!"}}</span>
                                            </h5>
                                        </td>
                                        <td class="moreOp">
                                            <span @click="del(order)" data-target="#DeleteOrderModal" data-toggle="modal" style="cursor: pointer" class="action-icon"> <i class="mdi mdi-delete"></i></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <delete-order :del="order" @deletedOrder="orderDeleted()"/>
        </div>

    </div>
</template>

<script>
    import axios from "axios"
    import deleteOrder from "./notification/delete-order"
    export default {
        name: 'orders',
        components:{deleteOrder},
        data() {
            return {
                order:{},
                orders: [

                    {
                        orderId: '#UB9708',
                        productProfile: '/img/tsapal5.jpg',
                        firstName: "sheja",
                        lastName: "fred",
                        email: "yannick@example.com",
                        phoneNumber: "0783873738",
                        district: 'Kimihurura',
                        address: 'Rugando',
                        zipCode: '433-030',
                        dates: {
                            date: 'August 05 2019',
                            time: '10:29 PM'
                        },
                        cart_item: [
                            {
                                quantity: '3'
                            },
                            {
                                quantity: '5'
                            }
                        ],
                        card_number: '122-122',
                        orderStatus: 'Shipped',
                        paymentStatus: 'Paid',
                    },
                    {
                        orderId: '#UB9708',
                        productProfile: '/img/tsapal5.jpg',
                        firstName: "umutoni",
                        lastName: "jane",
                        email: "jane9@example.com",
                        phoneNumber: "0783873738",
                        district: 'Kimihurura',
                        address: 'Rugando',
                        zipCode: '433-030',
                        dates: {
                            date: 'August 05 2019',
                            time: '10:29 PM'
                        },
                        cart_item: [
                            {
                                quantity: '3'
                            },
                            {
                                quantity: '5'
                            }
                        ],
                        card_number: '122-122',
                        orderStatus: 'Shipped',
                        paymentStatus: 'Paid',
                    },
                    {
                        orderId: '#UB9708',
                        productProfile: '/img/tsapal5.jpg',
                        firstName: "Shema",
                        lastName: "eddy",
                        email: "shema5@example.com",
                        phoneNumber: "0783873738",
                        district: 'Kimihurura',
                        address: 'Rugando',
                        zipCode: '433-030',
                        dates: {
                            date: 'August 05 2019',
                            time: '10:29 PM'
                        },
                        cart_item: [
                            {
                                quantity: '3'
                            },
                            {
                                quantity: '5'
                            }
                        ],
                        card_number: '122-122',
                        orderStatus: 'Shipped',
                        paymentStatus: 'Paid',
                    },

                ]
            }
        },
        methods: {
            getAllOrders() {
                axios
                    .get(`${process.env.VUE_APP_BASE_URL}/orders`)
                    .then(response => {
                        this.orders = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            del(order){
                this.order = order
            },
            orderDeleted(){
                this.getAllOrders()
            }
        },
        created() {
            this.getAllOrders()
        }
    }
</script>

<style scoped>
    .moreOp {
        display: inline-flex;
    }
</style>
