"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //index.html 按鈕事件(reply and cancel)

$(function () {
  $("#btn-reply").click(function (e) {
    e.preventDefault();
    $('#btn-mark').addClass('d-none');
    $('#btn-cancel').removeClass('d-none');
    $('#btn-reply').addClass('d-none');
    $('#btn-reply-submit').removeClass('d-none');
  });
  $("#btn-cancel").click(function (e) {
    e.preventDefault();
    $('#btn-cancel').addClass('d-none');
    $('#btn-mark').removeClass('d-none');
    $('#btn-reply-submit').addClass('d-none');
    $('#btn-reply').removeClass('d-none');
  });
}); // layout.ejs 側邊導覽列點擊事件

$(document).ready(function () {
  var str = location.href.toLowerCase();
  $("#link-admin").each(function () {
    if (str.indexOf(this.href.toLowerCase()) > -1) {
      $('.nav-link').removeClass('active'); //清除所有link上的active

      $(this).addClass("active"); //將目前點擊的元素加上active
    }
  });
});
//# sourceMappingURL=all.js.map
