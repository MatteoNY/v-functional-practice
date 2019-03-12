import Vue from 'vue'

import AsyncHelperLib from '@/store/async-helper-lib'
const asyncHelperLib = new AsyncHelperLib();

let API_DATA_URI_FARE_COMPARE = ''
API_DATA_URI_FARE_COMPARE = 'https://journeysoft.com/dist/vfunpractice/category-data.json'

function fareCompareL1(arr) {
  return arr.map(data => {
    return {
      key: data.key,
      value: data.value,
      touteImg: data.touteImg,
      touteText: data.touteText
    }
  });
}

function fareCompareL0(arr) {
  return arr.reduce((acc, { key, types }) => {
    return acc.concat(types.map(item => ({ key, val: item.key, content: item.content } ) ) );
  }, []);

}

function setTouteObjModel(idx) {
  state.touteObj = { ...state.touteObj, ...idx }
  return state.touteObj
}

function setFareTextModel(idx) {
  state.fareTextObj = { ...state.fareTextObj, ...idx }
  return state.fareTextObj
}

const loadFareCompareDataFromClass = async (url) => {
  const data = await asyncHelperLib.loadDataFromServerByURL(url);
  return data;
};

export const state = {
  fareCompareData: [],
  fareCompareLookup: [],
  touteObj: {},
  fareTextObj: {}
}

export const mutations = {

  LOAD_FARE_COMPARE_DATA(state, payload) {
    state.fareCompareData = payload
  },
  SET_FARE_TOUTE_LOOKUP(state, payload) {
    state.fareCompareLookup = payload
  },
  SET_TOUTE_OBJ(state, payload) {
    setTouteObjModel(payload)
  },
  SET_FARE_TEXT_OBJ(state, payload) {
    setFareTextModel(payload)
  }

}

export const actions = {
  LOAD_FARE_COMPARE_DATA({
    commit
  }, payload) {

    const loadFareCompareDataFromClass = async (url) => {
      const data = await asyncHelperLib.loadDataFromServerByURL(url);
      return data;
    };

    loadFareCompareDataFromClass(API_DATA_URI_FARE_COMPARE)
      .then((data) => {

        const dataL0 = fareCompareL0(data)
        commit('LOAD_FARE_COMPARE_DATA', dataL0)

        const fcl1data = fareCompareL1(data)
        this.dispatch('fare-compare/SET_FARE_TOUTE_LOOKUP', fcl1data)

      }).catch((error) => {
        console.error(`@received error from server ${error} ref: FareCompareData`);
      });
  },
  SET_FARE_TOUTE_LOOKUP({
    commit
  }, payload) {
    commit('SET_FARE_TOUTE_LOOKUP', payload)
  },
  SET_TOUTE_OBJ({
    commit
  }, payload) {
    commit('SET_TOUTE_OBJ', payload)
  },
  SET_FARE_TEXT_OBJ({
    commit
  }, payload) {
    commit('SET_FARE_TEXT_OBJ', payload)
  }

}

export const getters = {

  GET_TOUTE_OBJ: state => {
    return state.touteObj
  },
  GET_FARE_TEXT_OBJ: state => {
    return state.fareTextObj
  },
  GET_FARE_TOUTE_LOOKUP: (state) => (key) => {
    return state.fareCompareLookup.find(x => x.key === key)
  },
  GET_FARE_COMPARE_DATA: (state) => (key, val) => {
    return state.fareCompareData.find(x => `${x.key}-${x.val}` === `${key}-${val}`)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}