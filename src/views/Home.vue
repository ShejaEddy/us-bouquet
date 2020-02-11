<template>
    <div class="home-component">
        <div class="row mr-auto ml-auto">
            <div class="col-md-9 order-md-1 part-2">
                <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-ride="carousel"
                >
                    <ol class="carousel-indicators">
                        <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                class="active"
                        ></li>
                        <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="1"
                        ></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                    class="d-block w-100 img-fluid sld"
                                    src="/img/package.jpg"
                                    alt="First sld"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                    class="d-block w-100 img-fluid sld"
                                    src="/img/tsapal7.jpg"
                                    alt="First sld"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 order-md-2 part-1">
                <div class="addons">
                    <div class="priceoff">
                        <i class="fas fa-handshake"></i>
                        <div class="title">
                            <p>Tsapal Price <span>50%</span> OFF</p>
                            <p class="shop-now">
                                SHOP NOW
                                <i
                                        class="fas fa-external-link-alt"
                                ></i>
                            </p>
                        </div>
                    </div>
                    <div class="deal">
                        <p>DEAL OF THE DAY</p>
                        <p class="count-down">Expires in 3:42:56</p>
                        <div class="parts">
                            <div class="one">
                                <p>MASAYI</p>
                                <p>Extra 33% OFF</p>
                            </div>
                            <div class="two">
                                <img src="/img/4.jpg"/>
                            </div>
                        </div>
                        <p class="shop-now">
                            SHOP NOW
                            <i class="fas fa-external-link-alt"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ft-container">
            <div class="feat">
                            <span class="txt-ft" aria-current="page"
                            >FEATURE PRODUCTS</span
                            >
                <router-link to="/products" class="show-ft"
                >Show All
                </router-link
                >
            </div>
        </div>
        <FeaturedProducts></FeaturedProducts>
    </div>
</template>

<script>
    import HelloWorld from "@/components/HelloWorld.vue";
    import FeaturedProducts from "@/components/products/FeaturedProducts.vue";
    import ProductFilter from "@/components/products/filters/ProductFilter.vue";

    export default {
        name: "home",
        components: {
            HelloWorld,
            FeaturedProducts,
            ProductFilter
        },
        data() {
            return {
                categories: ["food", "naked", "bad"],
                price: ["High", "low"],
                fabric: ["tissue", "hard", "leather"]
            };
        }
    };
</script>
<style lang="scss">
    @import "../assets/style/home.scss";

    .jumbotron {
        padding: 1rem 0rem;
    }
</style>
