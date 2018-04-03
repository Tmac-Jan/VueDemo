import * as types from "./types"
export default {
  add:({
         commit
  })=>{
    commit(types.ADD);
},
  minuts:({
    commit
  })=>{
    commit(types.MINUTS);
  }
}
