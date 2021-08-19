window.addEventListener('DOMContentLoaded', () => {
  // .tagがクリックされたときを指定
  $('.category-name').click(function(){
    // 今ある.activeを削除
    console.log('クリック')
    $('.active').removeClass('active');
    // クリックされた.tagに.activeを追加
    $(this).addClass('active');
    // 今ある.showを削除
    $('.show').removeClass('show');
    // indexに.tagのindex番号を代入
    const index = $(this).index();
    // .book-contents とindexの番号が同じ要素に.showを追加
    $('.book-contents ').eq(index).addClass('show');
  });
});