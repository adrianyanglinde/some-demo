const model = require("./model");
const name = "范志毅的妻子张梦瑾";
const url = "http://slide.sports.sina.com.cn/n_c/slide_2_789_263820.html#p=5";
const host = "n.sinaimg.cn";
const depositPath = "/Users/adrianyoung/Downloads/sina/";

async function main() {
  const data = await model.getPage(url);
  const list = await model.getUrl(data, $ => {
    let list = [];
    $("#eData dl").each((i, e) => {
      list.push(
        $(e)
          .find("dd")
          .eq(0)
          .html()
      ); //输出目录页查询出来的所有链接地址
    });
    return list;
  });
  await model.createDir(name, depositPath);
  list.forEach((src, index) => {
    model.downloadImage(src, index, url, host, name);
  });
    
}

main();
