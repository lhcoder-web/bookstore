// function mock(app,url,data) {
//     app.get(url,(req,res)=> {
//         res.json(data)
//     })
// }
// const homeData = require('./src/mock/bookHome');
// const shelfData = require('./src/mock/bookShelf');
// const listData = require('./src/mock/bookList');
// const flatListData = require('./src/mock/bookFlatList');
module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production'
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    devServer: {
        //在应用启动前 开启资源（mockjs在下载电子书时会出现问题，所以采用这方法）
        // before(app) {
        //     mock(app,'/book/home',homeData);
        //     mock(app,'/book/shelf',shelfData);
        //     mock(app,'/book/list',listData);
        //     mock(app,'/book/flat-list',flatListData);
        // }
    }
}