<script>

export default {
    name: 'AboutView'
}  
</script>

<template>
    <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Something about me<span
            class="text-danger">/&#62;</span></h1>

    <div class="container pt-5">
        <div class="row">
            <div class="col-4">
                <img class="avatar" src="../.././public/img/ai.jpg" alt="avatar">
            </div>
            <!-- col-3 avatar-->
            <div class="col-8">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat fuga doloremque
                    nihil,
                    sequi impedit, sed, a veniam quod architecto officia eius blanditiis odio mollitia? Fuga
                    accusamus
                    similique eaque amet ex. Maxime praesentium qui neque nesciunt, sunt, cumque ipsam iusto
                    cupiditate
                    quos esse ullam aspernatur asperiores exercitationem itaque magni doloremque excepturi corrupti
                    iure
                    ducimus et laudantium error dignissimos dolorem nostrum? Asperiores optio, ipsa esse odio
                    tempore
                    distinctio! Officia, numquam esse! Facilis incidunt consequuntur laborum et commodi nesciunt,
                    recusandae eligendi beatae quae quis laudantium, fugiat omnis hic ea aspernatur voluptas
                    suscipit
                    dignissimos ullam iure exercitationem. Ab numquam libero iure sit omnis?</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat fuga doloremque
                    nihil,
                    sequi impedit, sed, a veniam quod architecto officia eius blanditiis odio mollitia? Fuga
                    accusamus
                    similique eaque amet ex. Maxime praesentium qui neque nesciunt, sunt.</p>

                <span class="signature">Daniela</span>
            </div>
            <!-- col-8 text -->
        </div>
    </div>

</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;
}

.avatar {
    width: 250px;
    border-radius: 50%;
}

.signature {
    font-style: oblique;
}
</style>
