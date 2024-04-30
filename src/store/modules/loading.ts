
const state = () => ({
    isLoading : false,
})
const mutations = {
    start: st => st.isLoading = true,
    stop: st => st.isLoading = false,
}

const getters = {}
const actions = {}


export default {
    namespaced: true,
    state,mutations,getters,actions
}
