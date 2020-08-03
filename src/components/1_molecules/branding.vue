<style>
.site-branding {
    font-family: sans-serif;
    text-decoration: none;
    font-size: 30px;
    color: white;
    background: black;
}
</style>

<template>
<div>
    <a href="#" class="site-branding">{{ siteBranding }}</a>
</div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            siteBranding: 'Website Title'
        }
    }
}
</script>