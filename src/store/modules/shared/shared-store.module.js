export const state = {
  isLoading: true,
  scrollToSection: null,
  error: '',
  lastTopOfPageId: null,
  count: 0,
  ciaoDude: 'hello',
  postIds: [],
  posts: {},
  dogs: [
    { name: "lucky", breed: "poodle", age: 1 },
    { name: "pochy", breed: "dalmatian", age: 2 },
    { name: "blackie", breed: "poodle", age: 4 }
  ]
}

import getters from '@/store/modules/shared/getters'
import mutations from '@/store/modules/shared/mutations'
import actions from '@/store/modules/shared/actions'

 
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}