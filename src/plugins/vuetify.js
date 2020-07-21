import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
  theme: {
    primary: true,
    dark: true,
  },
};

export default new Vuetify(opts);
