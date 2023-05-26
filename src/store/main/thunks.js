import getOffers from "../../services/getOffers";
import { setOffers } from "./mainSlice";



export const startLoadingOffers = () => {
    return async(dispatch, getState) => {

        const result = await getOffers()
        dispatch(setOffers(result));

    }
}
