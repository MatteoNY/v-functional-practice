import { SCROLL_TO_TOP, SET_ERROR, SET_IS_LOADING, GET_IS_LOADING, SCROLL_TO_SECTION } from '@/_config/store/shared'

export default {
    SET_POST(state, { post }) {
      state.postIds.push(post.id)
      state.posts = { ...state.posts, [post.id]: post }
    },
    increment(state) {
      state.count++
    },
    setCiaoDude(state, payload) {
      state.ciaoDude = payload.ciaoDude
    },
    [SET_IS_LOADING](state, payload) {
      state.isLoading = payload
    },
    [SCROLL_TO_SECTION](state, payload) {
      state.scrollToSection = payload
    },
    [SET_ERROR](state, payload) {
      // stub
      state.error = payload
    },
    [SCROLL_TO_TOP](state, payload) {
          
    const value = payload.bookmark
    setTimeout(() => {
  
            const el = document.querySelector(value);
            //   console.log ('el?', el)
              if (el !== null) {
                el.focus();
                el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'end'
                });
            }
           
          }, 600);
  
      
      state.lastTopOfPageId = payload
    }
  }