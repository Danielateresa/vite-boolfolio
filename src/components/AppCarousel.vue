<script>
export default {
    name: 'AppCarousel',
}
</script>


<template>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="devices">
                    <div class="container-large bg-white">
                        <div class="row px-5 pb-4">
                            <div class="col-sm-12 col-md-5 d-flex flex-column justify-content-center">
                                <div class="">
                                    <h2 class="fw-bold text-uppercase py-4">Sites and web apps on all devices</h2>

                                    <small class="d-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae! Natus
                                        commodi quam
                                        soluta impedit officiis nulla totam libero distinctio expedita placeat ex earum.
                                    </small>

                                    <router-link class="btn btn-danger w-50 mt-5" :to="{ name: 'projects' }">Go to
                                        projects</router-link>
                                </div>
                            </div>
                            <!-- sx_column -->

                            <div class="col-sm-12 col-md-7">
                                <img class="img-fluid" src="../../public/img/devices.png" alt="">
                            </div>
                            <!-- dx_column -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- first frame carousel -->
            <div class="carousel-item">
                <div class="languages">
                    <div class="container-large bg-white pt-4 pb-5">
                        <div class="row px-5 pb-4">

                            <div class="col-sm-12 col-md-6 p-5">
                                <img class="img-fluid" src="../../public/img/language.png" alt="">
                            </div>

                            <!-- sx_column -->

                            <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-center px-5">
                                <div class="">
                                    <h2 class="fw-bold text-uppercase display-3">Languages I speak</h2>

                                    <small class="d-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae! Natus
                                        commodi quam
                                        soluta impedit officiis nulla totam libero distinctio expedita placeat ex earum.
                                    </small>
                                    <hr>
                                    <small class="d-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat assumenda
                                        saepe autem
                                        aliquam earum deserunt ducimus illum beatae dolores mollitia dicta molestias
                                        rerum, adipisci
                                        inventore officia unde eligendi impedit!
                                    </small>

                                    <router-link class="btn btn-danger w-50 mt-5" :to="{ name: 'about' }">More about
                                        be</router-link>
                                </div>
                            </div>
                            <!-- dx_column -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- second frame carousel -->

            <div class="carousel-item">
                <div class="devices">
                    <div class="container-large">
                        <div class="row px-5 pb-4">
                            <div class="col-sm-12 col-md-5 d-flex flex-column justify-content-center">
                                <div class="">
                                    <h2 class="fw-bold text-uppercase py-4">Full-stack developer</h2>

                                    <small class="d-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae! Natus
                                        commodi quam
                                        soluta impedit officiis nulla totam libero distinctio expedita placeat ex earum.
                                    </small>

                                    <a class="btn btn-danger w-50 mt-5" href="https://github.com/Danielateresa"
                                        target="_blank" role="button">More on GitHub</a>

                                </div>
                            </div>
                            <!-- sx_column -->

                            <div class="col-sm-12 col-md-7">
                                <img class="img-fluid" src="../../public/img/lego-stack.png" alt="">
                            </div>
                            <!-- dx_column -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- third frame carousel -->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</template>


<style lang="scss" scoped>
h1 {
    font-size: 50px;
}

h2 {
    text-align: left;
    font-size: 60px;
    color: #fd9c1e;
    font-family: 'Rubik Mono One', sans-serif;
}

.row {
    max-width: 1400px;
    margin: 0 auto;
}
</style>