<template>
    <div id="nav">
        <b-row>
        <div class="col-6 text-left">
            <img src="@/assets/rom_logo.png" width="40%" height="40%"/>
        </div>
        <b-nav align="right" class="col-6">
            <b-nav-item><router-link to="/plant-list">Plant List</router-link></b-nav-item>
            <b-nav-item><router-link to="/">About</router-link></b-nav-item>
            <b-nav-item>Visit</b-nav-item>
        </b-nav>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {

    }
}
</script>