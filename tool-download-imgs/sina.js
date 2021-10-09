const model = require("./model");
const name = "美女记者Lisa";
const url = "https://slide.sports.sina.com.cn/k/slide_2_786_268889.html#p=3";
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
