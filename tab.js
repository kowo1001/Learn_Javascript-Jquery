//   버튼0 누르면
//   - 모든 버튼에 붙은 orange 클래스명 제거
//   - 버튼0에 orange 클래스명 추가
//   - 모든 div에 붙은 show 클래스명 제거
//   - div0에 show 클래스명 추가

var button = $(".tab-button");
var content = $(".tab-content");
var number = $(".tab-button").length;

for (let i = 0; i < number; i++) {
  button.eq(i).on("click", function () {
    탭열기(i);
  });
}

function 탭열기(숫자) {
  button.removeClass("orange");
  button.eq(숫자).addClass("orange");
  content.removeClass("show");
  content.eq(숫자).addClass("show");
}

$(".list").click(function (e) {
  // 탭열기(지금누른버튼에 숨겨져있는 data-id);
  탭열기(e.target.dataset.id);
  console.log(e.target.dataset.id);
});

$(".list").click(function (e) {
  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    탭열기(0);
  }
  if (e.target == document.querySelectorAll(".tab-button")[1]) {
    탭열기(1);
  }
  if (e.target == document.querySelectorAll(".tab-button")[2]) {
    탭열기(2);
  }
});
// button.eq(0).on("click", function () {
//   button.removeClass("orange");
//   button.eq(0).addClass("orange");
//   content.removeClass("show");
//   content.eq(0).addClass("show");
// });

// button.eq(1).on("click", function () {
//   button.removeClass("orange");
//   button.eq(1).addClass("orange");
//   content.removeClass("show");
//   content.eq(1).addClass("show");
// });

// button.eq(2).on("click", function () {
//   button.removeClass("orange");
//   button.eq(2).addClass("orange");
//   content.removeClass("show");
//   content.eq(2).addClass("show");
// });
