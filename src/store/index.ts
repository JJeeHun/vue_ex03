import { createStore } from "vuex";
import loading from "./modules/loading";

// state, getters, mutations, actions, modules
export default createStore({
    modules: {loading},
} as any);
