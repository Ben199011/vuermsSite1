const key = 'buyGoodsCount';
// 1.0 存储方法
// goodsinfo:{gid:88,bcount:1}
export function setItem(goodsinfo) {
    var goodsObj = getItem();

    if (goodsObj[goodsinfo.gid]) {

        goodsObj[goodsinfo.gid] += goodsinfo.bcount;
    } else {
        goodsObj[goodsinfo.gid] = goodsinfo.bcount;

    };
    localStorage.setItem(key, JSON.stringify(goodsObj));

};
// 2.0 获取方法
export function getItem() {
    var gStr = localStorage.getItem(key);
    var obj = JSON.parse(gStr);
    // console.log(obj)
    // 判断如果obj为null的话返回一个{}
    if (!obj) {
        // 向localStorage中写一个空对象
        localStorage.setItem(key, JSON.stringify({}));
        return {};
    }

    return obj;
};
// 3.0 删除方法
export function remoteItem(goodsId) {
    var goodsObj = getItem();
    delete goodsObj[goodsId];
    localStorage.setItem(key, JSON.stringify(goodsObj));
};
// 4.0 更新某个商品的购买数量
export function updateItem(obj) {
    //{gid:'',count:''}
    var goodsObj = getItem();
    console.log(obj.count)
    goodsObj[obj.gid] = obj.count;
    localStorage.setItem(key, JSON.stringify(goodsObj));
};