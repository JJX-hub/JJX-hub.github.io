// 创建全屏背景元素
var bgElement = document.createElement('div');
bgElement.id = 'web_bg';
bgElement.style.position = 'fixed';
bgElement.style.width = '100%';
bgElement.style.height = '100%';
bgElement.style.zIndex = '-1';
bgElement.style.backgroundSize = 'cover';
bgElement.style.backgroundPosition = 'center';

// 获取banner图片URL
var bannerImg = document.querySelector('.banner').style.backgroundImage;
if (bannerImg) {
  bgElement.style.backgroundImage = bannerImg;
}

// 添加到body的第一个子元素位置
document.body.insertBefore(bgElement, document.body.firstChild);

// 调整banner样式（可选，根据需要）
document
  .querySelector("#banner")
  .setAttribute('style', 'background-image: url()')
document
  .querySelector("#banner .mask")
  .setAttribute('style', 'background-color:rgba(0,0,0,0)')
// document.querySelector('#banner').style.backgroundImage = 'none';
// document.querySelector('#banner .mask').style.backgroundColor = 'rgba(0, 0, 0, 0)';