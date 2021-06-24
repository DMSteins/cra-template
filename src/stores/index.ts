import { createContext } from 'react';
import UserStore from "./user.store"

const user = new UserStore()

export const store = {
    user
}
export const StoreContext = createContext(store);