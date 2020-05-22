<template>
    <footer class="section footer-classic context-dark bg-image" style="background: #2d3246;">
        <div class="container">
            <div class="row row-30">
                <div class="col-md-4 col-xl-5">
                    <div class="pr-xl-4"><a class="brand" href="#"><img class="brand-logo-light"
                                                                                 src="/img/su-logo.jpg"
                                                                                 alt="" width="82" height="70"></a>
                        <p>We are an award-winning creative agency, dedicated to the best result in the designing of
                            flowers, manufacturing of pots and marketing.</p>
                        <p class="rights"><span>©  </span><span
                                class="copyright-year">2020</span><span> </span><span>S.U - Bouquets</span><span>. </span><span>All Rights Reserved.</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <h5>Contacts</h5>
                    <dl class="contact-list">
                        <dt>Address:</dt>
                        <dd>Rwanda, Kigali</dd>
                    </dl>
                    <dl class="contact-list">
                        <dt>email:</dt>
                        <dd><a href="mailto:#">subouquet@gmail.com</a></dd>
                    </dl>
                    <dl class="contact-list">
                        <dt>phones:</dt>
                        <dd><a href="tel:#">0784141587 </a> <span> or </span> <a href="tel:#"> 0785375738</a>
                        </dd>
                    </dl>
                </div>
                <div class="col-md-4 col-xl-3">
                    <h5>Links</h5>
                    <ul class="nav-list">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/products">Products</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/ContactUs">Contacts</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row no-gutters social-container">
            <div class="col"><a class="social-inner" href="#"><span
                    class="icon mdi mdi-facebook"></span><span>Facebook</span></a>
            </div>
            <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-instagram"></span><span>instagram</span></a>
            </div>
            <div class="col"><a class="social-inner" href="#"><span
                    class="icon mdi mdi-twitter"></span><span>twitter</span></a>
            </div>
            <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-youtube-play"></span><span>google</span></a>
            </div>
        </div>
    </footer>
</template>
<script>
export default{
  name: 'web-footer'
};

</script>
<style lang="scss">
    @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
    @import "../assets/style/webFooter";
</style>
