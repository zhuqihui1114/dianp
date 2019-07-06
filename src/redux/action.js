import { USER_SET_CITY, HEADLINE, AD, RB, DISCOUNT, REDUCE, LIKES } from "./action-type";
import axios from 'axios'

//包含所有的action creator
export const actionCity = (data) => ({
    type: USER_SET_CITY,
    data
})
export const actionHeadLine = (data) => ({
    type: HEADLINE,
    data
})
export const actionAd = (data) => ({
    type: AD,
    data
})
export const actionRb = (data) => ({
    type: RB,
    data
})
export const actionDiscount = (data) => ({
    type: DISCOUNT,
    data
})
export const actionReduce = (data) => ({
    type: REDUCE,
    data
})
export const actionLikes = (data) => ({
    type: LIKES,
    data
})

export const getHomeInfo = () => (
    async dispatch => {
        const res = await axios(`/assets/json/homeInfo.json`)
        setTimeout(() => {
            if (res.data.code === 200) {
                const modules = analyse(res.data.data.moduleInfoList)
                dispatch(actionCity('wuhan'))
                dispatch(actionHeadLine(modules['headline']))
                dispatch(actionAd(modules['xyhzq']))
                dispatch(actionRb(modules['rb']))
                dispatch(actionDiscount(modules['czth']))
                dispatch(actionReduce(modules['ttlj']))
                dispatch(actionLikes(modules['cnxh']))
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