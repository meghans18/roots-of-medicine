<template>
    <div id="garden-map" class="container">

        <h1>Plant List</h1>
        <div v-for="plant in plantList" :key="plant.id">
        <p @click="submit(plant.slug)"> {{plant.display_title}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GardenMap',
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
</style>