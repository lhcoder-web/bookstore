import axios from 'axios';

import { setLocalForage } from '../utils/localForage';
// export function request(config){
//     const instance = axios.create({
//         baseURL:'http://192.168.100.2:8081',
//         timeout:5000
//     })
//  //因为axios 实例是自动返回一个 promise 对象 所以我们不用自己包装promise对象
//     return instance(config)
// }

//请求数据的方法
//书城页面书架
export function home() {
    return axios({
        method:'get',
        url:`${process.env.VUE_APP_BASE_URL}/book/home`
    })
}
//详情页数据
export function detail(book) {
    return axios({
        method:'get',
        url:`${process.env.VUE_APP_BOOK_URL}/book/detail`,
        params:{
            fileName:book.fileName
        }
    })
}
//查看全部列表数据
export function list() {
    return axios({
        method:'get',
        url:`${process.env.VUE_APP_BASE_URL}/book/list`
    })
}

//书架数据
export function shelf() {
    return axios({
        method:'get',
        url:`${process.env.VUE_APP_BASE_URL}/book/shelf`
    })
}

 //通过download方法下载图书
export function download(book,success,progress) {
    //把epub书的服务器路劲拼接出来 通过axios请求实现下载
    //因为本地的服务器下载速度很快，没有办法看见进度动画，所以采用线上的接口下载
    //本地的：192.168.100.2:8081/epub
    return axios.create({
                // baseURL:process.env.VUE_APP_RES_URL + '/epub',
                baseURL:process.env.VUE_APP_EPUB_URL,
                timeout:180000,
                method:'get',
                //下载的个格式
                responseType:'blob',
                //进度事件
                onDownloadProgress:ProgressEvent=> {
                    if (progress) {
                        //把ProgressEvent事件回调回去
                        progress(ProgressEvent)
                    }
                }
            }).get(`${book.categoryText}/${book.fileName}.epub`)
            .then(res=> {
               const blob = new Blob([res.data]);
               //存储到indexDB中 书名当做key  blod对象是值
               setLocalForage(book.fileName,blob,()=> {
                   if (success) success(book)
               })
            })
}

export function flatList() {
    return axios({
      method: 'get',
      url: `${process.env.VUE_APP_BOOK_URL}/book/flat-list`
    })
  }
