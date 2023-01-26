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
                <h2>{{ project.title }}</h2>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-6">
                            <img class="" :src="getImg(project.cover_img)" alt="">
                        </div>
                        <div class="col-6 description">
                            <p>{{ project.description }}</p>
                            <div class="type">
                                <h4>Project details</h4>
                                <div v-if="project.type">
                                    <h6 class="d-inline">Type: </h6><span>{{ project.type.name }}</span>
                                </div>
                                <div v-else>
                                    <h6 class="d-inline">Type: </h6><span>No type added</span>
                                </div>
                            </div>

                            <div class="technologies">
                                <div class="d-inline" v-if="project.technologies.length > 0">
                                    <h6 class="d-inline">Technologies: </h6>
                                    <span v-for="technology in project.technologies">
                                        #{{ technology.name }}
                                    </span>
                                </div>
                                <div v-else>
                                    <h6 class="d-inline">Technologies: </h6><span>No technologies added</span>
                                </div>
                            </div>
                        </div>
                        <!-- description -->
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
}

img {
    width: 100%;
}
</style>
