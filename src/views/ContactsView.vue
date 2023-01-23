<script>

export default {
    name: 'ContactsView'
}  
</script>

<template>

    <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>Contact me<span
            class="text-danger">/&#62;</span></h1>
    <div class="container pt-5">

        <p class="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum voluptatem suscipit sint?
            Impedit fuga
            dolorem delectus porro sed dolorum eius, ullam consequuntur maiores officia voluptatibus nobis facere dolore
            iusto. Inventore, dignissimos aspernatur? Possimus ad ea libero.</p>

        <div class="container content py-5">

            <form action="">
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="NameHelper">
                    <small id="NameHelper" class="text-muted">Add your name</small>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Surname</label>
                    <input type="text" name="" id="" class="form-control" placeholder=""
                        aria-describedby="SurnameHelper">
                    <small id="SurnameHelper" class="text-muted">Add your surname</small>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <input type="email" name="" id="" class="form-control" placeholder=""
                        aria-describedby="emailHelper">
                    <small id="emailHelper" class="text-muted">Add your email</small>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Message</label>
                    <textarea class="form-control" name="" id="" rows="4"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send</button>


            </form>
        </div>
    </div>
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
