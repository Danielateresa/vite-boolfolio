<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    name: 'ProjectCard',
    props: ['project'],
    data() {
        return {
            store,
            projects: null,
            loading: true,//di base la pagina carica sempre
            error: null,//possibilità di salvare un messaggio dentro error
        }
    },
    methods: {
        getImg(path) {
            if (path) {
                return this.store.api_url + '/storage/' + path
            }
            return '/img/images.png';
        },
        /**
         * 
         * @param {string} text 
         */
        trimDescription(text) {
            if (text.length > 50) {
                return text.slice(0, 50) + '...'
            }
            return text
        },
    }
}
</script>

<template>
    <div class="col-xs-12 col-sm-6 col-lg-3">
        <div class="card border-0 rounded-0 rounded-bottom shadow-sm">

            <img class="card-image card_shape" :src="getImg(project.cover_img)" alt="">
            <div class="card-body py-2">
                <h4 class="title">{{ project.title }}</h4>
                <div v-if="project.description != null">
                    <p class="text-muted">{{ trimDescription(project.description ) }}</p>
                </div>
            </div>
            <!-- card-body -->

            <div class="card-footer text-muted border-0">
                <div class="type">
                    <strong>Project type: </strong>
                    <span v-if="project.type">
                        {{ project.type.name }}
                    </span>
                    <span v-else>no type</span>
                </div>
                <!-- type -->

                <div class="technologies">
                    <strong>Technologies: </strong>
                    <template v-if="project.technologies.length > 0">
                        <span v-for="technology in project.technologies">
                            #{{ technology.name }}
                        </span>
                    </template>
                    <template v-else>no technologies added</template>
                </div>
                <!-- technologies -->

                <router-link class="show nav-link fw-bold fs-6 pt-3"
                    :to="{ name: 'singleproject', params: { slug: project.slug } }">Show <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg></router-link>
                <!-- Show link -->
            </div>
            <!-- card-footer -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    max-width: 1000px;
}

.nav-link {
    width: fit-content;
    color: #9c89b6;

    &:hover {
        color: #fd9c1e;
    }
}

.card {
    &:hover {
        transform: scale(110%);
        transition: 0.5s;
    }

    .title {
        color: #fd9c1e;
    }

    .card_shape {
        aspect-ratio: 1/1;
        object-fit: cover;
    }
}
</style>