 import { SCROLL_TO_TOP, SET_ERROR, SET_IS_LOADING, GET_IS_LOADING, SCROLL_TO_SECTION } from '@/_config/store/shared'

export default {
    [GET_IS_LOADING](state) {
      return state.isLoading
    },
    error(state) {
      return state.error
    },
    getScrollToTop(state) {
      return state.error
    },
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    poodles: (state) => {
      return state.dogs.filter(dog => dog.breed === "poodle")
    },
  
    poodlesByAge: (state, getters) => (age) => {
      return getters.poodles.filter(dog => dog.age === age)
    }
  }