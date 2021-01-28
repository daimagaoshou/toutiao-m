import axios from 'axios'

const request = axios.create({
    baseURL:'http://ttapi.research.itcast.cn/mp/'
})

export default request