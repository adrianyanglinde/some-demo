const model= require('./model');

const basicPath = "https://www.baidu.com/11062";
const host = "img.baidu.net";
const depositPath = "/Users/adrianyoung/Downloads/";

const main = async _url => {
    let page = await model.getPage(_url);
    let name = await model.getTitle(page.res);
    let imageNum = await model.getImagesNum(page.res,name);//获取这组图片的数量
    await model.createDir(name,depositPath);
    for (let i = 1; i <= imageNum; i++) {
        let url = i === 1 ? _url : _url + `/${i}`;
        let data = await model.getPage(url);//遍历获取这组图片每一张所在的网页
        let src = await model.getUrl(data,$ =>{
            return $(".main-image").find("img")[0].attribs.src;
        });
        await model.downloadImage(src,i,url,host,name);//下载
    }
};

main(basicPath);


