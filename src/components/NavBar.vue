<template>
    <div id="nav">
        <b-row>
        <div class="col-6 text-left">
            <img src="@/assets/rom_logo.png" width="40%" height="40%"/>
        </div>
        <b-nav align="right" class="col-6">
            <button class="custom-button" @click.prevent="redirect()">PLANT LIST</button>
            <button class="custom-button" @click="$router.push({ path: '/' })">ABOUT</button>
            <button class="custom-button" >VISIT</button>
        </b-nav>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {

    },
    methods: {
        redirect() {
            let pl = []
            this.$http.get(`wp/v2/plant`).then(response => {
                pl = response.body
                this.$router.push({ name: 'Plant List', params: {plantList: pl} })
            }, error => { alert(error) })
        },
    }
}
</script>

<style scoped>
.custom-button {
    line-height: 1em;
    height: 2em;
    margin-left: 25px;
    border: none;
    background-color: black;
    color: white;
    padding: 0px 10px;
    font-family: 'ZillaSlab';
}

.custom-button:focus {
    background-color: #FFCD00;
}
</style>