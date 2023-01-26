<script>
import AppFooter from '../components/AppFooter.vue'
import GitLink from '../components/GitLink.vue'

export default {
    name: 'AboutView',
    components: {
        AppFooter,
        GitLink
    }
}  
</script>

<template>
    <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Something about me<span
            class="text-danger">/&#62;</span></h1>

    <div class="container py-5">
        <div class="row gx-5">
            <div class="col-12">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat fuga doloremque
                    nihil,
                    sequi impedit, sed, a veniam quod architecto officia eius blanditiis odio mollitia? Fuga
                    accusamus
                    similique eaque amet ex. Maxime praesentium qui neque nesciunt, sunt, cumque ipsam iusto
                    cupiditate
                    quos esse ullam aspernatur asperiores exercitationem itaque magni doloremque excepturi corrupti
                    iure
                    ducimus et laudantium error dignissimos dolorem nostrum? Asperiores optio, ipsa esse odio
                    tempore
                    distinctio! Officia, numquam esse! Facilis incidunt consequuntur laborum et commodi nesciunt,
                    recusandae eligendi beatae quae quis laudantium, fugiat omnis hic ea aspernatur voluptas
                    suscipit
                    dignissimos ullam iure exercitationem. Ab numquam libero iure sit omnis?</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat fuga doloremque
                    nihil,
                    sequi impedit, sed, a veniam quod architecto officia eius blanditiis odio mollitia? Fuga
                    accusamus
                    similique eaque amet ex. Maxime praesentium qui neque nesciunt, sunt.</p>

                <span class="signature">Daniela</span>
            </div>
            <!-- col-8 text -->
            <div class="col-12 pb-5">
                <div class="row row-cols-sm-2 row-cols-md-4 pt-4 g-3 g-md-5 w-75">
                    <div class="col position-relative">
                        <div class="frame">
                            <img class="img-fluid rounded_img mx-auto d-block" src="../.././public/img/ai.jpg"
                                alt="avatar">
                            <small class="img_desc">my avatar</small>
                        </div>
                    </div>
                    <div class="col position-relative">
                        <div class="frame">
                            <img class="img-fluid rounded_img square mx-auto d-block"
                                src="../.././public/img/immagineprofilo.jpeg" alt="rounded_img">
                            <small class="img_desc">that's me</small>
                        </div>
                    </div>
                    <div class="col position-relative">
                        <div class="frame">
                            <img class="img-fluid rounded_img square mx-auto d-block"
                                src="../.././public/img/beat-sabe.jpg" alt="rounded_img">
                            <small class="img_desc">beat saber addict</small>
                        </div>
                    </div>
                    <div class="col position-relative">
                        <div class="frame">
                            <img class="img-fluid rounded_img square mx-auto d-block"
                                src="../.././public/img/WhatsApp Image 2023-01-26 at 18.13.31.jpeg" alt="rounded_img">
                            <small class="img_desc">plant lover</small>
                        </div>
                    </div>
                </div>
            </div>
            <!-- col-3 rounded_img-->
        </div>
    </div>
    <AppFooter></AppFooter>
    <GitLink></GitLink>
</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;
}

.rounded_img {
    border-radius: 50%;
}

.frame {
    &:hover {
        img {
            filter: grayscale(80%);

        }

        .img_desc {
            text-align: center;
            color: #fd9c1e;
            text-shadow: 0 0 20px black, 0 0 30px black, 0 0 40px black, 0 0 55px black, 0 0 75px black;
            font-weight: bold;
            text-transform: uppercase;
            font-family: 'Source Code Pro', monospace;
        }
    }


    .img_desc {
        position: absolute;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: transparent;

    }

}


.square {
    aspect-ratio: 1/1;
    object-fit: cover;
}

.signature {
    font-family: 'Source Code Pro', monospace;
}
</style>
