<script>
import axios from 'axios'
import { store } from '../store'
import AppFooter from '../components/AppFooter.vue'
import GitLink from '../components/GitLink.vue'

export default {
    name: 'ContactsView',
    components: {
        AppFooter,
        GitLink
    },
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            /*  console.log(this.name);
             console.log(this.surname);
             console.log(this.email);
             console.log(this.message); */

            this.loading = true;
            this.errors = {};

            //metto i dati in una varibile data
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                message: this.message,
            }

            axios.post(`${this.store.api_url}/api/contacts`, data)
                .then(response => {

                    this.success = response.data.success;
                    console.log(response);

                    if (this.success) {
                        this.name = '';
                        this.surname = '';
                        this.email = '';
                        this.message = '';
                    } else {
                        this.errors = response.data.errors;
                    }
                    this.loading = false;
                });
        }
    }
}  
</script>

<template>

    <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Contact me<span
            class="text-danger">/&#62;</span></h1>
    <div class="container pt-5">

        <p class="pt-3 text-center">If you have any questions, curiosity, or are interested in working with me, please
            contact me, I
            will respond as soon as possible.</p>

        <div class="container content py-5">

            <div v-if="success" class="alert alert-success text-start" role="alert">
                Il tuo messaggio è stato inviato correttamente!
            </div>

            <form @submit.prevent="sendForm()">
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" name="" id="" v-model="name" class="form-control" placeholder=""
                        aria-describedby="NameHelper">
                    <p v-for="(error) in errors.name" class="text-danger">{{ error }}</p>
                    <small id="NameHelper" class="text-muted">Add your name</small>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Surname</label>
                    <input type="text" name="" id="" v-model="surname" class="form-control" placeholder=""
                        aria-describedby="SurnameHelper">
                    <p v-for="(error) in errors.surname" class="text-danger">{{ error }}</p>
                    <small id="SurnameHelper" class="text-muted">Add your surname</small>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <input type="email" name="" id="" v-model="email" class="form-control" placeholder=""
                        aria-describedby="emailHelper">
                    <p v-for="(error) in errors.email" class="text-danger">{{ error }}</p>
                    <small id="emailHelper" class="text-muted">Add your email</small>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Message</label>
                    <textarea class="form-control" name="" id="" v-model="message" rows="4"></textarea>
                    <p v-for="(error) in errors.message" class="text-danger">{{ error }}</p>
                </div>

                <button type="submit" class="btn btn-danger" :disabled="loading">{{
                    loading? 'Sending...': 'Send'
                }}</button>


            </form>
        </div>
    </div>
    <AppFooter></AppFooter>
    <GitLink></GitLink>
</template>

<style lang="scss" scoped>
.content {
    max-width: 1000px;
}

.row {
    max-width: 1400px;
    margin: 0 auto;
}
</style>
