function seat () {
  if (document.getElementById('lounge-img-contents')) {
    const userNickname = document.getElementById('user-nickname');
    const seatNo1 = document.getElementById('seat-no1');
    const seatNo2 = document.getElementById('seat-no2');
    const seatNo3 = document.getElementById('seat-no3');
    const seatNameNo1 = document.getElementById('seat-name-no1');
    const seatNameNo2 = document.getElementById('seat-name-no2');
    const seatNameNo3 = document.getElementById('seat-name-no3');
    const seatIconNo1 = document.getElementById('seat-icon-no1');
    const seatIconNo2 = document.getElementById('seat-icon-no2');
    const seatIconNo3 = document.getElementById('seat-icon-no3');
    const noSeatNo1 = document.getElementById('no-seat-no1');
    const noSeatNo2 = document.getElementById('no-seat-no2');
    const noSeatNo3 = document.getElementById('no-seat-no3');
    const seatUserIconImgNo1 = document.getElementById('seat-user-icon-img-no1');
    const seatUserIconImgNo2 = document.getElementById('seat-user-icon-img-no2');
    const seatUserIconImgNo3 = document.getElementById('seat-user-icon-img-no3');

    // seat1がクリックされた場合
    seatNo1.addEventListener('click', () => {
      seatNameNo1.innerHTML = userNickname.innerHTML
      seatNameNo1.setAttribute('style', 'visibility: visible;');
      noSeatNo1 .innerHTML = ''
      seatIconNo1.setAttribute('style', 'padding-top: 0px;');
      seatUserIconImgNo1.setAttribute('style', 'visibility: visible;');
    });

    // seat2がクリックされた場合
    seatNo2.addEventListener('click', () => {
      seatNameNo2.innerHTML = userNickname.innerHTML
      seatNameNo2.setAttribute('style', 'visibility: visible;');
      noSeatNo2 .innerHTML = ''
      seatIconNo2.setAttribute('style', 'padding-top: 0px;');
      seatUserIconImgNo2.setAttribute('style', 'visibility: visible;');
    });

    // seat3がクリックされた場合
    seatNo3.addEventListener('click', () => {
      seatNameNo3.innerHTML = userNickname.innerHTML
      seatNameNo3.setAttribute('style', 'visibility: visible;');
      noSeatNo3 .innerHTML = ''
      seatIconNo3.setAttribute('style', 'padding-top: 0px;');
      seatUserIconImgNo3.setAttribute('style', 'visibility: visible;');
    });

  };
};

window.addEventListener('DOMContentLoaded', seat);