import Vue from 'vue';
import heading_1 from './headings.vue';

export default { title: 'Site Defaults' };

export const headingOne = () => ({
    components: { heading_1 },
    template: '<heading_1></heading_1>'
})

export const headingTwo = () => ({
    components: { heading_1 },
    template: '<heading_1></heading_1>'
})