import RootStore from "../stores/root-store";
import {useContext} from "react";
import {createContext} from "react";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores=()=>{
    const context = useContext(RootStoreContext);
    if(context === null){
        throw new Error("useStores() must be used within the root store")
    }
    return context
}
