<template>
<div id="plantInfo" class="container">
    <h1 id="display_title" style="font-family: 'ZillaSlab-Light';">{{ display_title }}</h1>
    <em><h5 id="scientific_name" style="font-family: 'Roboto-Regular'; font-weight: 500;">{{ scientific_name }}</h5></em>
    <hr>
    <br>
    <div class="row">
        <div class="col-6"> <img id="plant_image" :src="plant_image"/> </div>
        <div class="col-6 text-left"> 
            <h6 class="heading">Description:</h6>
            <p id="description"></p>
            <br> 
            <h6 class="heading">Pubmed Search Terms:</h6>
            <p id="pubmed_search"></p>
            <br>
            <h6 class="heading">External Resources:</h6>
            <div v-for="link in links" :key="link.id">
                <button @click="redirect(link.url)" class="custom-button">{{ link.text }}</button>
            </div>
        </div>
    </div>
    

    <br>
    <br>
    <br>

    <div class="row text-left">
        <h6 class="heading">Historic Use</h6>
        <p id="historical_text"></p>
    </div>
    <img id="plant_virtues" :src="plant_virtues"/>

    <br>
    <br>
    <br>

    <div class="row text-left">
        <h6 class="heading">References</h6>
        <p id="references"></p>
    </div>
</div>
</template>

<script>
export default {
    name: 'PlantInfo',
    props: ['display_title', 'scientific_name', 'plant_image', 'links', 'description', 'search_strat', 'historical_text', 'plant_virtues', 'references'],
    methods: {
        redirect(url) {
            window.location.href = url
        }
    },
    mounted: function() {
        document.getElementById('description').innerHTML = this.description
        document.getElementById('pubmed_search').innerHTML = this.search_strat
        document.getElementById('historical_text').innerHTML = this.historical_text
        document.getElementById('references').innerHTML = this.references
    }
}
</script>

<style scoped>
.custom-button {
    line-height: 1em;
    height: 2em;
    margin-bottom: 15px;
    border: none;
    background-color: black;
    color: white;
    padding: 0px 10px;
    font-family: 'ZillaSlab';
}

.custom-button:hover {
    color: #FFCD00;
}

.heading {
    font-family: 'ZillaSlab';
    font-weight: 800;
    font-size: 1.25em;
}
</style>