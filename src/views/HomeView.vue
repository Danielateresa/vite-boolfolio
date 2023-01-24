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

.row {
    max-width: 1400px;
    margin: 0 auto;
}

.container-large {
    background-color: #f7e3e5;
}
</style>
