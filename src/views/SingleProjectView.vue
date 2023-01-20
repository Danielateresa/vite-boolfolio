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
    mounted() {
        const url = this.api_url + '/api/project/' + this.$route.params.slug;
        console.log(url);

        axios.get('url')
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
        <div class="container">
            <h1>About me</h1>
            <div v-if="project">
                <h2>{{ project.title }}</h2>

            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
