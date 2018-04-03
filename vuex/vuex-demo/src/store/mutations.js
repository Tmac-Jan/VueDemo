import {
  ADD, MINUTS
} from "./types";
import getters from "./getters"
const state={
  count:20
};

const mutations={
  [ADD](state){
    state.count++;
  },
  [MINUTS](state){
    state.count--;
  }
};
export default {
  state,
  mutations,
  getters
}

