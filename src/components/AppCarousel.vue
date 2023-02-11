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
                                    <h2 class="fw-bold text-uppercase py-4">Siti e <br>
                                        web app responsive
                                    </h2>

                                    <small class="d-block">
                                        Realizzare un <strong class="text-muted fs-6">sito web</strong> o un'<strong class="text-muted  fs-6">applicazione adattabile a diversi device</strong>, è oggi
                                        fonamentale per restare al passo con la tecnologia ed essere sempre competitivi.
                                        Attraverso diversi strumenti e tecnologie, ho realizzato vari progetti
                                        responsive che mantengono le proprie funzionalità e rispettano una linea
                                        estetica, pur essendo visualizzati su diversi formati, consentendo all'utente di
                                        avere un'esperienza completa e versatile.
                                    </small>

                                    <router-link class="btn btn-danger w-50 mt-5 shadow" :to="{ name: 'projects' }">Go to
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
                                    <h2 class="fw-bold text-uppercase display-3">Ogni linguaggio è una grande
                                        opportunita'</h2>

                                    <small class="d-block">
                                        Durante la mia formazione ho acquisito conoscenze su diversi linguaggi
                                        appartenenti allo <strong class="text-muted fs-6">sviluppo web front-end e back-end</strong>.
                                    </small>
                                    <hr>
                                    <small class="d-block">
                                        Entrambi gli aspetti di questo mondo mi affascinano, sembrano opposti ma spesso
                                        si completano e contaminano a vicenda, per questo sono sempre curiosa
                                        nell'apprendere nuovi linguaggi appartenenti alla programmazione. Segui il link
                                        per scoprire qualcosa in
                                        più su di me.
                                    </small>

                                    <router-link class="btn btn-danger w-50 mt-5 shadow" :to="{ name: 'about' }">More about
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
                                    <h2 class="fw-bold text-uppercase py-4">Full-stack <br> web developer</h2>

                                    <small class="d-block">
                                        I vari progetti da me sviluppati spaziano tra il <strong class="text-muted fs-6">front-end</strong>, la parte visibile e
                                        interattiva, e il <strong class="text-muted fs-6">back-end</strong>, ciò che dietro le quinte lavora per mostrare e
                                        gestire i dati. <br>
                                         Per
                                        visionare il codice completo dei miei progetti, segui il link al mio GitHub.
                                    </small>

                                    <a class="btn btn-danger w-50 mt-5 shadow" href="https://github.com/Danielateresa"
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
        <button class="carousel-control-prev text-muted" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"><font-awesome-icon
                    icon="fa-solid fa-chevron-left" size="2x" /></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next text-muted" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><font-awesome-icon
                    icon="fa-solid fa-chevron-right" size="2x" /></span>
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
    font-weight: bolder;
    font-family: 'Archivo Black', sans-serif;
}

.row {
    max-width: 1400px;
    margin: 0 auto;
}

.violet {
    color: #7c6d91;
}
</style>