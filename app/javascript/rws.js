// 修正中

window.addEventListener('DOMContentLoaded', () => {
  const searchBtm = document.getElementById('book-search-btn');
  // 検索ボタンクリック時に発火
  searchBtm.addEventListener('click', (e) => {
    // デフォルトの送信処理を無効化
    e.preventDefault();

    // リクエストURL作成・送信
    const XMLRequest = new XMLHttpRequest();
    const form = document.getElementById('book-registration-sub');
    const targetKeyword = new FormData(form);
    const baseUrl = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?';
    const applicationId = process.env.RWS_APPLICATION_ID;
    // const title = `&title=${keyword}`
    const title = "&title=嫌われる勇気"
    // const sort = '&sort=sales'
    const requestUrl = baseUrl + applicationId + title;
      // valueをURLエンコード
    const encodedRequestUrl = encodeURI(requestUrl);
    console.log(encodedRequestUrl);
    XMLRequest.open('GET', requestUrl, true)

    // レスポンス返却時の処理
    XMLRequest.onload = function () {
      const data = this.response;
      console.log(data);
    };

  });
});


// window.addEventListener('DOMContentLoaded', () => {
//   $(function () {
//     $('#book-search-btn').on('click', function (e) {
//       e.preventDefault();
//       const keyword = $('#search_keyword').val();
//       console.log(keyword)
//       $.get('https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?'), {
//         applicationId: `${process.env.RWS_APPLICATION_ID}`,
//         title: keyword
//       }, function(data){
//         if (data.count > 0){
//           debugger
//           console.log(data[0])
//         };
//       };
//     });
//   });
// });
