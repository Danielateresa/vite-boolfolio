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
            if (text.length > 70) {
                return text.slice(0, 70) + '...'
            }
            return text
        },
    }
}
</script>

<template>
    <div class="col-xs-12 col-sm-6 col-lg-3">
        <div class="card border-0 rounded-0 rounded-bottom shadow">

            <img class="card-image card_shape" :src="getImg(project.cover_img)" alt="">
            <div class="card-body py-2">
                <h4 class="title">{{ project.title }}</h4>
               <!--  <div v-if="project.description != null">
                    <small class="text-muted">{{ trimDescription(project.description ) }}</small>
                </div> -->
            </div>
            <!-- card-body -->

            <div class="card-footer text-muted border-0">
                <div class="type">
                    <strong>Tipologia: </strong>
                    <span v-if="project.type">
                        {{ project.type.name }}
                    </span>
                    <span v-else>Nessuna tipologia aggiunta</span>
                </div>
                <!-- type -->

                <div class="technologies">
                    <strong>Technologie utilizzate: </strong>
                    <template v-if="project.technologies.length > 0">
                        <span v-for="technology in project.technologies">
                            #{{ technology.name }}
                        </span>
                    </template>
                    <template v-else>Nessuna tecnologia aggiunta</template>
                </div>
                <!-- technologies -->
                <div class="d-flex justify-content-between pt-3">
                    <router-link class="show nav-link fw-bold fs-6"
                        :to="{ name: 'singleproject', params: { slug: project.slug } }"><font-awesome-icon icon="fa-solid fa-eye" size="2x"/></router-link>
                    <!-- Show link -->

                    <p class="" v-if="project.github_link != null">
                        <a target="_blank" :href="project.github_link"><strong class="github">GitHub</strong></a>
                    </p>
                    <!-- github code link -->
                </div>
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

    .nav-link,
    .github,
    a {
        color: #9c89b6;

        &:hover {
            color: #fd9c1e;
        }
    }

    .github,
    a {
        &:hover {
            color: #fd9c1e;
        }
    }
}
</style>