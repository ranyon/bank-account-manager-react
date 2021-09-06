import {createStore} from "redux"
import AccountReducer from "./AccountReducer"

const Store = createStore(AccountReducer)

export default Store