import {
    request
} from './request.js'

export function gethomeMultidata() {


    return request({
        url: '/home/multidata'
    })

}