<template>
<div id="plantInfo" class="container">
    <h1 id="display_title"></h1>
    <h2 id="scientific_name"></h2>
    <img id="plant_image"/>
    <p id="description"></p>

    <h6>Pubmed Search Strategy</h6>
    <p id="pubmed_search"></p>

    <h6>External Resources (TODO format as buttons)</h6>
    <p id="other_resources"></p>

    <h6>Historical Uses</h6>
    <p id="historical_text"></p>
    <img id="plant_virtues"/>

    <h6>References</h6>
    <p id="references"></p>
</div>
</template>

<script>
export default {
    name: 'PlantInfo',
    data() {
        return {
            page: "",
            loading: true,
        }
    },
    methods: {
        fillInfo() {
            const plantSlug = this.$route.params.slug
            this.$http.get(`wp/v2/plant?slug=${plantSlug}`).then(response => {
                let obj = response.body[0]

                document.getElementById('display_title').innerHTML = obj['display_title']
                document.getElementById('scientific_name').innerHTML = obj['scientific_name']
                document.getElementById('plant_image').src = obj['plant_image']['guid']
                document.getElementById('description').innerHTML = obj['description']
                document.getElementById('pubmed_search').innerHTML = obj['pubmed_search_strategy']
                document.getElementById('other_resources').innerHTML = obj['other_resources']
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