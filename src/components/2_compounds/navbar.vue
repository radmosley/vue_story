<style>
.nav {
    background: black;
}
.main-nav {
    display: flex;
    flex-direction: row;
    width:80%;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
}
</style>

<template>
<div class="nav">
    <nav class="main-nav">
        <branding></branding>
        <search></search>
    </nav>
</div>
</template>

<script>
import branding from '../1_molecules/branding.vue'
import search from '../1_molecules/search.vue'

export default {
    components: {
        branding,
        search
    }
}
</script>