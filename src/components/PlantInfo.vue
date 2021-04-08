<template>
<div id="plantInfo" class="container">
    <h1 id="display_title" style="font-family: 'ZillaSlab-Light';"></h1>
    <em><h5 id="scientific_name" style="font-family: 'Roboto-Regular'; font-weight: 500;"></h5></em>
    <hr>
    <br>
    <div class="row">
        <div class="col-6"> <img id="plant_image"/> </div>
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
    <img id="plant_virtues"/>

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
    data() {
        return {
            page: "",
            loading: true,
            links: []
        }
    },
    methods: {
        redirect(url) {
            window.location.href = url
        },
        fillInfo() {
            const plantSlug = this.$route.params.slug
            this.$http.get(`wp/v2/plant?slug=${plantSlug}`).then(response => {
                let obj = response.body[0]

                //regex stuff to help making buttons
                let otherResources = obj['other_resources']

                const regex = /<p>(.+?)<\/p>/g;
                const regex2 = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;
                const regex3 = /(<([^>]+)>)/ig;

                const found = otherResources.match(regex);
                const found2 = otherResources.match(regex2)
                let found3 = []
                for (let i = 0; i < found2.length; i++) {
                    found3.push(found[i].replace(regex3, ''))
                }

                for (let i = 0; i < found2.length; i++) {
                    this.links.push({
                        id: i,
                        url: found2[i],
                        text: found3[i]
                    })
                }
                //end regex stuff

                document.getElementById('display_title').innerHTML = obj['display_title']
                document.getElementById('scientific_name').innerHTML = obj['scientific_name']
                document.getElementById('plant_image').src = obj['plant_image']['guid']
                document.getElementById('description').innerHTML = obj['description']
                document.getElementById('pubmed_search').innerHTML = obj['pubmed_search_strategy']
                document.getElementById('historical_text').innerHTML = obj['historical_text']
                document.getElementById('plant_virtues').src = obj['plant_virtues_image']['guid']
                document.getElementById('references').innerHTML = obj['references']
            }, error => { alert(error) })
        }
    },
    created: function() {
        this.fillInfo();
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