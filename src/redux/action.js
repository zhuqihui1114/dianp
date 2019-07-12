import * as actionTyps from "./action-type";
import axios from 'axios'

//包含所有的action creator
export const actionCity = (data) => ({
    type: actionTyps.USER_SET_CITY,
    data
})
export const actionHeadLine = (data) => ({
    type: actionTyps.HEADLINE,
    data
})
export const actionAd = (data) => ({
    type: actionTyps.AD,
    data
})
export const actionRb = (data) => ({
    type: actionTyps.RB,
    data
})
export const actionDiscount = (data) => ({
    type: actionTyps.DISCOUNT,
    data
})
export const actionReduce = (data) => ({
    type: actionTyps.REDUCE,
    data
})
export const actionLikes = (data) => ({
    type: actionTyps.LIKES,
    data
})

// loading
const requestHomeInfo = () => ({
    type: actionTyps.REQUEST_HOME_INFO,
})

const receiveHomeInfo = () => ({
    type: actionTyps.RECEIVE_HOME_INFO
})

const requestHomeInfoFailure = () => ({
    type: actionTyps.REQUEST_HOME_INFO_FAILURE
})

export const getHomeInfo = () => (
    async dispatch => {
        const res = await axios(`/assets/json/homeInfo.json`)
        dispatch(requestHomeInfo())
        setTimeout(() => {
            if (res.data.code === 200) {
                const modules = analyse(res.data.data.moduleInfoList)
                dispatch(receiveHomeInfo())
                dispatch(actionCity('wuhan'))
                dispatch(actionHeadLine(modules['headline']))
                dispatch(actionAd(modules['xyhzq']))
                dispatch(actionRb(modules['rb']))
                dispatch(actionDiscount(modules['czth']))
                dispatch(actionReduce(modules['ttlj']))
                dispatch(actionLikes(modules['cnxh']))
            } else {
                dispatch(requestHomeInfoFailure())
            }
        }, 2000)
    }
)

const analyse = (moduleInfoList) => {
    return moduleInfoList.reduce((obj, module) => {
        return {
            ...obj,
            [module.moduleName]: module
        }
    }, {})
}