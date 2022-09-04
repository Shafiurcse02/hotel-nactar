import { createStore } from 'redux'


const initalState = {
    user: [],
    loggedInUser: null,
    products: [{
        id: 1,
        name: "Pen",
        price: 250
    },
    {
        id: 2,
        name: "Bok",
        price: 250
    },
    {
        id: 3,
        name: "mobile",
        price: 25060
    }],
    card: []

}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                user: [...state.user, action.payload]
            }
            case "LOGIN":
                return {
                    ...state,
                    user: action.payload
                }

        default:
            return state;
    }
}
export default createStore(reducer)
