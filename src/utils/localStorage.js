//localstorage 主要写 退出前再次进入保留上次状态
import storage from 'web-storage-cache'
const localstorage = new storage();

export function setLocalStorage(key,value) {
    return localstorage.set(key,value)
}
export function getLocalStorage(key) {
    return localstorage.get(key)
}
export function removeLocalStorage(key) {
    return localstorage.delete(key)
}
export function clearLocalStorage() {
    return localstorage.clear()
}
//把书名当做key  {key:value}当做value
export function setBookObject(fileName,key,value) {
    //查看书是否存在 book 就是 key为fileName 的值
    let book = getLocalStorage(fileName+'-info');
    if(!book) {
        //如果不存在 初始化一下book
        book = {};
    }
    book[key] = value;
    //保存进storage中
    setLocalStorage(fileName+'-info',book)
}

export function getBookObject(fileName,key) {
    //查看书是否存在 book 就是 key为fileName 的值
    let book = getLocalStorage(fileName +'-info');
    if(book) {
        return book[key];
    }else {
        return null;
    }
}
//获取书架
export function getBookShelf() {
    return getLocalStorage('shelf')
}
//设置书架到localStroage中
export function saveBookShelf(shelf) {
    return setLocalStorage('shelf',shelf)
}

//设置用户登录
let user = [];
export function saveUser(userMessage) {
    user.push(userMessage);
    return setLocalStorage('user',user);
}
//获取用户登录
export function getUser() {
    return getLocalStorage('user')
}


//获取字体
export function getFontFamily(fileName) {
    return getBookObject(fileName,'FontFamily')
}
//存储字体
export function saveFontFamily(fileName,font) {
    return setBookObject(fileName,'FontFamily',font)
}
//获取字号
export function getFontSize(fileName) {
    return getBookObject(fileName,'FontSize')
}
//存储字号
export function saveFontSize(fileName,font) {
    return setBookObject(fileName,'FontSize',font)
}
//获取主题
export function getThemes(fileName) {
    return getBookObject(fileName,'Themes')
}
//存储主题
export function saveThemes(fileName,font) {
    return setBookObject(fileName,'Themes',font)
}
//获取阅读位置
export function getLocation(fileName) {
    return getBookObject(fileName,'Location')
}
//存储阅读位置
export function saveLocation(fileName,font) {
    return setBookObject(fileName,'Location',font)
}
//获取读书时间
export function getReadTime(fileName) {
    return getBookObject(fileName,'ReadTime')
}
//保存读书时间
export function saveReadTime(fileName,font) {
    return setBookObject(fileName,'ReadTime',font)
}
//获取保存书签中的文章
export function getBookmark(fileName) {
    return getBookObject(fileName,'bookmark')
}
//设置书签中的文章
export function saveBookmark(fileName,font) {
    return setBookObject(fileName,'bookmark',font)
}

