<script>
import axios from 'axios';

export default {
    name: 'PrjectCard',
    props: ['project'],
    data() {
        return {
            projects: null,
            api_url: 'http://localhost:8000',//link al mio server
            loading: true,//di base la pagina carica sempre
            error: null//possibilità di salvare un messaggio dentro error

        }
    },
    methods: {
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
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card border-0 rounded-0 rounded-bottom">

            <img class="card-image" :src="getImg(project.cover_img)" alt="">
            <div class="card-body">
                <h4>{{ project.title }}</h4>
                <div v-if="project.description != null">
                    <p>{{ trimDescription(project.description ) }}</p>
                </div>
            </div>
            <div class="card-footer">
                <div class="type">
                    <strong>type: </strong>
                    <span v-if="project.type">
                        {{ project.type.name }}
                    </span>
                    <span v-else>no type</span>
                </div>

                <div class="technologies">
                    <strong>technologies: </strong>
                    <template v-if="project.technologies.length > 0">
                        <span v-for="technology in project.technologies">
                            #{{ technology.name }}
                        </span>
                    </template>
                    <template v-else>no technologies added</template>
                </div>

                <router-link class="nav-link fw-bold fs-6 text-muted pt-3"
                    :to="{ name: 'singleproject', params: { slug: project.slug } }">Show
                    project</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    max-width: 1000px;
}
</style>