<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: null,
            api_url: 'http://localhost:8000',//link al mio server
            loading: true,//di base la pagina carica sempre
            error: null//possibilità di salvare un messaggio dentro error

        }
    },
    methods: {
        //chiamata ajax per ottenere tutti i post del db
        getProjects(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    this.loading = false;//il caricamento finisce dopo l'ottenimento dei dati
                })
                .catch(error => {
                    console.error(error.message);
                    this.loading = false;//il caricamento finisce in caso di errore
                    this.error = error.message;
                });
        },
        getImg(path) {
            if (path) {
                return this.api_url + '/storage/' + path
            }
            return '/img/images.png';
        },
        /**
         * 
         * @param {string} text 
         */
        trimDescription(text) {
            if (text.length > 100) {
                return text.slice(0, 100) + '...'
            }
            return text
        },
        prevPage(url) {
            this.getProjects(url)
        },
        nextPage(url) {
            this.getProjects(url)
        }
    },
    mounted() {
        this.getProjects(this.api_url + '/api/projects');
    }
}
</script>


<template>
    <section class="vue-home">
        <div class="container py-5">
            <h2>All Projects</h2>
            <div class="container content pt-5">


                <ProjectCard></ProjectCard>


            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>
.content {
    max-width: 1000px;
}
</style>