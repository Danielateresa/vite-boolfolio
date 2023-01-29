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
        <div class="row row-cols-1 row-cols-md-2 gx-5 text-muted">
            <div class="col">
                <div class="heading">
                    <h2 class="d-inline text-danger fw-bold">Hi!</h2>
                    <p class="d-inline"><span class="fw-bold text-muted">I'm Daniela, full-stack web
                            developer.</span></p>
                </div>

                <p class="py-5">My passion for the web and coding started many years ago, when I found myself creating
                    my first
                    showcase site due to work requirements.
                    My studies in art and multimedia graphics made my curiosity grow to explore and deepen what lies
                    behind the construction of websites and web apps, and as soon as I had the chance, I decided that
                    this would be my future.
                    I love combining coding and web design, and using colours to express myself.
                </p>
                <p>
                    The training and experience gained in <span class="fw-bold fs-6">Boolean</span>, through 6 months
                    full-time, has allowed
                    me to create
                    many projects using different technologies and programming languages, starting with the basics of
                    <span class="fw-bold text-danger">HTML</span>, <span class="fw-bold text-primary">CSS</span> and
                    <span class="fw-bold text-violet">Bootstrap</span>, and then evolving into increasingly complex
                    challenges,
                    using
                    <span class="fw-bold text-warning">Javascript</span>,
                    <span class="fw-bold text-success">Vue.</span><span class="fw-bold text-muted">Js</span>, <span
                        class="fw-bold text-violet">Vite</span>,
                    <span class="fw-bold text-primary">PhP</span>, <span class="fw-bold text-orange">Laravel</span>,
                    <span class="fw-bold text-violet">php</span><span class="fw-bold text-orange">MyAdmin</span>,
                    <span class="fw-bold text-muted">SQL</span>.
                </p>
            </div>
            <div class="col">
                <img class="img-fluid d-block" src="../../public/img/tetris.png" alt="avatar">
                <p>My hobbies are many: I like reading, watching series upon series, I love animals, being surrounded
                    by greenery, but I also love technology.
                    VR is a world that fascinates me, in fact, as soon as I have some free time I like to play Beat
                    Saber for Oculus.</p>
            </div>
        </div>
        <div class="container w-100">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 pt-4 g-5">
                <div class="col position-relative">
                    <div class="frame">
                        <img class="img-fluid rounded_img mx-auto d-block" src="../../public/img/ai.jpg" alt="avatar">
                        <small class="img_desc">my avatar</small>
                    </div>
                </div>
                <div class="col position-relative">
                    <div class="frame">
                        <img class="img-fluid rounded_img square mx-auto d-block"
                            src="../../public/img/immagineprofilo.jpeg" alt="rounded_img">
                        <small class="img_desc">that's me</small>
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
