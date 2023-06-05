import axiosClient from "../axiosClient.js";

export function searchMeals({commit}, keyword) {
  axiosClient.get(`search.php?s=${keyword}`) //注意这里只能用反引号
    .then(({data}) => {
      commit('setSearchedMeals', data.meals)
    })
}