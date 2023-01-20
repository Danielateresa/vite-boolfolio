<script>

export default {
    name: 'ContactsView'
}  
</script>

<template>
    <div class="container">

        <h1>Contact me</h1>

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
</style>
