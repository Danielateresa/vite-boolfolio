<script>
import GitLink from '../components/GitLink.vue'
import AppCarousel from '../components/AppCarousel.vue'
export default {
    name: 'HomeView',
    components: {
        GitLink,
        AppCarousel
    }
}  
</script>

<template>

    <h1 class="text-center shadow-sm py-5 mb-0"><span class="text-danger">&#60;</span>Hi! I'm Daniela, web
        developer<span class="text-danger">/&#62;</span></h1>



    <AppCarousel></AppCarousel>


    <div class="social">
        <div class="container py-5">

            <h3 class="text-center text-light">Follow me on...</h3>
            <div class="text-center py-5 d-flex justify-content-center gap-5">
                <div class="">
                    <a href="" class="">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" />
                    </a>
                </div>
                <div class="">
                    <a href="https://github.com/Danielateresa" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" size="2x" />
                    </a>
                </div>

            </div>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolore corrupti! Molestias, ipsum
                magnam. Corrupti nobis at iure et repudiandae explicabo, iste in magnam maiores. Veritatis voluptas
                culpa, exercitationem amet inventore nobis? Optio esse quae eos quaerat sunt! Recusandae et enim harum
                facilis distinctio nulla modi facere in ut similique sint dicta unde. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Perspiciatis reprehenderit aliquam dignissimos natus omnis ipsa quis
                veniam facere, nam nisi ad laborum culpa consequatur asperiores non quaerat beatae, dolorum, maxime
                magni quisquam hic porro cupiditate. Voluptatem asperiores voluptatum, officia quas et accusamus
                quibusdam pariatur, architecto earum nemo aliquam? Tempora, quod.</p>
        </div>
    </div>


    <GitLink></GitLink>

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

h3 {
    font-family: 'Source Code Pro', monospace;
}

.row {
    max-width: 1400px;
    margin: 0 auto;
}

.container-large {
    background-color: #f7e3e5;
}

.social {
    background-color: #9c89b6;

    a {
        color: white;

        .icon {
            width: 150%;
        }
    }
}
</style>
