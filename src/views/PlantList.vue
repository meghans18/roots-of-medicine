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
    props: ['plantList'],
    methods: {
        submit(el) {
            this.$http.get(`wp/v2/plant?slug=${el}`).then(response => {
                let obj = response.body[0]

                let display_title = obj['display_title']
                let scientific_name = obj['scientific_name']
                let plant_image = obj['plant_image']['guid']
                let description = obj['description']
                let search_strat = obj['pubmed_search_strategy']
                let historical_text = obj['historical_text']
                let plant_virtues = obj['plant_virtues_image']['guid']
                let references = obj['references']

                //regex stuff to help making buttons
                let links = [];
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
                    links.push({
                        id: i,
                        url: found2[i],
                        text: found3[i]
                    })
                }
                //end regex stuff

                this.$router.push({name: 'Plant Info', params: { slug: el, display_title: display_title, scientific_name: scientific_name,
                                                                    plant_image: plant_image, links: links, description: description,
                                                                    search_strat: search_strat, historical_text: historical_text,
                                                                    plant_virtues: plant_virtues, references: references} })
            }, error => { alert(error) })
        }
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