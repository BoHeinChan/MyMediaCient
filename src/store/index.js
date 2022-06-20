import { createStore } from "vuex";

export default createStore({
    state: {
        token: "",
        user: {},
    },
    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user,
    },
    mutations: {},
    actions: {
        setToken: ({ state }, value) => (state.token = value),
        setUser: ({ state }, value) => (state.user = value),
    },
    modules: {},
});