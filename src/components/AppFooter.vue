<script>

export default {
    name: 'AppFooter',
}
</script>


<template>

    <footer class="pb-3">
        <div class="container social py-5">

            <h3 class="text-center text-light">Follow me on...</h3>
            <div class="text-center py-5 d-flex justify-content-center gap-5">
                <div class="square d-flex align-items-center justify-content-center">
                    <a href="https://www.linkedin.com/in/daniela-teresa-de-leo-5b506122a/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" />
                    </a>
                </div>
                <div class="square d-flex align-items-center justify-content-center">
                    <a href="https://github.com/Danielateresa" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" size="2x" />
                    </a>
                </div>

            </div>

            <p class="w-75 m-auto text-center fs-4">Follow me on my Linkedin and GitHub accounts</p>
        </div>
        <div class="container bottom_footer text-center">
            <hr class="text-white">
            <small>&copy; Daniela Teresa de Leo | 2023</small>
        </div>
    </footer>

</template>


<style lang="scss" scoped>
footer {
    h3 {
        font-family: 'Source Code Pro', monospace;
    }

    box-shadow: 0 5px 5px 0 #7c6d91 inset;
    background-color: #9c89b6;

    a {
        color: white;

        .icon {
            width: 150%;
        }
    }

    .square {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 30%;
        box-shadow: 0 2px 5px 0 #7c6d91;

        &:hover {
            box-shadow: 0 1px 1px 0 #7c6d91;
            transform: scale(99%);
        }
    }
}
</style>