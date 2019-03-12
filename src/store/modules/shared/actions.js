import { AIR_RESULTS_SERVICES, AIR_RESULTS_SHARED } from "@/_config/store/namespaces.js";
import { SCROLL_TO_TOP, SET_ERROR, SET_IS_LOADING, GET_IS_LOADING, SCROLL_TO_SECTION } from '@/_config/store/shared'

export default {

  [SCROLL_TO_SECTION]({ commit }, payload) {
  
      const newBookmark  = '#bmark-'+payload
      this.dispatch( `${AIR_RESULTS_SHARED}/${SCROLL_TO_TOP}`,{ bookmark: newBookmark });
       commit(SCROLL_TO_SECTION, payload)
    },
    [SCROLL_TO_TOP]({ commit }, payload) {
      commit(SCROLL_TO_TOP, payload)
    },
    [SET_IS_LOADING]({ commit }, payload) {
    
     commit(SET_IS_LOADING, payload)

    }
  }

 