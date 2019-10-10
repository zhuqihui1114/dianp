//包含n个reducer函数的模块
import {
  USER_SET_CITY, HEADLINE, AD, RB, DISCOUNT, REDUCE, LIKES,
  HIDE_LIKES_HOVER, RECEIVE_LIKES, REQUEST_LIKES, REQUEST_HEAD_LINE, RECEIVE_HEAD_LINE
} from "./action-type";
import {combineReducers} from 'redux'
import reducerLoading from './reducers/isLoading'

function reducerCity(state = '北京', action) { //形参默认值
  // console.log('reducerCity------' + action.type)
  switch (action.type) {
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

const reducerHeadLineList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_HEAD_LINE:
      return state
    case RECEIVE_HEAD_LINE:
      return action.list
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

const reducerLikes = (state = {
  isShowLikesHover: true,
  isLoading: false,
  hasMore: true,
  data: [],
  page: 0
}, action) => {
  // console.log('reducerLikes------' + action.type)
  switch (action.type) {
    case LIKES:
      return {
        ...state,
        data: action.data.moduleData.data.guessYouVoList,
        page: action.data.moduleData.data.startNum
      }
    case REQUEST_LIKES:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_LIKES:
      return {
        ...state,
        isLoading: false,
        page: action.data.moduleData.data.startNum,
        hasMore: state.page >= 3 ? false : true,
        data: [...state.data, ...action.data.moduleData.data.guessYouVoList]
      }
    case HIDE_LIKES_HOVER:
      return {
        ...state,
        isShowLikesHover: false
      }
    default:
      return state
  }
}


export const finalReducer = combineReducers({
  cityName: reducerCity,
  adlist: reducerAd,
  headline: reducerHeadline,
  headlineList: reducerHeadLineList,
  rblist: reducerRb,
  discount: reducerDiscount,
  reducelist: reducerReduce,
  likelist: reducerLikes,
  loading: reducerLoading
})