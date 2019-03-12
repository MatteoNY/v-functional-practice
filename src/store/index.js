import Vue from 'vue'
import Vuex from 'vuex'


import shared  from './modules/shared/shared-store.module'
import farecompare  from './modules/fare-compare.module'

Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,
  modules: {
    'air-results-shared': shared,
    'fare-compare' : farecompare
  }
})
