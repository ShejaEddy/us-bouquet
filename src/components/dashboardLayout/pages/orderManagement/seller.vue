<template>
    <div class="sellers">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Sellers</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <form class="form-inline">
                                        <div class="form-group mb-2">
                                            <label
                                                    for="inputPassword2"
                                                    class="sr-only"
                                            >Search</label
                                            >
                                            <input
                                                    type="search"
                                                    class="form-control"
                                                    id="inputPassword2"
                                                    placeholder="Search..."
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-md-right">
                                        <button
                                                type="button"
                                                class="btn btn-danger waves-effect waves-light mb-2 mr-2"
                                        >
                                            <i class="mdi mdi-basket mr-1"></i>
                                            Add Sellers
                                        </button>
                                        <button
                                                type="button"
                                                class="btn btn-success waves-effect waves-light mb-2 mr-1"
                                        >
                                            <i class="mdi mdi-settings"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table
                                        class="table table-centered table-borderless table-hover mb-0"
                                >
                                    <thead class="thead-light" style="border-bottom:1px solid black">
                                    <tr>
                                        <th style="width: 20px;">No.</th>
                                        <th>Profile</th>
                                        <th>Name</th>
                                        <th>Store Name</th>
                                        <th>Products</th>
                                        <th>Wallet Balance</th>
                                        <th>Create Date</th>
                                        <th>Revenue</th>
                                        <th style="width: 82px;">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                            v-for="(sell, index) in sellers"
                                            :key="index"
                                            class="seller-table"
                                    >
                                        <td>{{ index+1 }} .</td>
                                        <td class="table-user">
                                            <img
                                                    :src="sell.profile"
                                                    alt="sell-profile"
                                                    class="mr-2 rounded-circle"
                                                    height="30"
                                                    width="30"
                                            /></td>
                                        <td>
                                            <router-link to="#"
                                                         class="text-body font-weight-semibold"
                                            >{{ sell.seller }}
                                            </router-link
                                            >
                                        </td>
                                        <td>
                                            {{ sell.storeName }}
                                        </td>
                                        <td>
                                                <span
                                                        class="font-weight-semibold"
                                                >{{ sell.products }}</span
                                                >
                                        </td>
                                        <td>
                                            {{ sell.walletBalance }}
                                        </td>
                                        <td>
                                            {{ sell.createdDate }}
                                        </td>
                                        <td>
                                            {{ sell.revenue }}
                                        </td>

                                        <td>
                                            <a class="action-icon">
                                                <i
                                                        class="mdi mdi-square-edit-outline"
                                                ></i
                                                ></a>
                                            <a class="action-icon">
                                                <i
                                                        class="mdi mdi-delete"
                                                ></i
                                                ></a>
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
        name: "all sellers",
        data() {
            return {
                sellers: [
                    {
                        profile: "/assets/images/users/user-10.jpg",
                        seller: "Shema Fred",
                        storeName: "Homovee",
                        products: "8",
                        walletBalance: "12,000FRW",
                        createdDate: "7/7/2019",
                        revenue: "100rfw"
                    },
                    {
                        profile: "/assets/images/users/user-8.jpg",
                        seller: "Sheja anni",
                        storeName: "Execucy",
                        products: "12",
                        walletBalance: "122,000FRW",
                        createdDate: "09/12/2019",
                        revenue: "1000rfw"
                    },
                    {
                        profile: "/assets/images/users/user-5.jpg",
                        seller: "Kathryn S. Collier",
                        storeName: "Epiloo",
                        products: "50",
                        walletBalance: "122,000FRW",
                        createdDate: "06/30/2019",
                        revenue: "1010rfw"
                    },
                    {
                        profile: "/assets/images/users/user-3.jpg",
                        seller: "Mucyo patrick",
                        storeName: "Symic",
                        products: "235",
                        walletBalance: "352,000FRW",
                        createdDate: "09/08/2019",
                        revenue: "5000rfw"
                    },
                    {
                        profile: "/assets/images/users/user-6.jpg",
                        seller: "Shema allain",
                        storeName: "Insulore",
                        products: "435",
                        walletBalance: "450,000FRW",
                        createdDate: "09/05/2019",
                        revenue: "3000rfw"
                    },
                    {
                        profile: "/assets/images/users/user-5.jpg",
                        seller: "Sheja cedric",
                        storeName: "Susadmin",
                        products: "28",
                        walletBalance: "15,000FRW",
                        createdDate: "08/02/2019",
                        revenue: "300rfw"
                    },
                    {
                        profile: "/assets/images/users/user-4.jpg",
                        seller: "Mucyo emmy",
                        storeName: "Hyperill",
                        products: "77",
                        walletBalance: "45,000FRW",
                        createdDate: "08/02/2019",
                        revenue: "4500rfw"
                    },
                    {
                        profile: "/assets/images/users/user-2.jpg",
                        seller: "Sheja eddy",
                        storeName: "Vicedel",
                        products: "50",
                        walletBalance: "405,000FRW",
                        createdDate: "05/06/2019",
                        revenue: "40500rfw"
                    },
                    {
                        profile: "/assets/images/users/user-1.jpg",
                        seller: "Shema fred",
                        storeName: "Circumous",
                        products: "50",
                        walletBalance: "405,000FRW",
                        createdDate: "05/06/2019",
                        revenue: "40500rfw"
                    }
                ]
            };
        }
    };
</script>

<style scoped></style>
