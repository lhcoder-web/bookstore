module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production'
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
