import { LOGIN } from "./action";

const initialState = { user: null };

export const loginReducer = (store = initialState, { type, payload }) => {
    console.log("payload:", payload);
    switch (type) {
        case LOGIN: {
            return { ...store, users: payload };
        }
        default: {
            return store;
        }
    }
}