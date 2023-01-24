<script>

export default {
    name: 'HomeView'
}  
</script>

<template>

    <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Hi! I'm Daniela, web developer<span
            class="text-danger">/&#62;</span></h1>

    <div class="devices">
        <div class="container-large bg-white">
            <div class="row px-5 pb-4">
                <div class="col-sm-12 col-md-4 d-flex flex-column justify-content-center">
                    <div class="">
                        <h2 class="fw-bold text-uppercase display-3">Sites and web apps on all devices</h2>

                        <small class="d-block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae! Natus commodi quam
                            soluta impedit officiis nulla totam libero distinctio expedita placeat ex earum.
                        </small>

                        <a class="btn btn-danger w-50 mt-5" href="Jumbo action link" role="button">Go to
                            projects</a>
                    </div>
                </div>
                <!-- sx_column -->

                <div class="col-sm-12 col-md-8">
                    <img class="img-fluid" src="../../public/img/devices.png" alt="">
                </div>
                <!-- dx_column -->
            </div>
        </div>
    </div>

    <div class="languages">
        <div class="container-large py-5">
            <div class="row px-5 pb-4">

                <div class="col-sm-12 col-md-6 p-5">
                    <img class="img-fluid" src="../../public/img/HTML.png" alt="">
                </div>

                <!-- sx_column -->

                <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-center px-5">
                    <div class="">
                        <h2 class="fw-bold text-uppercase display-3">Languages I speak</h2>

                        <small class="d-block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae! Natus commodi quam
                            soluta impedit officiis nulla totam libero distinctio expedita placeat ex earum.
                        </small>
                        <hr>
                        <small class="d-block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat assumenda saepe autem
                            aliquam earum deserunt ducimus illum beatae dolores mollitia dicta molestias rerum, adipisci
                            inventore officia unde eligendi impedit!
                        </small>

                        <a class="btn btn-danger w-50 mt-5" href="Jumbo action link" role="button">See my
                            projects</a>
                    </div>
                </div>
                <!-- dx_column -->
            </div>
        </div>
    </div>

    <div class="container py-5">


        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolore corrupti! Molestias, ipsum
            magnam. Corrupti nobis at iure et repudiandae explicabo, iste in magnam maiores. Veritatis voluptas
            culpa, exercitationem amet inventore nobis? Optio esse quae eos quaerat sunt! Recusandae et enim harum
            facilis distinctio nulla modi facere in ut similique sint dicta unde.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolore corrupti! Molestias, ipsum
            magnam. Corrupti nobis at iure et repudiandae explicabo, iste in magnam maiores. Veritatis voluptas
            culpa, exercitationem amet inventore nobis? Optio esse quae eos quaerat sunt! Recusandae et enim harum
            facilis distinctio nulla modi facere in ut similique sint dicta unde. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Perspiciatis reprehenderit aliquam dignissimos natus omnis ipsa quis
            veniam facere, nam nisi ad laborum culpa consequatur asperiores non quaerat beatae, dolorum, maxime
            magni quisquam hic porro cupiditate. Voluptatem asperiores voluptatum, officia quas et accusamus
            quibusdam pariatur, architecto earum nemo aliquam? Tempora, quod.</p>


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
}

.row {
    max-width: 1400px;
    margin: 0 auto;
}

.container-large {
    background-color: #f7e3e5;
}
</style>
