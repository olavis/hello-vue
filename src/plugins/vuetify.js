import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            standard: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            light: { // developers-like-coffee-theme
                primary: '#FFF8E1',
                secondary: '#424242',
                accent: '#4E342E',
                error: '#DD2C00',
                info: '#CCC5AF',
                success: '#8BC34A',
                warning: '#FFC107',
            }
        }
    }
});
