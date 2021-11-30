import { SEARCH_PRODUCT, SHOW_ALL_PRODUCTS } from "./actionTypes";


export const searchProduct = (search) => ({type:SEARCH_PRODUCT, search })
export const showAllProducts = (search) => ({type:SHOW_ALL_PRODUCTS, search})