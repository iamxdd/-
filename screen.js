(function (doc, win) {
  var docEl = doc.documentElement,
  recalc = function () {
  //getBoundingClientRect获取元素位置 
    var mainWidth = document.getElementsByTagName("body")[0].getBoundingClientRect().width;
    // 1366 1920屏幕最小最大宽度
    if(mainWidth<1280)mainWidth = 1280;
    if(mainWidth>1920)mainWidth = 1920;
    if (!mainWidth) return;
    docEl.style.fontSize = 100 * (mainWidth / 1366) + 'px';
  };
  recalc(); 
  win.addEventListener("resize", recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window); 
