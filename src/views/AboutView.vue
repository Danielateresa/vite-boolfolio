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
    <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Qualcosa su di me<span
            class="text-danger">/&#62;</span></h1>

    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 gx-5 text-muted">
            <div class="col">
                <div class="heading">
                    <h2 class="d-inline text-danger fw-bold">Ciao!</h2>
                    <p class="d-inline"><span class="fw-bold text-muted">Sono Daniela, full-stack web
                            developer.</span></p>
                </div>

                <p class="pt-5">La mia <strong>passione per il webe il coding</strong> è iniziata molti anni fa, quando mi sono trovata
                    a creare il mio primo sito vetrina per esigenze di lavoro.
                </p>
                <p>
                    Gli studi di arte e grafica multimediale hanno fatto crescere in me la curiosità di esplorare e
                    approfondire ciò che si cela dietro la <strong>costruzione di siti e applicazioni web</strong>.
                    Non appena ne ho avuto la possibilità, ho deciso quindi che questo sarebbe stato il mio futuro.
                    Mi piace unire il coding al web design e usare i colori per esprimermi.

                </p>
                <p>
                    La formazione e l'esperienza maturate in <span class="fw-bold fs-6">Boolean</span>, attraverso 6
                    mesi
                    full-time, mi hanno permesso di creare molti progetti utilizzando diverse tecnologie e linguaggi di
                    programmazione, a partire dalle basi di
                    <span class="fw-bold text-danger">HTML</span>, <span class="fw-bold text-primary">CSS</span> e
                    <span class="fw-bold text-violet">Bootstrap</span>, evolute poi in sfide sempre più complesse
                    attraverso
                    <span class="fw-bold text-warning">Javascript</span>,
                    <span class="fw-bold text-success">Vue.</span><span class="fw-bold text-muted">Js</span>, <span
                        class="fw-bold text-violet">Vite</span>,
                    <span class="fw-bold text-primary">PhP</span>, <span class="fw-bold text-orange">Laravel</span>,
                    <span class="fw-bold text-violet">php</span><span class="fw-bold text-orange">MyAdmin</span>,
                    <span class="fw-bold text-muted">MySQL</span>.
                </p>
            </div>
            <div class="col">
                <img class="img-fluid d-block" src="../../public/img/tetris.png" alt="avatar">
                <p>I miei hobby sono molti: Mi piace leggere, guardare serie TV, amo gli animali ed essere circondata
                    dal verde e dagli amici.
                    Quando ho del tempo libero mi piace, inoltre, giocare in VR; è un mondo che mi affascina, infatti,
                    sono un'assidua giocatrice di Beat
                    Saber per Oculus, che è tra i miei preferiti.</p>
            </div>
        </div>
        <div class="container w-100">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 pt-4 g-5">
                <div class="col position-relative">
                    <div class="frame">
                        <img class="img-fluid rounded_img square mx-auto d-block"
                            src="../../public/img/immagineprofilo.jpeg" alt="rounded_img">
                        <small class="img_desc">that's me</small>
                    </div>
                </div>
                <div class="col position-relative">
                    <div class="frame">
                        <img class="img-fluid rounded_img mx-auto d-block" src="../../public/img/book.png" alt="book">
                        <small class="img_desc">book lover</small>
                    </div>
                </div>
                <div class="col position-relative">
                    <div class="frame">
                        <img class="img-fluid rounded_img square mx-auto d-block" src="../../public/img/beat-sabe.jpg"
                            alt="rounded_img">
                        <small class="img_desc">beat saber addict</small>
                    </div>
                </div>
                <div class="col position-relative">
                    <div class="frame">
                        <img class="img-fluid rounded_img square mx-auto d-block"
                            src="../../public/img/WhatsApp Image 2023-01-26 at 18.13.31.jpeg" alt="rounded_img">
                        <small class="img_desc">plant lover</small>
                    </div>
                </div>
            </div>

            <!-- col-3 rounded_img-->

        </div>
        <!--text cols -->


    </div>
    <AppFooter></AppFooter>
    <GitLink></GitLink>
</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;

    h2 {
        font-size: 60px;
        font-family: 'Source Code Pro', monospace;
    }

    span {
        font-size: 30px;
    }
}

.rounded_img {
    border-radius: 50%;
    max-width: 200px;
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
</style>
