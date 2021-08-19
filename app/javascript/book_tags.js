window.addEventListener('DOMContentLoaded', () => {
  let tags = document.getElementsByClassName("category-name");
  tagsAry = Array.prototype.slice.call(tags);

  function tagSwitch() {
    // 全てのactiveクラスのうち、最初の要素を削除
    document.getElementsByName("active")[0].classList.remove("active");
    // クリックしたタブにactiveクラスを追加
    this.classList.add("active");

    // 全てのshowクラスのうち、最初の要素を削除
    document.getElementsByClassName("show")[0].classList.remove("show");
    // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    const index = tagsAry.indexOf(this);

    // クリックしたbook-contentsクラスにshowクラスを追加する
    document.getElementsByClassName("book-contents")[index].classList.add("show");
  };

  // タグの中でクリックイベントが発生した場所を探し、tagSwitch関数を呼び出す
  tagsAry.forEach(function(value) {
    value.addEventListener("click", tagSwitch);
  });

});