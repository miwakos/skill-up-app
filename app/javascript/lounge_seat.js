function seat () {
  if (document.getElementById('lounge-img-contents')) {

    // モーダルウィンドウ
    $(function () {
      $('#overlay, .modal-window').fadeIn();
      $('.js-close').click(function () {
      $('#overlay, .modal-window').fadeOut();
      });
    });

  };
};

window.addEventListener('DOMContentLoaded', seat);