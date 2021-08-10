function seat () {
  if (document.getElementById('lounge-img-contents')) {

    // モーダルウィンドウ
    $(function () {
      $('#overlay, .modal-window-enter').fadeIn();
      $('.js-close').click(function () {
        $('#overlay, .modal-window-enter').fadeOut();
        });
    });

    // 退出前に他ページに遷移しようとした際のモーダルウィンドウ
    $(function () {
      $('a').on('click', function(e) {
        e.preventDefault();
        $('#overlay, .modal-window-exit').fadeIn();
        $('.js-close').click(function () {
          $('#overlay, .modal-window-exit').fadeOut();
        });
      });
    });
    // 退出前にリロードしようとした際のモーダルウィンドウ
    // $(function () {
    //   $(window).on('beforeunload', function(e) {
    //     $('#overlay, .modal-window-exit').fadeIn();
    //     $('.js-close').click(function () {
    //       $('#overlay, .modal-window-exit').fadeOut();
    //       e.preventDefault();
    //     });
    //   });
    // });

    // 退出用のリダイレクト
    const exitBtn = document.getElementById('lounge-exit-btn');
    exitBtn.addEventListener('click', () => {
      location.href = '/lounges'
    });

  };
};

window.addEventListener('DOMContentLoaded', seat);