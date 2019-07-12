//包含n个reducer函数的模块
import { USER_SET_CITY, HEADLINE, AD, RB, DISCOUNT, REDUCE, LIKES } from "./action-type";
import {combineReducers} from 'redux'
import reducerLoading from './reducers/isLoading'

function reducerCity(state='北京',action){ //形参默认值
    // console.log('reducerCity------' + action.type)
    switch(action.type){
        case USER_SET_CITY:
            return action.data
        default:
            return state
    }
}

const reducerHeadline = (state = [], action) => {
    // console.log('reducerHeadline------' + action.type)
    switch (action.type) {
        case HEADLINE:
            return action.data.moduleData.data.list
        default:
            return state
    }
}

const reducerAd = (state = [], action) => {
    // console.log('reducerAd------' + action.type)
    switch (action.type) {
        case AD:
            return action.data.moduleData.data.list
        default:
            return state
    }
}

const reducerRb = (state = [], action) => {
    // console.log('reducerRb------' + action.type)
    switch (action.type) {
        case RB:
            return action.data.moduleData.data.list
        default:
            return state
    }
}

const reducerDiscount = (state = [], action) => {
    // console.log('reducerDiscount------' + action.type)
    switch (action.type) {
        case DISCOUNT:
            return action.data.moduleData.data.preferenceValueHuiVos
        default:
            return state
    }
}

const reducerReduce = (state = [], action) => {
    // console.log('reducerReduce------' + action.type)
    switch (action.type) {
        case REDUCE:
            return action.data.moduleData.data.dayHuiVos
        default:
            return state
    }
}

const reducerLikes = (state = [], action) => {
    // console.log('reducerLikes------' + action.type)
    switch (action.type) {
        case LIKES:
            return action.data.moduleData.data.guessYouVoList
        default:
            return state
    }
}



export const finalReducer = combineReducers({
    reducerCity,
    reducerAd,
    reducerHeadline,
    reducerRb,
    reducerDiscount,
    reducerReduce,
    reducerLikes,
    reducerLoading
})