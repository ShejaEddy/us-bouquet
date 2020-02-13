<template>
    <div class="slider">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Manage Slider Images</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-lg-8">
                                    <i class="fa fa-bell"></i>
                                    <span>Slider Image</span>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-centered mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th><i class="fa fa-briefcase"></i>select</th>
                                        <th><i class="fa fa-briefcase"></i>S.no</th>
                                        <th><i class="fa fa-user"></i>Slider Title</th>
                                        <th><i class="fa fa-user"></i>Slider Image</th>
                                        <th><i class="fe-shopping-cart"></i>Disabled</th>
                                        <th>Option</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(slide,index) in sliders" :key="index">
                                        <td><input width="20px" type="checkbox"></input></td>
                                        <td><a class="text-body font-weight-bold"></a>{{index +1}}</td>
                                        <td>
                                            <small class="text-muted">{{slide.title}}</small>
                                        </td>
                                        <td>
                                            <a><img :src="slide.picture" alt="logo" height="50"/></a>
                                        </td>
                                        <td>{{ slide.disabled = "true" ? "0" : "1"}}</td>
                                        <td>
                                            <span style="cursor: pointer" class="action-icon"><i
                                                    class="mdi mdi-square-edit-outline"></i></span>
                                            <span class="action-icon" style="cursor: pointer"> <i
                                                    class="mdi mdi-delete"></i></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <p>
                        <span> showing 1 to 3 of 3 entries </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slider-image-manage",
        data() {
            return {
                sliders: [
                    {
                        title: "shoe",
                        picture: "/img/tsapal4.jpg",
                        disabled: true
                    },
                    {
                        title: "Masayi",
                        picture: "/img/tsapal2.jpg",
                        disabled: true
                    },
                    {
                        title: "Slipper",
                        picture: "/img/3.jpg",
                        disabled: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>