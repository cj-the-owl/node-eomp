<template>
    <footer>
        <div>
            <p class="p-2">Copyright ©️ cj-the-owl & Tim</p>

            <img class="px-2" src="https://i.postimg.cc/9Fh3kdxb/icons8-instagram-50-2.png">
            <img class="px-2" src="https://i.postimg.cc/bJFC1FLy/icons8-github-50-3.png">
            <img class="px-2" src="https://i.postimg.cc/256NwCHf/icons8-linkedin-50-2.png">
        </div>
       
    </footer>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    footer {
        background-color: black;
        color: white;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        align-items: center;
    }

    .px-2 {
        filter: invert(1);
    }
</style>
