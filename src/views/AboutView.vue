<script>

export default {
    name: 'AboutView'
}  
</script>

<template>
    <div class="container">
        <h1>About me</h1>

        <div class="container pt-3">
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

    </div>


</template>

<style lang="scss" scoped>
.avatar {
    width: 250px;
    border-radius: 50%;
}

.signature {
    font-style: oblique;
}
</style>
