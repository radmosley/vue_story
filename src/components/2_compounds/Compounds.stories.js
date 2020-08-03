import Vue from 'vue';
import navbar from './navbar.vue';

export default { title: 'Components' };

export const navBar = () => ({
    components: { navbar },
    template: '<navbar></navbar>'
})

export const subNav = () => ({
    components: {  },
    template: '<heading_1></heading_1>'
})

export const icon = () => ({
    components: {  },
    template: '<heading_1></heading_1>'
})