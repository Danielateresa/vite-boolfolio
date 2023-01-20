<script>
import axios from 'axios'

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: null,
            api_url: 'http://localhost:8000',
            loading: true,


        }
    },
    methods: {
        getImg(path) {
            if (path) {
                return this.api_url + '/storage/' + path
            }
            return '/img/images.png';
        }
    },
    mounted() {
        const url = this.api_url + '/api/projects/' + this.$route.params.slug;
        console.log(url, ' URL ');

        axios.get(url)
            .then(response => {
                if (response.data.success) { //se ottengo una risposta, quindi nei dati è presente success
                    this.project = response.data.results;
                    this.loading = false;
                }
            }).catch(error => {
                console.log(error);
            })
    }
}  
</script>

<template>
    <div>
        <div class="container pt-3">
            <h1>Single project</h1>
            <div v-if="project">
                <h2>{{ project.title }}</h2>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-6">
                            <img class="card-image" :src="getImg(project.cover_img)" alt="">
                        </div>
                        <div class="col-6">
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
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
