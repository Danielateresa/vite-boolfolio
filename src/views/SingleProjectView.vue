<script>
import axios from 'axios'
import { store } from '../store.js'
import AppFooter from '../components/AppFooter.vue'

export default {
    name: 'SingleProjectView',
    components: {
        AppFooter
    },
    data() {
        return {
            project: null,
            loading: true,
            store

        }
    },
    methods: {
        getImg(path) {
            if (path) {
                return this.store.api_url + '/storage/' + path
            }
            return '/img/images.png';
        }
    },
    mounted() {
        const url = this.store.api_url + '/api/projects/' + this.$route.params.slug;
        console.log(url);

        axios.get(url)
            .then(response => {
                if (response.data.success) { //se ottengo una risposta, quindi nei dati è presente success
                    this.project = response.data.results;
                    this.loading = false;
                } else {
                    //pagina not-found 404 nel caso in cui il progetto cercato non esista
                    this.$router.push({ name: 'notfound' });
                }
            }).catch(error => {
                console.log(error);
            })
    }
}  
</script>

<template>
    <div>
        <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Project details<span
                class="text-danger">/&#62;</span></h1>
        <div class="container pt-3">
            <div v-if="project">
                <div class="container py-5">
                    <h2 class="ps-4 pb-4 proj_title">{{ project.title }}</h2>
                    <div class="card border-0 p-5 shadow-sm">
                        <div class="row row-cols-1 row-cols-md-2">
                            <div class="col-12 col-md-7">
                                <div class="img_window">
                                    <img class="" :src="getImg(project.cover_img)" alt="">
                                </div>
                            </div>
                            <!-- img -->

                            <div class="col-12 col-md-5 description">
                                <h2 class="text-muted">Project details</h2>
                                <div class="type pt-4">
                                    <div v-if="project.type">
                                        <h3 class="d-inline text-muted">Type: </h3><span class="language_tags">{{
                                            project.type.name
                                        }}</span>
                                    </div>
                                    <div v-else>
                                        <h3 class="d-inline">Type: </h3><span>No type added</span>
                                    </div>
                                </div>
                                <!-- //type -->

                                <div class="technologies  pt-4">
                                    <div class="d-inline" v-if="project.technologies.length > 0">
                                        <h3 class="d-inline text-muted">Technologies: </h3>
                                        <span class="language_tags" v-for="technology in project.technologies">
                                            #{{ technology.name }}
                                        </span>
                                    </div>
                                    <div v-else>
                                        <h3 class="d-inline">Technologies: </h3><span>No technologies added</span>
                                    </div>
                                </div>
                                <!-- //technologies -->
                                <p class="text-muted pt-4">{{ project.description }}</p>
                            </div>
                            <!-- //description -->

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;

    .img_window {
        width: 95%;
        height: 500px;
        overflow: auto;
    }

    /* Track */
    .img_window::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    .img_window::-webkit-scrollbar-track {
        border: 1px solid rgb(175, 175, 175);
        border-radius: 10px;
    }

    /* Handle */
    .img_window::-webkit-scrollbar-thumb {
        background: rgb(175, 175, 175);
        border-radius: 10px;
    }

    /* Handle on hover */
    .img_window::-webkit-scrollbar-thumb:hover {
        background: #dc3545;
    }

}

.proj_title {
    color: #fd9c1e;
    font-size: 50px;
}

.language_tags {
    color: #9c89b6;
}

img {
    width: 100%;
}
</style>
