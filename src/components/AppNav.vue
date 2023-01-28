<script>

export default {
    name: 'AppNav',
}
</script>


<template>

    <nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div class="container d-flex">
            <a class="navbar-brand text-uppercase w-50" href="#"><img class="img-fluid"
                    src="../../public/img/dev-logo.png" alt=""></a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse bg-dark bg-opacity-75 rounded mt-4" id="collapsibleNavId">
                <ul class="navbar-nav text-uppercase text-end ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">Home <span
                                class="visually-hidden">(current)</span></router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>


<style lang="scss" scoped>
nav {
    height: 60px;

    a {
        max-width: 400px;
    }
}
</style>