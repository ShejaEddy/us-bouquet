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
                                    <thead class="thead-light">
                                        <tr>
                                            <th style="width: 20px;">No.</th>
                                            <th>Seller</th>
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
                                            <td>{{ index }} .</td>
                                            <td class="table-user">
                                                <img
                                                    src="assets/images/users/user-2.jpg"
                                                    alt="table-user"
                                                    class="mr-2 rounded-circle"
                                                />
                                                <a
                                                    class="text-body font-weight-semibold"
                                                    >{{ sell.seller }}</a
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
                    profile: "user1",
                    seller: "Paul J. Friend",
                    storeName: "Homovee",
                    products: "8",
                    walletBalance: "12,000FRW",
                    createdDate: "7/7/2019",
                    revenue: "100rfw"
                },
                {
                    profile: "user1",
                    seller: "Bryan J. Luellen",
                    storeName: "Execucy",
                    products: "12",
                    walletBalance: "122,000FRW",
                    createdDate: "09/12/2019",
                    revenue: "1000rfw"
                },
                {
                    profile: "user1",
                    seller: "Kathryn S. Collier",
                    storeName: "Epiloo",
                    products: "50",
                    walletBalance: "122,000FRW",
                    createdDate: "06/30/2019",
                    revenue: "1010rfw"
                },
                {
                    profile: "user1",
                    seller: "Zara Raws",
                    storeName: "Symic",
                    products: "235",
                    walletBalance: "352,000FRW",
                    createdDate: "09/08/2019",
                    revenue: "5000rfw"
                },
                {
                    profile: "user1",
                    seller: "Annette P. Kelsch",
                    storeName: "Insulore",
                    products: "435",
                    walletBalance: "450,000FRW",
                    createdDate: "09/05/2019",
                    revenue: "3000rfw"
                },
                {
                    profile: "user1",
                    seller: "Jenny C. Gero",
                    storeName: "Susadmin",
                    products: "28",
                    walletBalance: "15,000FRW",
                    createdDate: "08/02/2019",
                    revenue: "300rfw"
                },
                {
                    profile: "user1",
                    seller: "Edward Roseby",
                    storeName: "Hyperill",
                    products: "77",
                    walletBalance: "45,000FRW",
                    createdDate: "08/02/2019",
                    revenue: "4500rfw"
                },
                {
                    profile: "user1",
                    seller: "Anna Cianta",
                    storeName: "Vicedel",
                    products: "50",
                    walletBalance: "405,000FRW",
                    createdDate: "05/06/2019",
                    revenue: "40500rfw"
                },
                {
                    profile: "user1",
                    seller: "Dean Smithies",
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
