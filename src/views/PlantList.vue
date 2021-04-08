<template>
    <div id="plant-list" class="container">

        <h1>Plant List</h1>
        <hr>
        <br>
        <br>
        <div v-for="plant in plantList" :key="plant.id">
        <div class="row" @click="submit(plant.slug)">
            <div class="col-3"></div>
            <div class="col-4 text-left"><p><strong>{{plant.display_title}}</strong></p></div>
            <div class="col-4 text-left"><p><strong><em>{{plant.scientific_name}}</em></strong></p></div>
        </div>
        </div>

        <br>
        <br>

    </div>
</template>

<script>
export default {
    name: 'PlantList',
    data() {
      return {
        plantList: [],
      }
    },
    methods: {
        submit(el) {
            this.$router.push({name: 'Plant Info', params: { slug: el } })
        },
        setPlantList() {
            this.$http.get(`wp/v2/plant`).then(response => {
                this.plantList = response.body
            }, error => { alert(error) })
        },
    },
    created: function() {
        this.setPlantList();
    }
}
</script>

<style scoped>
form {
    margin-top:30px;
}
label {
    margin-right: 10px;
}
p{
    line-height: 1.5em;
    font-size: 1.25em;
    font-family: 'Roboto-Light';
    font-weight: 300;
}
h1 {
    font-family: 'ZillaSlab';
}
</style>