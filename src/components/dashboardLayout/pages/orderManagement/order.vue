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
                                            <label for="inputPassword2" class="sr-only">Search</label>
                                            <input type="search" class="form-control" id="inputPassword2"
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
                                        <button type="button"
                                                class="btn btn-danger waves-effect waves-light mb-2 mr-2"><i
                                                class="mdi mdi-basket mr-1"></i> Add New Order
                                        </button>
                                        <button type="button" class="btn btn-light waves-effect mb-2">Export
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Products</th>
                                        <th>Date</th>
                                        <th>Payment Status</th>
                                        <th>Total</th>
                                        <th>Payment Method</th>
                                        <th>Order Status</th>
                                        <th style="width: 125px;">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(order, index) in orders" :key="index">
                                        <td><a class="text-body font-weight-bold">{{order.orderId}}</a></td>
                                        <td>
                                            <a><img src="img/1.jpg" alt="tyr" height="32"/></a>
                                        </td>
                                        <td>
                                            {{order.dates.date}} <small class="text-muted">{{order.dates.time}}</small>
                                        </td>
                                        <td>
                                            <h5><span class="badge bg-soft-success text-success"><i
                                                    class="mdi mdi-coin"></i> Paid</span></h5>
                                        </td>
                                        <td>
                                            {{order.total}}
                                        </td>
                                        <td>
                                            {{order.paymentMethod}}
                                        </td>
                                        <td>
                                            <h5><span class="badge badge-info">Shipped</span></h5>
                                        </td>
                                        <td class="moreOp">
                                            <a class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                            <a class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                            <a class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                orders: [

                    {
                        orderId: "#UB9708",
                        productProfile: "img/1.jpg",
                        dates: {
                            date: "August 05 2019",
                            time: "10:29 PM"
                        },
                        paymentStatus: "Paid",
                        total: "17000rfw",
                        paymentMethod: "Mobile Money",
                        orderStatus: "Shipped",
                    },
                    {
                        orderId: "#UB9706",
                        productProfile: "img/3.jpg",
                        dates: {
                            date: "August 04 2019",
                            time: "10:18 AM"
                        },
                        paymentStatus: "Paid",
                        total: "800,000rfw",
                        paymentMethod: "Credit Card",
                        orderStatus: "Processing",
                    },
                    {
                        orderId: "#UB9705",
                        productProfile: "img/4.jpg",
                        dates: {
                            date: "August 03 2019",
                            time: "07:18 AM"
                        },
                        paymentStatus: "Paid",
                        total: "215,000rfw",
                        paymentMethod: "Mastercard",
                        orderStatus: "Delivered",
                    },
                    {
                        orderId: "#UB9704",
                        productProfile: "img/shoe-bg.jpg",
                        dates: {
                            date: "May 22 2019",
                            time: "07:22 PM"
                        },
                        paymentStatus: "Payment Failed",
                        total: "915,000rfw",
                        paymentMethod: "Tigo Cash",
                        orderStatus: "Cancelled",
                    },
                    {
                        orderId: "#UB9703",
                        productProfile: "img/2.jpg",
                        dates: {
                            date: "May 22 2019",
                            time: "07:22 PM"
                        },
                        paymentStatus: "Paid",
                        total: "183,000rfw",
                        paymentMethod: "Paypal",
                        orderStatus: "Shipped",
                    },
                    {
                        orderId: "#UB9702",
                        productProfile: "img/2.jpg",
                        dates: {
                            date: "March 18 2019",
                            time: "11:19 PM"
                        },
                        paymentStatus: "Awaiting Authorization",
                        total: "1,768,000rfw",
                        paymentMethod: "Visa",
                        orderStatus: "Processing",
                    },
                    {
                        orderId: "#UB9701",
                        productProfile: "img/3.jpg",
                        dates: {
                            date: "February 01 2019",
                            time: "07:22 AM"
                        },
                        paymentStatus: "Cash on Delivery",
                        total: "2,768,000rfw",
                        paymentMethod: "Mobile Money",
                        orderStatus: "Shipped",
                    },
                    {
                        orderId: "#UB9700",
                        productProfile: "img/4.jpg",
                        dates: {
                            date: "January 22 2019",
                            time: "08:09 PM"
                        },
                        paymentStatus: "Paid",
                        total: "768,000rfw",
                        paymentMethod: "TIGO Cash",
                        orderStatus: "Delivered",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .moreOp {
        display: inline-flex;
    }
</style>