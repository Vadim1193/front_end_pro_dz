import Store from "@/plugins/store";

export const state = {
    app: '1.0.0',
    isLoading: false,
    showAlert: {
        type: '',
        message: '',
    },
    userInfo: null
};

export const mutation_types = {
    SET_IS_LOADING: 'SET_IS_LOADER',
    SET_SHOW_ALERT: 'SET_SHOW_ALERT',
    SET_USER_INFO: 'SET_USER_INFO'
};

const mutations = {
    [mutation_types.SET_IS_LOADING](state, payload) {
        state.isLoading = payload;
        state.showAlert = payload;
    },

    [mutation_types.SET_SHOW_ALERT](state, payload ) {
        state.showAlert = payload;
    },

    [mutation_types.SET_USER_INFO](state, payload) {
        state.userInfo = payload;
    }
};

export const store = new Store({
    state,
    mutations,
});
