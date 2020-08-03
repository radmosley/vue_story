import Vue from 'vue';
import search from './search.vue';
import branding from './branding.vue';

export default { title: 'Fields' };

export const siteBranding = () => ({
    components: { branding },
    template: '<branding></branding>'
})

export const searchInput = () => ({
    components: { search },
    template: '<search></search>'
})
